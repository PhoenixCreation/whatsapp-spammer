/**
 * Script for spamming whatsapp messages on web
 *
 * WARNING: This script is just the tool for educational and testing purposes.
 * DO NOT USE THIS WITHOUT PERMISSION.
 * Author of this script is not responsible for any damage caused by this script.
 * By running this script you agree to use it at your own risk and that you are responsible for any damage caused by this script.
 * Any damage caused by this script is not the responsibility of the author of this script.
 * Any type of criminal activity is not promoted by the author of this script.
 * Author of this script does not accept responsibility for banned accounts or penalties of any kind caused by the use of this tool.
 * I would like to point out that using this script for extensive spamming of messages on whatsapp is not recommended and it is violation of the TOS of whatsapp.
 *
 * @name    whatsapp-spammer-web
 * @version 1.0.0
 * @author  PhoenixCreation
 * @license MIT
 *
 *
 * Again use at your own risk and very carefully.
 *
 * This script is tested on chrome and firefox. It works on both browsers perfectly.
 * It should work on any browser that supports javascript and DOM event manipulation.
 */

// Make sure to tell user to open the chat that they want to spam
alert("Please make sure you have opened the chat you want to spam.");

// Get the number of messages to spam
var count = prompt(
  "Enter number of messages: \nPlease Enter a number between 0 and 100",
  "10"
);

// Make sure the user entered a number and it is between 0 and 100
// I am setting limit to 100 because I am not sure most of the browsers can handle more than 100 messages
if (!count || isNaN(count) || count < 0 || count > 100) {
  alert(
    "Please enter a NUMBER between 0 and 100. \nYou can re-run the script now."
  );
} else {
  // Get the message to spam
  var message = prompt("MESSAGE YOU WANT TO SPAM : ", "Hello from spammer...");
  //make sure the user entered a message and it is not empty
  if (message == null || message == "") {
    alert("Please enter a message to spam. \nYou can re-run the script now.");
  } else {
    // Clear the current console for better visibility
    console.clear();

    // spam the messages
    for (let i = 0; i < count; i++) {
      console.log(`"${message}" sent -> ${i + 1} times`);

      // Get the input box
      var box = document.querySelectorAll("[role=textbox]")[1];

      // create event of type 'input' so that the whatsapp UI will update to sending text message instead of voice message
      InputEvent = Event || InputEvent;
      var evt = new InputEvent("input", {
        bubbles: true,
        composer: true,
      });
      box.innerHTML = message; // set the message as input box value
      box.dispatchEvent(evt); // trigger the event

      // This is bit of stratch to select the send button and click it
      // You need to climb up the DOM tree three levels and then to second child and then the first child is the send button
      box.parentElement.parentElement.parentElement.children[1].children[0].click();
    }
  }
}
