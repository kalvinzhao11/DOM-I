const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// create array for navbar
const navBar = document.querySelectorAll("nav")
const navItem = Array.from(navBar[0].children)

//populate nav item using array
navItem.forEach((item, index) => {
  item.textContent = siteContent["nav"][`nav-item-${index + 1}`]
})

// const navItem = document.querySelectorAll("a")
// console.log(navItem)

// for (let i = 1; i <= navItem.length; i++){
//   navItem[i-1].textContent = siteContent["nav"][`nav-item-${i}`]
// }

//h1
let ctaH1 = document.getElementsByTagName("h1")
ctaH1[0].textContent = siteContent["cta"]["h1"]

//button
let ctaButton = document.getElementsByTagName("button")
ctaButton[0].textContent = siteContent["cta"]["button"]

//img
let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//text-content
const mainContent = document.getElementsByClassName("text-content")

const array = Array.from(mainContent)

// grab children of text-content
const section1 = Array.from(mainContent[0].children)
const section2 = Array.from(mainContent[1].children)
const section3 = Array.from(mainContent[2].children)
const section4 = Array.from(mainContent[3].children)
const section5 = Array.from(mainContent[4].children)

section1[0].textContent = siteContent["main-content"]["features-h4"]
section1[1].textContent = siteContent["main-content"]["features-content"]
section2[0].textContent = siteContent["main-content"]["about-h4"]
section2[1].textContent = siteContent["main-content"]["about-content"]
section3[0].textContent = siteContent["main-content"]["services-h4"]
section3[1].textContent = siteContent["main-content"]["services-content"]
section4[0].textContent = siteContent["main-content"]["product-h4"]
section4[1].textContent = siteContent["main-content"]["product-content"]
section5[0].textContent = siteContent["main-content"]["vision-h4"]
section5[1].textContent = siteContent["main-content"]["vision-content"]

// console.log(array)
// console.log(mainContent) 
// array.forEach(item => {
//   const h3 = item.getElementsByTagName["h4"]
//   console.log(h3)
//   // console.log(item.getElementsByTagName["h4"])
//   // item.textContent = "hi"
//   console.log(item)
//   console.log("Hi")
// })

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

