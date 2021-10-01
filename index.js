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

  // showElement({elementIsVisible: "monitoring-content", elementId: "monitoring-content", classToRemove: "monitoring-content-hide"})
  showElement({elementIsVisible: "monitoring-content", elementId: "monitoring-title", classToRemove: "monitoring-content-hide"})
  showElement({elementIsVisible: "monitoring-content", elementId: "monitoring-cards-wrapper", classToRemove: "monitoring-content-hide"})

  showElement({elementIsVisible: "sensor-content", elementId: "sensor-info", classToRemove: "sensor-info-hide"})
  showElement({elementIsVisible: "sensor-content", elementId: "sensor-dots-wrapper", classToRemove: "sensor-dots-wrapper-hide"})

  showElement({elementIsVisible: "how-it-works-content", elementId: "how-it-works-content-image", classToRemove: "how-it-works-content-image-hide"})

  showElement({elementIsVisible: "technology-content", elementId: "section-technology-title", classToRemove: "section-technology-title-hide"})
  showElement({elementIsVisible: "technology-content", elementId: "technology-cards-wrapper", classToRemove: "technology-cards-wrapper-hide"})

  showElement({elementIsVisible: "section-maintenance", elementId: "section-maintenance-title", classToRemove: "section-maintenance-title-hide"})
  showElement({elementIsVisible: "section-maintenance", elementId: "section-maintenance-description", classToRemove: "section-maintenance-description-hide"})
  
  showElement({elementIsVisible: "section-maintenance-content", elementId: "section-maintenance-content", classToRemove: "section-maintenance-content-hide"})
  
  showElement({elementIsVisible: "simulate-content", elementId: "simulate-calculator-wrapper", classToRemove: "simulate-calculator-wrapper-hide"})

  showElement({elementIsVisible: "request-content", elementId: "request-cards-wrapper", classToRemove: "request-cards-wrapper-hide"})
  showElement({elementIsVisible: "request-content", elementId: "request-cards-wrapper-button", classToRemove: "request-cards-wrapper-hide"})

  showElement({elementIsVisible: "section-contact", elementId: "section-contact-content", classToRemove: "section-contact-content-hide"})
};

window.onload = function () {
  if (deviceType() == 'mobile') {
    document.getElementById("monitoring-content").classList.remove("monitoring-content-hide")
    document.getElementById("sensor-info").classList.remove("sensor-info-hide")
    document.getElementById("sensor-dots-wrapper").classList.remove("sensor-dots-wrapper-hide")
    document.getElementById("how-it-works-content-image").classList.remove("how-it-works-content-image-hide")
    document.getElementById("section-technology-title").classList.remove("section-technology-title-hide")
    document.getElementById("technology-cards-wrapper").classList.remove("technology-cards-wrapper-hide")
    document.getElementById("section-maintenance-title").classList.remove("section-maintenance-title-hide")
    document.getElementById("section-maintenance-description").classList.remove("section-maintenance-description-hide")
    document.getElementById("section-maintenance-content").classList.remove("section-maintenance-content-hide")
    document.getElementById("simulate-calculator-wrapper").classList.remove("simulate-calculator-wrapper-hide")
    document.getElementById("request-cards-wrapper").classList.remove("request-cards-wrapper-hide")
    document.getElementById("request-cards-wrapper-button").classList.remove("request-cards-wrapper-hide")
  }
}

function isElementVisible(elementId) {
  const element = document.getElementById(elementId)

  return window.pageYOffset > (element.offsetTop - element.offsetHeight) + 200
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

function calculatePlan() {
  const contractTime = getContractTime()
  const qtdSensors = document.getElementById("contract-qtd-sensors").value

  if (qtdSensors) {
    const value = parseInt(qtdSensors) * 100 - (contractTime * (parseInt(qtdSensors) * 0.4))
    document.getElementById("contract-montly-value").value = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  } else {
    document.getElementById("contract-montly-value").value = ""
  }
}

function setContractTime(elementId) {
  const elements = document.querySelectorAll(".simulate-calculator-input-radio")

  elements.forEach(element => {
    if (element.classList.contains("simulate-calculator-input-radio-selected")) {
      if (element.id === elementId) {
        element.classList.add("simulate-calculator-input-radio-selected")
      } else {
        element.classList.remove("simulate-calculator-input-radio-selected")
      }
    } else {
      if (element.id === elementId) {
        element.classList.add("simulate-calculator-input-radio-selected")
      }
    }
  });
  
  calculatePlan()
}

function getContractTime() {
  const elements = document.querySelectorAll(".simulate-calculator-input-radio")

  let elementToReturn = null

  elements.forEach(element => {
    if (element.classList.contains("simulate-calculator-input-radio-selected")) {
      elementToReturn = element
    }
  });

  switch (elementToReturn?.id) {
    case "contract-time-12":
      return 12
    case "contract-time-24":
      return 24
    case "contract-time-36":
      return 36
    default:
      return 12
  }
}

function toggleMobileNavbarShow() {
  var menu = document.getElementById("mobile-navbar-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    menu.style.zIndex = 2;
  } else {
    menu.style.display = "block";
    menu.style.zIndex = 10;
  }
}

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
  }
  return "desktop";
};