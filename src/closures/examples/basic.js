function delaySay(text) {
  // When setTimeout's callback gets executed,
  // the delaySay execution context is long gone.
  // If closure wouldn't exist, we couldn't access
  // the text variable in waitOneSecond.
  // Note: we access the variable, not the value
  // meaning that if such value changes, we access
  // the newest value, it isn't a snapshot
  setTimeout(function waitOneSecond() {
    console.log(text);
  }, 1000);
}

sayHello(text);
