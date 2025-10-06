// import BaseComponent from "./BaseComponent.js";

// const rootSelection = '[data-js-tabs]';

// class Tabs extends BaseComponent{
//     selectors = {
//         root: rootSelection,
//         button: '[data-js-tabs-button]',
//         content: '[data-js-tabs-content]'
//     }

//     stateClasses = {
//         isActive: 'is-active',
//     }

//     stateAttributes = {
//         ariaSelected: 'aria-selected',
//         tavIndex: 'tabindex',
//     }

//     constructor(rootElement){
//         super()
//         this.rootElement = rootElement
//         this.buttonElements = this.rootElement.querySelectorAll(this.selectors.button)
//         this.contentElements = this.rootElement.querySelectorAll(this.selectors.content)

//         this.state = this.getProxyState(
//             {
//                 activeTabIndex: [...this.buttonElements]
//                     .findIndex((buttonElement) => buttonElement.classList.contains(this.stateClasses.isActive))
//             }
//         )

//         this.limitTabsIndex = this.buttonElements.length - 1
//         this.bindEvents()
//     }

//     updateUI(){
//         const {activeTabIndex} = this.state

//         this.buttonElements.forEach((buttonElement, index) =>{
//             const isActive = index === activeTabIndex

//             buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
//             buttonElement.setAttribute(this.stateAttributes.ariaSelected, isActive.toString())
//             buttonElement.setAttribute(this.stateAttributes.tabIndex, isActive ? '0' : -1)
//         })



//         this.contentElements.forEach((contentElement, index) =>{
//             const isActive = index === activeTabIndex

//             contentElement.classList.toggle(this.stateClasses.isActive, isActive)
//         })
//     }

//     activateTab(newTabIndex) {
//         this.onButtonClick(newTabIndex) 
//         this.buttonElements[newTabIndex].focus() 
//     }

//     previousTab = () => {
//         const  newTabIndex =  this.state.activeTabIndex === 0 
//             ? this.limitTabsIndex
//             : this.state.activeTabIndex -1
        
//         this.activateTab(newTabIndex)
//     }

//     nextTab = () => {
//         const  newTabIndex =  this.state.activeTabIndex === this.limitTabsIndex
//             ? 0
//             : this.state.activeTabIndex +1
        
//         this.activateTab(newTabIndex)
//     }

//     firstTab = () => {
//         this.activateTab(0)
//     }

//     lastTab = () => {
//         this.activateTab(this.limitTabsIndex)
//     }

//     onButtonClick(buttonIndex){
//         this.state.activeTabIndex = buttonIndex;
//     }

//     onKeyDown = (event) =>{
//         const {code,metaKey} = event

//         const action = {
//             ArrowLeft: this.previousTab,
//             ArrowRight: this.nextTab,
//             Home: this.firstTab,
//             End: this.lastTab,
//         }[code]

//         const isMacHomeKey = metaKey && code === 'ArrowLeft'
//         if(isMacHomeKey){
//             this.firstTab()
//             return
//         }

//         const isMacEndKey = metaKey && code === 'ArrowRight'
//         if(isMacEndKey){
//             this.lastTab()
//             return
//         }
        
//         action?.()
        
//     }

//     bindEvents() {
//         this.buttonElements.forEach((buttonElement, index) => {
//             buttonElement.addEventListener('click', () => this.onButtonClick(index))
//         })

//         this.rootElement.addEventListener('keydown', this.onKeyDown)
//     }

    
// }

// class TabsCollection{
//     constructor(){
//         this.init();
//     }

//     init() {
//         document.querySelectorAll(rootSelection).forEach((element) =>{
//             new Tabs(element);
//         });
//     }
// }

// export default TabsCollection;

import BaseComponent from "./BaseComponent.js";

const rootSelection = '[data-js-tabs]';

class Tabs extends BaseComponent {
    selectors = {
        root: rootSelection,
        button: '[data-js-tabs-button]',
        content: '[data-js-tabs-content]'
    }

    stateClasses = {
        isActive: 'is-active',
    }

    stateAttributes = {
        ariaSelected: 'aria-selected',
        tabIndex: 'tabindex',
    }

    constructor(rootElement) {
        super();
        this.rootElement = rootElement;
        this.buttonElements = this.rootElement.querySelectorAll(this.selectors.button);
        this.contentElements = this.rootElement.querySelectorAll(this.selectors.content);

        // Сохраняем ссылку на инстанс для внешнего использования
        this.rootElement.__tabsInstance = this;

        this.state = this.getProxyState({
            activeTabIndex: [...this.buttonElements].findIndex(btn =>
                btn.classList.contains(this.stateClasses.isActive))
        });

        this.limitTabsIndex = this.buttonElements.length - 1;
        this.bindEvents();
        this.bindLinks();
    }

    updateUI() {
        const { activeTabIndex } = this.state;

        this.buttonElements.forEach((buttonElement, index) => {
            const isActive = index === activeTabIndex;
            buttonElement.classList.toggle(this.stateClasses.isActive, isActive);
            buttonElement.setAttribute(this.stateAttributes.ariaSelected, isActive.toString());
            buttonElement.setAttribute(this.stateAttributes.tabIndex, isActive ? '0' : -1);
        });

        this.contentElements.forEach((contentElement, index) => {
            const isActive = index === activeTabIndex;
            contentElement.classList.toggle(this.stateClasses.isActive, isActive);
        });
    }

    activateTab(newTabIndex) {
        this.onButtonClick(newTabIndex);
        this.buttonElements[newTabIndex].focus();
    }

    previousTab = () => {
        const newTabIndex = this.state.activeTabIndex === 0
            ? this.limitTabsIndex
            : this.state.activeTabIndex - 1;
        this.activateTab(newTabIndex);
    }

    nextTab = () => {
        const newTabIndex = this.state.activeTabIndex === this.limitTabsIndex
            ? 0
            : this.state.activeTabIndex + 1;
        this.activateTab(newTabIndex);
    }

    firstTab = () => this.activateTab(0);
    lastTab = () => this.activateTab(this.limitTabsIndex);

    onButtonClick(buttonIndex) {
        this.state.activeTabIndex = buttonIndex;
    }

    onKeyDown = (event) => {
        const { code, metaKey } = event;

        const action = {
            ArrowLeft: this.previousTab,
            ArrowRight: this.nextTab,
            Home: this.firstTab,
            End: this.lastTab,
        }[code];

        const isMacHomeKey = metaKey && code === 'ArrowLeft';
        const isMacEndKey = metaKey && code === 'ArrowRight';

        if (isMacHomeKey) return this.firstTab();
        if (isMacEndKey) return this.lastTab();

        action?.();
    }

    bindEvents() {
        this.buttonElements.forEach((buttonElement, index) => {
            buttonElement.addEventListener('click', () => this.onButtonClick(index));
        });

        this.rootElement.addEventListener('keydown', this.onKeyDown);
    }

    /**
     * Плавный скролл к нужной вкладке по ссылке
     * автоматически открывает нужную вкладку, если она закрыта
     */
    bindLinks() {
        document.querySelectorAll('a[href^="#tab-"]').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const targetId = link.getAttribute('href'); // "#tab-2"
                const target = document.querySelector(targetId);
                if (!target) return;

                // Находим родительский Tabs
                const tabsRoot = target.closest('[data-js-tabs]');
                if (!tabsRoot || !tabsRoot.__tabsInstance) return;

                const instance = tabsRoot.__tabsInstance;
                const contentIndex = [...instance.contentElements].indexOf(target);
                if (contentIndex !== -1) instance.activateTab(contentIndex);

                // Скроллим с учётом хедера
                setTimeout(() => {
                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 0;

                    const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }, 50);
            });
        });
    }
}

class TabsCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelection).forEach(element => {
            new Tabs(element);
        });
    }
}

export default TabsCollection;