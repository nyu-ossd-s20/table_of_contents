
function fillPopup() {
  document.getElementById("clickme").addEventListener("click", () => {
    var text = document.createElement("h3")
    text.innerHTML = "hi"
    document.getElementById("change").appendChild(text)
  
    // var headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
  })
}



browser.tabs.executeScript({file: "/content_scripts/content.js"})
.then(fillPopup)