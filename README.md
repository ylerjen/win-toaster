# win-toaster
WinToaster is an implementation of the node-notifier package to allow your apps to easily send a toast notification on Windows, Mac or Linux.

---

## Install
1. Clone this repo locally with :
`git clone <repo>`
2. Install the required packages with :
`npm install`
3. Run what you want (see below)

---

## Notify
To test the notify plugin from a script, run : 
`npm run-script notify`
This will execute the content of the `notify_example.js` file. It's like running `node notify_example.js`

---

## Unit tests
Show the notify To run the unit tests suit to show the message, run :
`npm test`
This will run the jasmine task and notify if the UT succeeded or failed.