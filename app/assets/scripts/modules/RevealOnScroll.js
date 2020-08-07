class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll(".feature-item");
        this.hideInitially();
        this.events();
    }

    events() {
        window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach(e => {
                
            })
        });
    }

    hideInitially() {
        this.itemsToReveal.forEach( e => e.classList.add("reveal-item") );
    }
}


export default RevealOnScroll;