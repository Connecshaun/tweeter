//target the <textarea> element

//register event to detect correct length of the input and update the counter


$(document).ready(function () {

  const $typeAreaforTweet = $("#tweet-text")

  $typeAreaforTweet.on("keyup", whenKeysPressed);

})

//callback when event "keyup" takes place
const whenKeysPressed = function () {

  const keyed = $(this).val();

  //number of characters typed in <textarea>
  const numberOfChars = keyed.length;

  //to target the counter 
  const theCounter = ($(this).parent().find('.counter'))

  const remainingChars = 140 - numberOfChars

}
