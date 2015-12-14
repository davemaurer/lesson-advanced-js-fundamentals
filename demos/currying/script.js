// Create a function called `prefixLog` that takes a prefix as an argument and uses
// partial application and/or currying to return a function that takes a message and
// adds the prefix to the beginning of the message.

// currying solution
function prefixLog(prefix) {
  return function (message) {
    return prefix + message
  }
}

// Implement a `dangerLog` function that takes a message and prefixes it with `DANGER:`.
// Implement a `successLog` function that takes a message and prefixes it with `SUCCESS:`.
var message1 = " unruly code ahead";
var message2 = " you've slain the unruly code!";

var dangerLog = prefixLog("DANGER!")(message1);
var successLog = prefixLog("SUCCESS!")(message2);


console.log(dangerLog);
console.log(successLog);

// steve's solution for partial application
// function prefixLog(prefix, message) {
//    return prefix + ': ' + message;
//    }

//var dangerLog = prefixLog.bind(null, 'DANGER');
//var successLog = prefixLog.bind(null, 'SUCCESS)';

