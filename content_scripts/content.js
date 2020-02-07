(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */

  var headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
  var headerInfo = []
  console.log(headers)
  headers.forEach((header) => {
    headerInfo.push({
      textContent: header.textContent,
      headerType: header.tagName
    })
  })

  console.log(headerInfo)

  browser.runtime.sendMessage({
    headers: headerInfo
  })

})();