import '../styles/style.css'
import 'lazysizes'
import RevealOnScroll from './modules/RevealOnScroll'
import MobileMenu from './modules/MobileMenu'
import StickyHeader from './modules/StickyHeader'

new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new MobileMenu()
let modal

document.querySelectorAll(".open-modal").forEach( el => {
    console.log('Working')
    el.addEventListener("click", e => {
        console.log('Working')
        e.preventDefault()
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default()
                setTimeout( ()=> modal.openTheModal(), 20 )
            }).catch(() => console.log('Problem'))
        } else {
            modal.openTheModal()
        }
    })
})

if (module.hot) {
    module.hot.accept()
}