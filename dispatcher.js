var flux = require('fluctuations');
var merge = require('deep-extend');
var request = require('browser-request');

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

dispatcher.addInterceptor('twitter', flux.createInterceptor({
  FETCH(emit) {
    emit("LOADING");
    var options = {
      uri: "https://api.twitter.com/1.1/search/tweets.json?q=%23reactjs&count=1",
      json: true,
      headers: {
	"Authorization": 
          "Bearer AAAAAAAAAAAAAAAAAAAAAFTvjQAAAAAA6sLOF9MK2lTyOzwu2YgJTg5UKCw%3D7GeUi5btp0pAgfEBbjirKR9guI53y19n4pvxxuLF0MeJFmZMF4"
      }
    };
    request(options, (err, res, body) => {
      if (err) {
        return emit("ERROR", err);
      }
      emit("DATA_RECEIVED");
    });
  }
}));

var initial = () => {};
dispatcher.addStore('twitter', flux.createStore(
  initial,
  {
    DATA_RECEIVED(state, { data }) {
      var tweet = data.statuses[0];
      state.tweet = {
	author: tweet.user.name,
	text: tweet.text,
	date: tweet.created_at
      }; 
      return state;
    },
    ERROR(state, err) {
      state.error = true;
      console.log(err);
    }
  },
  merge
));

module.exports = dispatcher;
