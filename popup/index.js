browser.runtime.onMessage.addListener((message) => { // gets the information from the content.js and displays it in the popup
  message.headers.forEach((header) => {
    var temp = document.createElement(header.headerType)
    temp.textContent = header.textContent
    document.getElementById("contents").appendChild(temp)
  })

});

browser.tabs.executeScript({file: "/content_scripts/content.js"})
