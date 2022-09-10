const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const header = document.querySelector("header")

const mainNav = document.querySelector("header nav")
mainNav.style.color = "grey"
const navItems = mainNav.querySelectorAll("a")

navItems.forEach((v, i) => {
  navItems[i].textContent = siteContent["nav"][`nav-item-${i+1}`]
  navItems[i].classList.add("italic")
})

const navImg = header.querySelector("#logo-img")
navImg.src = siteContent["images"]["logo-img"]

const ctaHead = document.querySelector("h1")
ctaHead.textContent = siteContent.cta.h1

const ctaButton = document.querySelector(".cta button")
ctaButton.textContent = siteContent.cta.button

const ctaImg = document.querySelector("#cta-img")
ctaImg.src = siteContent["images"]["cta-img"]

const footerNav = document.querySelector("footer a")
console.log(footerNav)
footerNav.textContent = siteContent["footer"]["copyright"]
footerNav.classList.add("bold")

const content = document.querySelectorAll(".text-content")
const features = content.item(0)
const about = content.item(1)
const services = content.item(2)
const product = content.item(3)
const vision = content.item(4)

features.firstElementChild.textContent = siteContent["main-content"]["features-h4"]
features.lastElementChild.textContent = siteContent["main-content"]["features-content"]

about.firstElementChild.textContent = siteContent["main-content"]["about-h4"]
about.lastElementChild.textContent = siteContent["main-content"]["about-content"]

services.firstElementChild.textContent = siteContent["main-content"]["services-h4"]
services.lastElementChild.textContent = siteContent["main-content"]["services-content"]

product.firstElementChild.textContent = siteContent["main-content"]["product-h4"]
product.lastElementChild.textContent = siteContent["main-content"]["product-content"]

vision.firstElementChild.textContent = siteContent["main-content"]["vision-h4"]
vision.lastElementChild.textContent = siteContent["main-content"]["vision-content"]

const accentImg = document.querySelector(".middle-img")
accentImg.src = siteContent["images"]["accent-img"]

const contact = document.querySelector(".contact")
const contactH = contact.querySelector("h4")
const address = contactH.nextElementSibling
const phone = address.nextElementSibling
const email = phone.nextElementSibling


contactH.textContent = siteContent["contact"]["contact-h4"]
address.textContent = siteContent["contact"]["address"]
email.textContent = siteContent["contact"]["email"]
phone.textContent = siteContent["contact"]["phone"]

