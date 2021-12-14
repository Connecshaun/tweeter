/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//Eventually we'll capture this from the server
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


//define a function createTweetElement that takes in a tweet object 
//responsible for returning a tweet <article> element containing the entire HTML structure of the tweet.
const createTweetElement = function (tweetObject) {
  const tweet = tweetObject["content"]["text"]
  return tweet;
}

$(document).ready(function () {
  const $tweet = createTweetElement(tweetData)

  $('.textarea-article').append($tweet)
});
