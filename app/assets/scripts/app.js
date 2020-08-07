import '../styles/style.css';
import RevealOnScroll from './modules/RevealOnScroll';
import MobileMenu from './modules/MobileMenu';


let mobileMenu = new MobileMenu();
let revealOnScroll = new RevealOnScroll();

if (module.hot) {
    module.hot.accept();
}