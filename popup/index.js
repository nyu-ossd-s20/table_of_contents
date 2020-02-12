let portFromCS

function connected(p) {
  portFromCS = p;

  portFromCS.onMessage.addListener(function(m) {
    m.headers.forEach((header, i) => {
      var temp = document.createElement(header.headerType)
      temp.textContent = header.textContent
      temp.id = "h-" + i
      document.getElementById("contents").appendChild(temp)
    })
  });

  document.addEventListener("click", (e) => {
    headerId = e.target.id
    portFromCS.postMessage({
      headerID: headerId,
      greeting: "this works!"
    })
  })
}

browser.runtime.onConnect.addListener(connected);
browser.tabs.executeScript({file: "/content_scripts/content.js"})
