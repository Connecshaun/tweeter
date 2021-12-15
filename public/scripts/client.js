/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//Eventually we'll capture this from the server
$(document).ready(function () {

  //listen for submit event and prevent default behaviour(page refresh) & create AJAX post request that sends the form data to the server
  $('.target-form').submit(function (event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(this).serialize(),
      success: () => {
        console.log("the data has been posted and here is the post", $(this).serialize())
      },
      error: (error) => {
        console.log("the post has failed and this is the error", error)
      },
    });
  });

  // const tweetData = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd"
  //     },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]

  // fetch tweets from http://localhost:8080/tweets
  const loadTweets = function () {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (res) => {
        renderTweets(res);
      },
      error: (error) => {
        console.log("this request failed and this was the error", error);
      },
    });

  }
  loadTweets()



  // takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet. 
  const createTweetElement = function (tweet) {
    const $tweet = $(`
    <article class="box">
    <header class="header-article">
      <div class="tweet-by-follower"><img class="follower-pic" src="${tweet.user.avatars}"><span
      class="name">${tweet.user.name}</span></div>
      <div class="follower-handle">${tweet.user.handle}</div>
    </header>
    <textarea class="textarea-article" wrap="off" rows="1" name="text" placeholder="enter your tweet here">${tweet.content.text}</textarea>
    <footer>
      <div class="days-ago">${timeago.format(tweet.created_at)}</div>
      <div class="tweet-icons"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>`);
    return $tweet;
  }

  //takes in an array of tweet objects leveraging createTweetElement function by passing the tweet object to it, then append the returned object to tweets container section
  const renderTweets = function (tweets) {
    tweets.forEach(tweet => {
      const $userTweet = createTweetElement(tweet);
      $('.tweet-container').prepend($userTweet)
      // return userTweet;
    })
  }
  // renderTweets(tweetData);


  // const $tweet = renderTweets(tweetData)

});
