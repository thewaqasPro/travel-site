import '../styles/style.css'
import RevealOnScroll from './modules/RevealOnScroll'
import MobileMenu from './modules/MobileMenu'


let mobileMenu = new MobileMenu()

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

if (module.hot) {
    module.hot.accept()
}