// class Header {
//     selectors = {
//         root: '[data-js-header]',
//         overlay: '[data-js-header-overlay]',
//         burgerButton: '[data-js-header-burger-button]'
//     }

//     stateClasses = {
//         isActive: 'is-active',
//         isLock: 'is-lock'
//     }

//     constructor(){
//         this.rootElement = document.querySelector(this.selectors.root)
//         this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
//         this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
//         this.bindEvents()
//     }

//     onBurgerButtonClick = () => {
//         this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
//         this.overlayElement.classList.toggle(this.stateClasses.isActive)
//         // document.documentElement.classList.toggle(this.stateClasses.isLock)
//     }

//     bindEvents() {
//         this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
//     }
// }

// export default Header



// class Header {
//     selectors = {
//         root: '[data-js-header]',
//         overlay: '[data-js-header-overlay]',
//         burgerButton: '[data-js-header-burger-button]',
//         navLinks: 'a[href^="#"]' // добавил для ссылок
//     }

//     stateClasses = {
//         isActive: 'is-active',
//         isLock: 'is-lock'
//     }

//     constructor(){
//         this.rootElement = document.querySelector(this.selectors.root)
//         this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
//         this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
//         this.navLinks = this.overlayElement.querySelectorAll(this.selectors.navLinks)
//         this.bindEvents()
//     }

//     toggleMenu = () => {
//         this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
//         this.overlayElement.classList.toggle(this.stateClasses.isActive)
//         // document.documentElement.classList.toggle(this.stateClasses.isLock)
//     }

//     closeMenu = () => {
//         this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
//         this.overlayElement.classList.remove(this.stateClasses.isActive)
//         // document.documentElement.classList.remove(this.stateClasses.isLock)
//     }

//     onNavLinkClick = (e) => {
//         e.preventDefault()
//         const targetId = e.currentTarget.getAttribute('href')
//         const targetEl = document.querySelector(targetId)

//         if (targetEl) {
//             targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
//         }

//         // закрываем меню
//         this.closeMenu()
//     }

//     bindEvents() {
//         this.burgerButtonElement.addEventListener('click', this.toggleMenu)
//         this.navLinks.forEach(link => {
//             link.addEventListener('click', this.onNavLinkClick)
//         })
//     }
// }

// export default Header






// class Header {
//     selectors = {
//         root: '[data-js-header]',
//         overlay: '[data-js-header-overlay]',
//         drawer: '[data-js-header-drawer]',
//         burgerButton: '[data-js-header-burger-button]',
//         navLinks: 'a[href^="#"]'
//     }

//     stateClasses = {
//         isActive: 'is-active',
//         isLock: 'is-lock'
//     }

//     constructor() {
//         this.rootElement = document.querySelector(this.selectors.root)
//         this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
//         this.drawerElement = this.rootElement.querySelector(this.selectors.drawer)
//         this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
//         this.navLinks = this.drawerElement.querySelectorAll(this.selectors.navLinks)
//         this.bindEvents()
//     }

//     toggleMenu = () => {
//         const isActive = this.drawerElement.classList.toggle(this.stateClasses.isActive)
//         this.overlayElement.classList.toggle(this.stateClasses.isActive)
//         this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)

//         if (isActive) {
//             document.documentElement.classList.add(this.stateClasses.isLock)
//         } else {
//             document.documentElement.classList.remove(this.stateClasses.isLock)
//         }
//     }

//     closeMenu = () => {
//         this.drawerElement.classList.remove(this.stateClasses.isActive)
//         this.overlayElement.classList.remove(this.stateClasses.isActive)
//         this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
//         document.documentElement.classList.remove(this.stateClasses.isLock)
//     }

//     onNavLinkClick = (e) => {
//         const targetId = e.currentTarget.getAttribute('href')
//         const targetEl = document.querySelector(targetId)
//         if (targetEl) {
//             e.preventDefault()
//             targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
//         }
//         this.closeMenu()
//     }

//     bindEvents() {
//         this.burgerButtonElement.addEventListener('click', this.toggleMenu)
//         this.overlayElement.addEventListener('click', this.closeMenu)
//         this.navLinks.forEach(link => {
//             link.addEventListener('click', this.onNavLinkClick)
//         })
//     }
// }

// export default Header



// class Header {
//     selectors = {
//         root: '[data-js-header]',
//         overlay: '[data-js-header-overlay]',
//         drawer: '[data-js-header-drawer]',
//         burgerButton: '[data-js-header-burger-button]'
//     }

//     stateClasses = {
//         isActive: 'is-active',
//         isLock: 'is-lock'
//     }

//     constructor(){
//         this.rootElement = document.querySelector(this.selectors.root)
//         this.overlayElement = document.querySelector(this.selectors.overlay)
//         this.drawerElement = document.querySelector(this.selectors.drawer)
//         this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
//         this.bindEvents()
//     }

//     onBurgerButtonClick = () => {
//         this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
//         this.overlayElement.classList.toggle(this.stateClasses.isActive)
//         this.drawerElement.classList.toggle(this.stateClasses.isActive)

//         document.documentElement.classList.toggle(this.stateClasses.isLock)
//     }

//     onOverlayClick = () => {
//         this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
//         this.overlayElement.classList.remove(this.stateClasses.isActive)
//         this.drawerElement.classList.remove(this.stateClasses.isActive)

//         document.documentElement.classList.remove(this.stateClasses.isLock)
//     }

//     bindEvents() {
//         this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
//         this.overlayElement.addEventListener('click', this.onOverlayClick)
//     }
// }

// export default Header

class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        drawer: '[data-js-header-drawer]',
        burgerButton: '[data-js-header-burger-button]',
        menuLinks: '.header__menu-link' // добавляем ссылки меню
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = document.querySelector(this.selectors.overlay)
        this.drawerElement = document.querySelector(this.selectors.drawer)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        this.menuLinks = document.querySelectorAll(this.selectors.menuLinks)
        this.bindEvents()
        this.initScrollListener()
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        this.drawerElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    onOverlayClick = () => {
        this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
        this.overlayElement.classList.remove(this.stateClasses.isActive)
        this.drawerElement.classList.remove(this.stateClasses.isActive)
        document.documentElement.classList.remove(this.stateClasses.isLock)
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
        this.overlayElement.addEventListener('click', this.onOverlayClick)
    }

    initScrollListener() {
        window.addEventListener('scroll', () => {
            this.menuLinks.forEach(link => {
                if (link.hash) {
                    const target = document.querySelector(link.hash)
                    if (target && this.isElementInViewport(target)) {
                        this.onOverlayClick() // закрываем меню
                    }
                }
            })
        })
    }

    isElementInViewport(el) {
        const rect = el.getBoundingClientRect()
        return rect.top >= 0 && rect.top <= window.innerHeight / 2
    }
}

export default Header