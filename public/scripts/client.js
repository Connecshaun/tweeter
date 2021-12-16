/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//Eventually we'll capture this from the server

$(document).ready(function () {

  //listen for submit event and prevent default behaviour(page refresh)
  $('.target-form').submit(function (event) {
    event.preventDefault();

    //validate tweet
    const typedInTweet = $('#tweet-text').val()
    const errorPopUp = $('.error')
    if (typedInTweet.length > 140) {
      errorPopUp.empty();
      return errorPopUp.slideDown("swing", () => {
        errorPopUp.append("<span>\u26A0 Your tweet is too long. Please shorten. \u26A0</span>")
      })
    } else if (typedInTweet.length === 0 || typedInTweet === null) {
      errorPopUp.empty();
      return errorPopUp.slideDown("swing", () => {
        errorPopUp.append("<span>\u26A0 You did not type your tweet. \u26A0</span>")
      })
    } else {
      errorPopUp.slideUp("swing")

      //After posting tweet, tweet is loaded via loadTweets()
      const data = $(this).serialize();
      $.post("/tweets", data)
        .then(() => {
          loadTweets()
        })
        .catch(err => {
          console.log(err.message)
        })


    }
  });


  // fetch tweets from http://localhost:8080/tweets
  const loadTweets = function () {
    $.get("/tweets")
      .then(data => {
        renderTweets(data)
      })
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
