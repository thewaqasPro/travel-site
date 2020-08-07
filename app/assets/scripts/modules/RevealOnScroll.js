import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {

    constructor(els, tresholdPercent) {      //Elements params
        this.tresholdPercent = tresholdPercent
        this.itemsToReveal = els
        this.browserHeight = window.innerHeight;
        this.hideInitially()

        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)

        this.events()
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle)

        window.addEventListener("resize", debounce(() => {
            console.log("resize")
            this.browserHeight = window.innerHeight
        }, 333))
    }

    calcCaller() {
        console.log('Scrolling')
        this.itemsToReveal.forEach( el => {
            if(!el.isRevealed) {
                this.calculateIfScrollTo(el);
            }
        })
    }

    calculateIfScrollTo(el) {
        if(window.scrollY + this.browserHeight> el.offsetTop) {
            console.log('Calculate')
            let scrollPersent = (el.getBoundingClientRect().y / this.browserHeight)  * 100;
            if(scrollPersent < this.tresholdPercent) {
                el.classList.add('reveal-item--is-visible')
                el.isRevealed = true
                if(el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle)
                }
                
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach ( el => {
            el.classList.add("reveal-item") 
            el.isRevealed = false
        })
        this.itemsToReveal[this.itemsToReveal.length -1].isLastItem = true
    }
}


export default RevealOnScroll