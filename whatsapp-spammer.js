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
 * @version 1.1.0
 * @author  PhoenixCreation
 * @license MIT
 *
 *
 * Again use at your own risk and very carefully.
 *
 * This script is not working on firefox due to some issues with pasting content to textinput.
 * Recommended to use Chrome or Edge instead.
 *
 * This script is tested on chrome and edge. It works on both browsers perfectly.
 * It should work on any browser that supports javascript and DOM event manipulation.
 *
 * Last tested with following versions
 * WhatsApp: 2.2323.4, Edge: 113.0.1774.57
 * WhatsApp: 2.2323.4, Chrome: 114.0.5735.90
 */
let dataTransfer = new DataTransfer();
let box = document.querySelectorAll("[role=textbox]")[1];
if (!box) {
  alert("No chat open, Make sure you have opened the chat you want to spam.");
  throw new Error(
    "No chat open, Make sure you have opened the chat you want to spam."
  );
}

// Get the number of messages to spam
var count = prompt(
  "Enter number of messages: \nPlease Enter a number between 0 and 100",
  "10"
);

// Make sure the user entered a number and it is between 0 and 100
// I am setting limit to 100 because I am not sure most of the browsers can handle more than 100 messages
// And going above 100 might trigger whatsapp spam detections
if (!count || isNaN(count) || count < 0 || count > 100) {
  alert(
    "Please enter only NUMBER between 0 and 100. \nYou can re-run the script now."
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
    dataTransfer.setData("text/plain", message);

    // spam the messages
    (async () => {
      for (let i = 0; i < count; i++) {
        // Get the input box

        box.focus();
        box.dispatchEvent(
          new ClipboardEvent("paste", {
            clipboardData: dataTransfer,

            // need these for the event to reach Draft paste handler
            bubbles: true,
            cancelable: true,
          })
        ); // trigger the event

        // Need to wait some time for 2 reasons:
        // 1. The send button takes some time to render itself and then we can send the message
        // 2. Notifications(that's the reason of spamming) will get send only once if it spammed immediately, waiting for 1 seocond
        //     makes notification sent for each message(ignore if it doesn't makes sense)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // This is bit of stratch to select the send button and click it
        // You need to climb up the DOM tree three levels and then to second child and then the first child is the send button
        // ALternate option: (mainEl.querySelector('[data-testid="send"]') || mainEl.querySelector('[data-icon="send"]')).click();
        box.parentElement.parentElement.parentElement.children[1].children[0].click();
        console.log(`"${message}" sent -> ${i + 1} times`);
      }
    })();
  }
}
