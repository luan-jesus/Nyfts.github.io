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

  showElement({elementIsVisible: "monitoring-content", elementId: "monitoring-content", classToRemove: "monitoring-content-hide"})

  showElement({elementIsVisible: "sensor-content", elementId: "sensor-info", classToRemove: "sensor-info-hide"})
  showElement({elementIsVisible: "sensor-content", elementId: "sensor-dots-wrapper", classToRemove: "sensor-dots-wrapper-hide"})

  showElement({elementIsVisible: "how-it-works-content", elementId: "how-it-works-content-image", classToRemove: "how-it-works-content-image-hide"})

  showElement({elementIsVisible: "technology-content", elementId: "section-technology-title", classToRemove: "section-technology-title-hide"})
  showElement({elementIsVisible: "technology-content", elementId: "technology-cards-wrapper", classToRemove: "technology-cards-wrapper-hide"})

  showElement({elementIsVisible: "section-maintenance", elementId: "section-maintenance-title", classToRemove: "section-maintenance-title-hide"})
  showElement({elementIsVisible: "section-maintenance", elementId: "section-maintenance-description", classToRemove: "section-maintenance-description-hide"})
  showElement({elementIsVisible: "section-maintenance", elementId: "maintenance-carousel-wrapper", classToRemove: "maintenance-carousel-wrapper-hide"})
};


function isElementVisible(elementId) {
  const element = document.getElementById(elementId)

  return window.pageYOffset > (element.offsetTop - element.offsetHeight)
}

function showElement(options) {
  if (isElementVisible(options?.elementIsVisible) && document.getElementById(options?.elementId).classList.contains(options?.classToRemove)) {
    document.getElementById(options?.elementId).classList.remove(options?.classToRemove)
  }
}

function scrollToElement(elementId) {
  document.getElementById(elementId).scrollIntoView({
    behavior: "smooth",
    block: 'start'
  })
}