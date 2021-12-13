//target the <textarea> element

//register event to detect correct length of the input and update the counter


$(document).ready(function () {

  const $typeAreaforTweet = $("#tweet-text")

  $typeAreaforTweet.on("keyup", whenKeysPressed);

})

//callback when event "keyup" takes place
const whenKeysPressed = function () {

  const $typeAreaforTweet = $("#tweet-text")

  const keyed = $(this).val();

  //number of characters typed in <textarea>
  const numberOfChars = keyed.length;

  //to target the counter 
  const theCounter = ($(this).parent().find('.counter'))

  //subtract num of characters typed(keyed.length) from the total permitted(140)
  const remainingChars = 140 - numberOfChars;

  //if number of characters goes below 0, red class is activated and counter number turns the color of red
  if (remainingChars < 0) {
    theCounter.html(remainingChars).addClass("red");

  } else {
    theCounter.html(remainingChars).removeClass("red");
  }
};
