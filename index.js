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
};


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