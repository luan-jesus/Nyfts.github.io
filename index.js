window.onscroll = function () {
  if (window.pageYOffset >= 200) {
    document
      .getElementById("navbar-fixed-wrapper")
      .classList.add("navbar-wrapper-fixed-on")
  } else {
    document
      .getElementById("navbar-fixed-wrapper")
      .classList.remove("navbar-wrapper-fixed-on")
  }

  showElement("monitoring-content")
  showElement("sensor-content")
};


function isElementVisible(elementId) {
  const element = document.getElementById(elementId)

  return window.pageYOffset > (element.offsetTop - element.offsetHeight)
}

function showElement(elementId) {
  console.log(document.getElementById(elementId))
  if (isElementVisible(elementId) && document.getElementById(elementId).classList.contains(`${elementId}-hide`)) {
    document.getElementById(elementId).classList.remove(`${elementId}-hide`)
  }
}

function scrollToElement(elementId) {
  document.getElementById(elementId).scrollIntoView({
    behavior: "smooth",
    block: 'start'
  })
}