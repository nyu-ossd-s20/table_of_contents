(function() {
  let myport = browser.runtime.connect({name: "port from content script"})
  console.log(myport)
  var headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
  var headerInfo = []
  headers.forEach((header, i) => {
    header.id = "h-" + i
    headerInfo.push({
      textContent: header.textContent,
      headerType: header.tagName
    })
  })

  myport.postMessage({
    headers: headerInfo
  })

  myport.onMessage.addListener(function(m) {

    document.getElementById(m.headerID).scrollIntoView()
  });
})();
