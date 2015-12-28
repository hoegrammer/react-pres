var flux = require('fluctuations');
var merge = require('deep-extend');
var request = require('request');
var Immutable = require('immutable');

/**
 * Hot reloading stores!
 *
 * The trick is to always re-use the `dispatcher` instance
 *
 * dispatcher.addStore will use the stores' merge functions
 * when re-adding another store with the same key
 */
var dispatcher = flux.createDispatcher();
if (module.hot) {
  if (module.hot.data) {
    dispatcher = module.hot.data.dispatcher;
  }
  module.hot.accept();
  module.hot.dispose((data) => data.dispatcher = dispatcher);
}

dispatcher.addInterceptor('externalData', flux.createInterceptor({
  FETCH(dispatch) {
    var options = {
      url: "http://jsonplaceholder.typicode.com/posts/1",
    };
    request.get(options, (err, res) => {
      if (err) {
        return dispatch("ERROR", err);
      }
      dispatch("DATA_RECEIVED", JSON.parse(res.body)); });
  }
}));

var initial = () => ({});
dispatcher.addStore('externalData', flux.createStore(
  initial,
  {
    DATA_RECEIVED(state, responseBody) {
      state.data = Immutable.Map(responseBody);
      return state;
    },
    ERROR(state, err) {
      state.error = true;
      console.log(err);
			return state;
    }
  },
  merge
));

module.exports = dispatcher;
