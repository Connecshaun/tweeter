//target the <textarea> element

//register event to detect correct length of the input and update the counter


$(document).ready(function () {

  const $typeAreaforTweet = $("#tweet-text")


  $typeAreaforTweet.on("keyup", function () {
    console.log($(this).val())
  })

});