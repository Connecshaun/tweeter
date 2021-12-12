//target the <textarea> element

//register event to detect correct length of the input and update the counter


$(document).ready(function () {

  const $typeAreaforTweet = $("#tweet-text")

  $typeAreaforTweet.on("keyup", whenKeysPressed);

})

//callback when event "keyup" takes place
const whenKeysPressed = function () {
  const keyed = $(this).val();
  console.log(keyed)
  console.log(keyed.length)

  //to target the counter 
  console.log($(this).parent().find('.counter'))

}
