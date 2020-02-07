(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */

  let myport = browser.runtime.connect({name: "port from content script"})

  var headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
  var headerInfo = []
  headers.forEach((header, i) => {
    header.id = "h-" + i
    
    headerInfo.push({
      textContent: header.textContent,
      headerType: header.tagName
    })
  })
  console.log(headerInfo)
  // document.getElementById("h-1").scrollIntoView()

  myport.postMessage({
    headers: headerInfo
  })

  myPort.onMessage.addListener(function(m) {
    document.getElementById("h-1").scrollIntoView()
    document.getElementById("h-1").textContent = m.greeting
  });


  // browser.runtime.onMessage.addListener((message) => {
  //   console.log(hi)
  // });
  // browser.runtime.onConnect.addListener((p) => {
  //   extensionport = p
  //   extensionport.onMessage.addListener(function(message) {
  //     console.log("In content script, received message from extension");
  //     console.log(message.greeting);
  //   });
  // });

  // browser.runtime.sendMessage({
  //   headers: headerInfo
  // })

})();