"use strict";(self.webpackChunkForester=self.webpackChunkForester||[]).push([[804],{4191:()=>{},5862:(e,t,n)=>{var s=function(e,t,n){if(n||2===arguments.length)for(var s,o=0,i=t.length;o<i;o++)!s&&o in t||(s||(s=Array.prototype.slice.call(t,0,o)),s[o]=t[o]);return e.concat(s||Array.prototype.slice.call(t))};function o(e,t){void 0===t&&(t=document);var n=function(e,t){void 0===t&&(t=document);var n=t.querySelector(e);if(!n)throw Error("element ".concat(e," does not exist"));return n}(e,t);if(n instanceof HTMLElement)return n;throw new Error('the element found with selector "'.concat(e,'" with type ').concat(n.constructor.name," is not an instance of HTMLelement"))}var i=function(e){return!e.href||0===e.href.indexOf(window.location.origin)},a=function(e){return e instanceof CSSStyleRule},r={containerClass:"burger-menu",togglerButtonClass:"burger-menu__toggler",openedClass:"burger-menu__content--open",closeButtonClass:"burger-menu__content-close-button",backdropClass:"burger-menu__backdrop",closeBreakpoint:768},l=function(){function e(e,t,n){void 0===n&&(n=null),this.closeButtonElement=null,this.isOpen=!1,this.handleTogglerClick=this.togglerButtonClickEventHandler.bind(this),this.handleOutClick=this.outerClickHandler.bind(this),this.handleCloseButtonClick=this.close.bind(this),this.onInitHandler=null,this.onOpenHandler=null,this.onCloseHandler=null,this.params=Object.assign({},r,t),this.onInitHandler=n,e instanceof HTMLElement?this.containerElement=e:this.containerElement=o(e),this.togglerButtonElement=o(".".concat(this.params.togglerButtonClass)),this.closeButtonElement=o(".".concat(this.params.closeButtonClass)),this.backdropElement=document.createElement("div"),this.backdropElement.classList.add(this.params.backdropClass),this.backdropElement.style.visibility="hidden",document.body.append(this.backdropElement),this.addEvents(),this.onInitHandler&&this.onInitHandler(this),this.setWindowSizeObserver()}return e.prototype.setWindowSizeObserver=function(){var e=this;new ResizeObserver((function(t){for(var n=0,s=t;n<s.length;n++)s[n].contentRect.width>=e.params.closeBreakpoint&&e.close()})).observe(document.body)},e.prototype.close=function(){this.isOpen&&(this.switchOpenState(!1),this.backdropElement.style.visibility="hidden",document.documentElement.style.overflow="visible",this.onCloseHandler&&this.onCloseHandler(this))},e.prototype.open=function(){this.isOpen||(this.switchOpenState(!0),this.backdropElement.style.visibility="visible",document.documentElement.style.overflow="hidden",this.onOpenHandler&&this.onOpenHandler(this))},e.prototype.destroy=function(){this.backdropElement.remove(),this.removeEvents()},e.prototype.onInit=function(e){this.onInitHandler=e},e.prototype.onOpen=function(e){this.onOpenHandler=e},e.prototype.onClose=function(e){this.onCloseHandler=e},e.prototype.switchOpenState=function(e){this.isOpen=e,this.containerElement.classList.toggle(this.params.openedClass,this.isOpen)},e.prototype.addEvents=function(){var e;this.togglerButtonElement.addEventListener("click",this.handleTogglerClick),document.addEventListener("click",this.handleOutClick),null===(e=this.closeButtonElement)||void 0===e||e.addEventListener("click",this.handleCloseButtonClick)},e.prototype.removeEvents=function(){var e;this.togglerButtonElement.removeEventListener("click",this.handleTogglerClick),document.removeEventListener("click",this.handleOutClick),null===(e=this.closeButtonElement)||void 0===e||e.removeEventListener("click",this.handleCloseButtonClick)},e.prototype.togglerButtonClickEventHandler=function(){this.isOpen?this.close():this.open()},e.prototype.outerClickHandler=function(e){e.target===this.backdropElement&&this.close()},e}(),c={containerClass:"burger-menu",togglerButtonClass:"page-header__burger-menu-button",openedClass:"burger-menu--open",closeButtonClass:"burger-menu__close-button",backdropClass:"burger-menu__backdrop",closeBreakpoint:parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--layout-breakpoint-medium")||"992")},u=n(1236),d=n(9636),m={slotClass:"accordion__slot",slotOpenClass:"accordion__slot--open",slotOpenedClass:"accordion__slot--opened",slotCloseClass:"accordion__slot--close",slotClosedClass:"accordion__slot--closed",summaryClass:"accordion__summary",triggerClass:"accordion__trigger",iconClass:"accordion__icon"},p=function(){function e(e,t){void 0===t&&(t={}),this._slots=[],this.classParams=Object.assign({},m),this.isInitialized=!1,this.closeHandler=null,this.openHandler=null,this.initHandler=null,this.options=t,this.rootElement="string"==typeof e?o(e):e;var n=this.options.init;(void 0===n||n)&&this.init()}return Object.defineProperty(e.prototype,"slots",{get:function(){if(this.isInitialized)return this._slots;throw new Error("Accordion is not initialized")},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.destroy();var e=this.options,t=e.classParams,n=e.defaultOpenSlotIndex,s=void 0===n?0:n;t&&Object.assign(this.classParams,t),this._slots=this.getSlots(),this.addEvents(),"number"==typeof s&&this.openSlot(s),this.isInitialized=!0,this.initHandler&&this.initHandler(this)},e.prototype.destroy=function(){this.removeEvents(),this._slots=[],this.isInitialized=!1},e.prototype.onOpen=function(e){this.openHandler=e},e.prototype.onClose=function(e){this.closeHandler=e},e.prototype.onInit=function(e){this.initHandler=e},e.prototype.getSlots=function(){var e=this;return function(e,t){void 0===t&&(t=document);var n=function(e,t){void 0===t&&(t=document);var n=Array.from(t.querySelectorAll(e));if(!n.length)throw Error("elements ".concat(e," does not exist"));return n}(e,t);if(function(e){return e.every((function(e){return function(e){return e instanceof HTMLElement}(e)}))}(n))return n;throw new Error('the elements found with selector "'.concat(e,'" is not an instance of HTMLelement'))}(".".concat(this.classParams.slotClass),this.rootElement).map((function(t){var n={containerElement:t,triggerElement:o(".".concat(e.classParams.triggerClass),t),iconElement:o(".".concat(e.classParams.iconClass),t),isOpen:!1};return n.containerElement.classList.toggle(e.classParams.slotOpenedClass,n.isOpen),n.containerElement.classList.toggle(e.classParams.slotClosedClass,!n.isOpen),n}))},e.prototype.addEvents=function(){var e=this;this._slots.forEach((function(t,n){t.containerElement.addEventListener("click",(function(s){var o=s.target;o instanceof Element&&o.closest("."+e.classParams.summaryClass)&&(t.isOpen?e.closeSlot(n):e.openSlot(n))})),t.containerElement.addEventListener("transitionend",(function(){t.containerElement.classList.toggle(e.classParams.slotOpenedClass,t.isOpen),t.containerElement.classList.toggle(e.classParams.slotClosedClass,!t.isOpen),t.containerElement.classList.remove(e.classParams.slotOpenClass),t.containerElement.classList.remove(e.classParams.slotCloseClass)}))}))},e.prototype.removeEvents=function(){var e=this;this._slots.forEach((function(t){var n=t.containerElement.cloneNode(!0);e.rootElement.replaceChild(n,t.containerElement)}))},e.prototype.openSlot=function(e){var t=this,n=this._slots[e];n.isOpen||(n.isOpen=!0,n.containerElement.classList.toggle(this.classParams.slotOpenClass,n.isOpen),n.containerElement.classList.toggle(this.classParams.slotCloseClass,!n.isOpen),n.containerElement.classList.remove(this.classParams.slotClosedClass),this.openHandler&&this.openHandler(n),this.options.multiOpen||this._slots.forEach((function(n,s){s!==e&&t.closeSlot(s)})))},e.prototype.closeSlot=function(e){var t=this._slots[e];!1!==t.isOpen&&(t.isOpen=!1,t.containerElement.classList.toggle(this.classParams.slotOpenClass,t.isOpen),t.containerElement.classList.toggle(this.classParams.slotCloseClass,!t.isOpen),t.containerElement.classList.remove(this.classParams.slotOpenedClass),this.closeHandler&&this.closeHandler(t))},e}();n(6879),n(2552),n(4390);var h=function(){function e(){}return e.hslToRgb=function(e){var t=e.trim().replace("hsl(","").replace(")","").split(" ").map((function(e){return parseInt(e)})),n=t[0],s=t[1],o=t[2];o/=100;var i=function(e){return(e+n/30)%12},a=(s/=100)*Math.min(o,1-o),r=function(e){return o-a*Math.max(-1,Math.min(i(e)-3,Math.min(9-i(e),1)))};return[255*r(0),255*r(8),255*r(4)].map((function(e){return Math.round(e)}))},e.getRgbMixHex=function(e,t,n){var s=this;void 0===n&&(n=.5);var o=this.parseArgument(e),i=this.parseArgument(t),a=new Array(3).fill(null).map((function(e,t){return s.colorChannelMixer(o[t],i[t],n)}));return this.rgbChannelsToHex(a)},e.rgbChannelsToHex=function(e){return"#"+e.map((function(e){return e.toString(16)})).join("")},e.parseHexString=function(e){var t=[];return e.replace("#","").split("").reduce((function(e,n,s){return s%2==0?n:(t.push(e+n),"")}),""),t.map((function(e){return parseInt(e,16)}))},e.parseFuncString=function(e){return e.split(" ").join("").replace("rgb(","").replace(")","").split(",").map((function(e){return Number(e)}))},e.parseArgument=function(e){var t=[];if(Array.isArray(e)&&t.push.apply(t,e),"string"==typeof e&&(e.includes("rgb")?t.push.apply(t,this.parseFuncString(e)):t.push.apply(t,this.parseHexString(e)),!t.length||t.some((function(e){return isNaN(e)}))))throw Error('wrong color agrument. Format "#000000" or rgb(0, 0, 0)');return t},e.colorChannelMixer=function(e,t,n){var s=e*n,o=t*(1-n);return Math.floor(s+o)},e}(),g=function(){function e(){this.activeSettings=[],this.elementClasses={menu:"css-vars-debugger",button:"button",accordionContainer:"accordion",accordionSlot:"accordion__slot",accordionSummary:"accordion__summary",accordionSummaryText:"accordion__summary-text",accordionTrigger:"accordion__trigger",accordionIcon:"accordion__icon",accordionDetails:"accordion__details",accordionDetailsInner:"accordion__details-inner"};var e=this.render(),t=e.menuElement,n=e.mainButton;this.mainButton=n,this.ownMenu=t}return e.prototype.hasActiveSettings=function(){return Boolean(this.activeSettings.length)},e.prototype.getButton=function(){return this.mainButton},e.prototype.getOwnMenu=function(){return this.ownMenu},e.prototype.render=function(){var e=this,t=document.createElement("button");t.textContent="CSS Variables",t.classList.add(this.elementClasses.button),t.type="button";var n=document.createElement("div");n.classList.add(this.elementClasses.menu);var o,r,l=["swiper","debugger","layout-breakpoint"],c=(o=Array.from(document.styleSheets).filter(i).reduce((function(e,t){return s(s([],e,!0),Array.from(t.cssRules),!0)}),[]).filter(a).map((function(e){return Array.from(e.style)})).flat().filter((function(e){return e.trimStart().startsWith("--")})),r=getComputedStyle(document.documentElement),o.map((function(e){return[e,r.getPropertyValue(e)]}))),u=[{label:"layout",inputType:"number"},{label:"color",inputType:"color"},{label:"gap",inputType:"number"},{label:"dimension",inputType:"number"}].map((function(t){var n=t.label,s=t.inputType,o=c.filter((function(e){var t=e[0];return t.includes(n)&&!l.some((function(e){return t.includes(e)}))}));if(o.length){var i=document.createElement("div");i.classList.add("accordion__slot");var a=document.createElement("dt");a.classList.add(e.elementClasses.accordionSummary);var r=document.createElement("button");r.type="button",r.classList.add(e.elementClasses.accordionTrigger);var u=document.createElement("span");u.classList.add(e.elementClasses.accordionSummaryText),u.textContent=n;var d=document.createElement("span");d.classList.add(e.elementClasses.accordionIcon),d.innerHTML="+";var m=document.createElement("dd");m.classList.add(e.elementClasses.accordionDetails);var p=document.createElement("div");p.classList.add(e.elementClasses.accordionDetailsInner),i.append(a,m),a.append(r),r.append(u,d),m.append(p);var g=o.map((function(e){var t=e[0],n=e[1],o=document.createElement("p"),i=document.createElement("label");i.textContent="".concat(t,":");var a=document.createElement("input");switch(a.type=s,a.value=n,s){case"color":a.value=h.rgbChannelsToHex(h.hslToRgb(n));break;case"number":a.value=parseInt(n).toString()}return o.append(i),o.append(a),a.addEventListener("input",(function(e){e.target instanceof HTMLInputElement&&("number"===s?document.documentElement.style.setProperty(t,e.target.value+"px"):document.documentElement.style.setProperty(t,e.target.value))})),o}));return p.append.apply(p,g),i}return null})).filter((function(e){return!!e})),d=document.createElement("dl");return d.classList.add(this.elementClasses.accordionContainer),d.append.apply(d,u),n.append(d),new p(n,{defaultOpenSlotIndex:!1}),{menuElement:n,mainButton:t}},e}(),v=function(){function e(){this.activeSettings=[],this.images=[],this.lazyLoadBackgrounds=[],this.savedImages=[],this.savedBackgrounds=[],this.elementClasses={button:"button"},this.settingsNames={killImages:"kill-images"},this.images=Array.from(document.querySelectorAll("img")),this.lazyLoadBackgrounds=Array.from(document.querySelectorAll("[data-bgset]"));var e=this.render().mainButton;this.mainButton=e,this.addEvents()}return e.prototype.getButton=function(){return this.mainButton},e.prototype.getOwnMenu=function(){return null},e.prototype.hasActiveSettings=function(){return Boolean(this.activeSettings.length)},e.prototype.render=function(){var e=document.createElement("button");return e.classList.add(this.elementClasses.button),e.type="button",e.textContent="Kill images",{mainButton:e}},e.prototype.addEvents=function(){var e=this;this.mainButton.addEventListener("click",(function(){e.activeSettings.includes(e.settingsNames.killImages)?e.resurrectImages():e.killImages()}))},e.prototype.saveImages=function(e){return e.map((function(e){return{element:e,src:e.src,srcset:e.srcset}}))},e.prototype.saveLazyLoadBackgrounds=function(e){return e.map((function(e){var t;return{element:e,bgset:null!==(t=e.dataset.bgset)&&void 0!==t?t:"",current:e.style.backgroundImage,picture:e.firstChild}}))},e.prototype.killImages=function(){this.savedImages=this.saveImages(this.images),this.savedBackgrounds=this.saveLazyLoadBackgrounds(this.lazyLoadBackgrounds),this.images.forEach((function(e){e.src="killed",e.srcset="killed"})),this.lazyLoadBackgrounds.forEach((function(e){e.dataset.bgset="killed",e.style.backgroundImage='url("killed")',e.innerHTML=""})),this.activeSettings.push(this.settingsNames.killImages)},e.prototype.resurrectImages=function(){var e=this;this.savedImages.forEach((function(e){var t=e.element,n=e.src,s=e.srcset;t.src=n,t.srcset=s})),this.savedBackgrounds.forEach((function(e){var t=e.element,n=e.bgset,s=e.current,o=e.picture;t.dataset.bgset=n,t.style.backgroundImage=s,o&&t.append(o)}));var t=this.activeSettings.findIndex((function(t){return t===e.settingsNames.killImages}));this.activeSettings.splice(t)},e}();function f(e,t,n,s){void 0===t&&(t="text"),void 0===s&&(s={});var o=document.createElement("p");o.classList.add("input-field");var i=document.createElement("label");i.classList.add("input-field__label"),i.textContent=e;var a=null;"textarea"===t?(a=document.createElement("textarea")).textContent=n:((a=document.createElement("input")).type=t,a.value=n),a.classList.add("input-field__input");var r=s.dataset,l=s.id,c=null!=l?l:"input-"+Math.round(9999*Math.random());return i.htmlFor=c,a.id=c,r&&(a.dataset[r.key]=r.value),o.append(i,a),o}var C,y,b,E=function(){function e(e){this.activeSettings=[],this.savedTextNodesValues=[],this.elementClasses={menu:"text-debugger",button:"button",buttonActive:"button--active"},this.stateKeys={textExcerpt:"textExcerpt",charCount:"charCount"},this.settingsNames={overrideText:"overrite-text"},this.fieldValues={textExcerpt:"Diverse and rich experience in the implementation of planned targets plays an important role in the formation of new proposals. \n      The significance of these problems is so obvious that the constant quantitative growth and scope of our activity represents an \n      interesting experiment in testing new proposals. Thus, the beginning of daily work on the formation of a position entails the \n      process of introducing and modernizing forms of development.".split("\n").join(""),charCount:100},this.state=e;var t=this.render(),n=t.menuElement,s=t.overrideButton,o=t.mainButton;this.mainButton=o,this.ownMenu=n,this.overrideButton=s,this.addEvents()}return e.prototype.hasActiveSettings=function(){return Boolean(this.activeSettings.length)},e.prototype.getOwnMenu=function(){return this.ownMenu},e.prototype.getButton=function(){return this.mainButton},e.prototype.render=function(){var e,t,n=document.createElement("button");n.classList.add("button"),n.type="button",n.textContent="Text";var s=document.createElement("div");s.classList.add(this.elementClasses.menu);var o=null!==(e=this.state.get(this.stateKeys.textExcerpt))&&void 0!==e?e:this.fieldValues.textExcerpt,i=null!==(t=this.state.get(this.stateKeys.charCount))&&void 0!==t?t:this.fieldValues.charCount,a=f("Text excerpt:","textarea",o,{dataset:{key:"fieldName",value:"excerpt"}}),r=f("Chars count:","number",i,{dataset:{key:"fieldName",value:"chars-count"}});s.append(a,r);var l=document.createElement("button");return l.type="button",l.textContent="Override",l.classList.add(this.elementClasses.button),s.append(l),{menuElement:s,overrideButton:l,mainButton:n}},e.prototype.addEvents=function(){var e=this;this.overrideButton.addEventListener("click",(function(){e.activeSettings.includes(e.settingsNames.overrideText)?e.restoreText():e.overrideText(),e.overrideButton.classList.toggle(e.elementClasses.buttonActive,e.activeSettings.includes(e.settingsNames.overrideText))})),this.ownMenu.addEventListener("input",(function(t){var n,s,o=t.target;if(o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement){switch(o.dataset.fieldName){case"excerpt":e.state.set(e.stateKeys.textExcerpt,null!==(n=o.value)&&void 0!==n?n:"");break;case"chars-count":e.state.set(e.stateKeys.charCount,null!==(s=o.value)&&void 0!==s?s:"")}e.restoreText(),e.overrideButton.classList.toggle(e.elementClasses.buttonActive,e.activeSettings.includes(e.settingsNames.overrideText))}}))},e.prototype.getTextNodesIn=function(e){var t=[];if(e instanceof Element&&e.closest(".debugger"))return t;for(var n=e.childNodes,s=n.length;s--;){var o=n[s],i=o.nodeType;o instanceof CharacterData?o.data.trim()&&t.push(o):1!=i&&0!=i&&11!=i||(t=t.concat(this.getTextNodesIn(o)))}return t},e.prototype.overrideText=function(){var e,t,n=null!==(e=this.state.get(this.stateKeys.charCount))&&void 0!==e?e:this.fieldValues.charCount,s=null!==(t=this.state.get(this.stateKeys.textExcerpt))&&void 0!==t?t:this.fieldValues.textExcerpt,o=Math.ceil(n/s.length),i=(o>1?s+" ":s).repeat(o).slice(0,n),a=this.getTextNodesIn(document.body);this.savedTextNodesValues=a.map((function(e){return{node:e,value:e.textContent}})),a.forEach((function(e){e.textContent=i})),this.activeSettings.push(this.settingsNames.overrideText)},e.prototype.restoreText=function(){var e=this;this.savedTextNodesValues.forEach((function(e){e.node.textContent=e.value}));var t=this.activeSettings.findIndex((function(t){return t===e.settingsNames.overrideText}));this.activeSettings.splice(t)},e}(),_=function(){function e(){this.menuSlots=[],this.state=new x,this.elementClasses={container:"debugger",expanded:"debugger--expanded",mainButton:"debugger__button",menuButton:"debugger__menu-button",menuButtonActive:"debugger__menu-button--active",menuList:"debugger__menu",menuListWrapper:"debugger__menu-wrapper",submenusList:"debugger__submenus",submenuItem:"debugger__submenu",submenuOpened:"debugger__submenu--opened"},this.stateKeys={expanded:"expanded"},this.menuSlots=[new E(this.state),new v,new g];var e=this.render().debuggerContainerElement;this.debuggerContainerElement=e,this.addEvents()}return e.prototype.render=function(){var e,t=this,n=document.createElement("div");n.classList.add(this.elementClasses.container),null!==(e=this.state.get(this.stateKeys.expanded))&&void 0!==e&&e&&n.classList.add(this.elementClasses.expanded);var s=document.createElement("button");s.classList.add(this.elementClasses.mainButton),s.innerHTML='\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.913 159.916">\n      <path fill="currentColor" d="M150.963,106.606c-8.045,18.31-20.342,28.691-39.238,28.579-18.648-.11-30.857-10.369-39.182-26.91a36.107,36.107,0,0,0-.574,3.979c-.1,2.495.063,5-.058,7.495-.23,4.731-3.471,8.083-7.748,8.171-4.523.092-7.984-3.28-8.142-8.292-.162-5.16-.518-10.394.166-15.466.348-2.571,2.354-5.383,4.418-7.138,2.467-2.1,5.937-2.971,8.69-4.8,1.244-.827,2.547-2.718,2.484-4.064-.075-1.585-1.222-3.878-2.556-4.531C53.93,76.143,56.154,77.62,55.977,60.7c-.017-1.666-.093-3.341.047-5,.378-4.461,3.554-7.58,7.7-7.69a7.955,7.955,0,0,1,8.153,7.764c.2,2.986-.1,6.009.158,8.986.094,1.077,1.172,2.067,1.8,3.1A15.063,15.063,0,0,0,76.5,66.162a10.475,10.475,0,0,0,3.571-8.788c-.5-7.169,2.194-13.284,7.154-18.533a5.749,5.749,0,0,0,1.18-4.517c-.884-3.939.133-6.994,3.423-9.095,3.587-2.292,6.929-1.37,10.043,1.3,2.646,2.271,4.258,5.777,8.849,5.6,4.049-.159,7.32-.686,10-4.116,2.75-3.521,6.449-5.547,10.931-3,4.046,2.3,5.115,5.779,3.472,10.25-.314.853.408,2.512,1.176,3.268,5.57,5.49,7.818,12.107,7.776,19.854-.012,2.2,1.272,4.6,2.513,6.553.8,1.268,2.6,1.9,3.959,2.821a28.53,28.53,0,0,0,1.368-4.935c.246-2.477-.094-5.011.152-7.487a7.975,7.975,0,0,1,8.062-7.328,7.874,7.874,0,0,1,7.734,7.649,107.078,107.078,0,0,1-.145,16.468c-.28,2.41-2.278,5.094-4.263,6.714-2.518,2.055-5.989,2.9-8.705,4.772a6.665,6.665,0,0,0-2.608,4.515,5.3,5.3,0,0,0,2.461,4.067c15.456,7.788,13.153,5.929,13.338,23.421.015,1.332.058,2.669-.019,4-.292,5.01-3.678,8.441-8.143,8.308-4.329-.13-7.517-3.4-7.768-8.166-.14-2.659.035-5.333-.068-8A44.916,44.916,0,0,0,150.963,106.606Zm-47.332,11.141v-45.8c-1.987,0-3.633,0-5.279,0-7.712.024-10.385,2.722-10.4,10.536-.013,4.824-.107,9.65.031,14.47C88.257,106.688,95,115.637,103.631,117.747ZM120.186,71.98v46.485c7.814-3.3,13.39-8.324,14.633-16.121s1.121-15.876.9-23.813c-.1-3.776-3.145-6.167-7.087-6.508C126,71.8,123.334,71.98,120.186,71.98Zm7.735-16.22c-.592-4.852-3.137-7.528-7.682-7.733a157.637,157.637,0,0,0-16.881.033c-4.45.277-6.847,3.075-7.311,7.7ZM39.986,52.317c-.243-5.985-.049-11.988-.041-17.983.015-11.576,4.721-16.857,16.4-18.418,4.637-.62,7.806-4.132,7.56-8.378C63.657,3.234,60.248.158,55.5.012a21.749,21.749,0,0,0-3.489.16A32.147,32.147,0,0,0,24,31.609c-.115,7.825.025,15.653-.045,23.479-.085,9.686-5.831,15.927-15.4,16.874C3.244,72.487.035,75.461,0,79.89c-.035,4.476,3.134,7.516,8.413,8.068,9.9,1.036,15.478,7.189,15.548,17.247.056,7.993-.141,15.99.07,23.978.425,16.154,13.947,29.968,29.842,30.715,5.777.271,9.66-2.588,10.022-7.379.357-4.719-3.05-7.989-8.911-8.555-8.875-.855-14.9-7.321-15.024-16.248-.078-5.494-.249-11,.03-16.483.6-11.75-1.389-22.563-10.793-31.212C37.321,71.986,40.412,62.859,39.986,52.317Zm143.988,59.322q0,6.749,0,13.5c-.006,12.054-4.534,17.242-16.474,18.878-4.649.636-7.737,4.119-7.49,8.447.247,4.3,3.673,7.36,8.437,7.448a23.812,23.812,0,0,0,3.983-.263,32.048,32.048,0,0,0,27.485-31.4c.124-7.829-.012-15.662.04-23.493.064-9.587,5.952-15.933,15.5-16.8,5.3-.484,8.461-3.466,8.464-7.978,0-4.529-3.148-7.513-8.442-8-9.544-.873-15.451-7.222-15.517-16.782-.055-8,.122-16-.058-23.993A32.041,32.041,0,0,0,170.466.057c-6.1-.436-10.147,2.426-10.453,7.391-.294,4.757,3.065,7.945,8.97,8.515,8.848.853,14.852,7.349,14.975,16.311.072,5.33.247,10.675-.032,15.992-.624,11.912,1.24,22.928,10.488,31.347C184.42,93.211,183.974,94.6,183.974,111.639Z"/>\n    </svg>';var o=document.createElement("span");o.classList.add("visually-hidden"),o.textContent="Expand/collapse menu",s.append(o),n.append(s);var i=document.createElement("ul");i.classList.add(this.elementClasses.submenusList),n.append(i);var a=document.createElement("div");a.classList.add(this.elementClasses.menuListWrapper),n.append(a);var r=document.createElement("ul");r.classList.add(this.elementClasses.menuList),a.append(r);var l=this.menuSlots.map((function(e){var n=e.getButton();n.classList.add(t.elementClasses.menuButton);var s=e.getOwnMenu();if(s){s.classList.add(t.elementClasses.submenuItem);var o=document.createElement("li");o.append(s),i.append(o)}var a=document.createElement("li");return a.append(n),a}));return r.append.apply(r,l),document.body.append(n),{debuggerContainerElement:n}},e.prototype.expand=function(){this.debuggerContainerElement.classList.add(this.elementClasses.expanded),this.state.set(this.stateKeys.expanded,!0)},e.prototype.collapse=function(){var e=this;this.debuggerContainerElement.classList.remove(this.elementClasses.expanded),this.menuSlots.forEach((function(t){var n=t.getOwnMenu();n&&n.classList.remove(e.elementClasses.submenuOpened)})),this.state.set(this.stateKeys.expanded,!1)},e.prototype.switch=function(){var e;null!==(e=this.state.get(this.stateKeys.expanded))&&void 0!==e&&e?this.collapse():this.expand()},e.prototype.addEvents=function(){var e=this;this.debuggerContainerElement.addEventListener("click",(function(t){var n=t.target;n instanceof Element&&(n.closest("."+e.elementClasses.mainButton)&&e.switch(),e.menuSlots.forEach((function(t){t.getButton().classList.toggle(e.elementClasses.menuButtonActive,t.hasActiveSettings());var s=t.getOwnMenu();s&&(t.getButton()===n&&s.classList.contains(e.elementClasses.submenuOpened)?s.classList.remove(e.elementClasses.submenuOpened):n===n.closest("."+e.elementClasses.menuButton)&&s.classList.toggle(e.elementClasses.submenuOpened,t.getButton()===n))})))}))},e}(),x=function(){function e(){}return e.prototype.set=function(e,t){localStorage.setItem(e,JSON.stringify(t))},e.prototype.get=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null},e}();C=o(".page-header"),window.addEventListener("scroll",(function(){C.classList.toggle("page-header--scrolled",window.scrollY>0)}),{passive:!0}),new l(".burger-menu",c),function(){var e=o(".hero-anger"),t=o(".page-header"),n=o(".hero-anger__barge-column",e),s=o(".hero-anger__decor-image",e),i=function(){n.style.paddingTop="".concat(t.clientHeight,"px"),s.style.marginTop="".concat(t.clientHeight,"px")};new MutationObserver(i).observe(t,{childList:!0,subtree:!0}),new ResizeObserver(i).observe(t)}(),b=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--layout-breakpoint-medium")||"992"),new u.A(".services-section__slider",{modules:[d.Ij,d.Vx],loop:!0,autoplay:{delay:1e4},breakpoints:(y={768:{slidesPerView:2,spaceBetween:10}},y[b]={slidesPerView:1},y),navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),function(){new p(".methods-section__variants-list",{classParams:{slotClass:"methods-section__variants-item",slotOpenClass:"methods-section__variants-item--open",slotOpenedClass:"methods-section__variants-item--opened",slotCloseClass:"methods-section__variants-item--close",slotClosedClass:"methods-section__variants-item--closed",summaryClass:"methods-section__variants-item-term",triggerClass:"methods-section__variants-item-trigger",iconClass:"methods-section__variants-item-trigger .icon-button__icon"},multiOpen:!1,defaultOpenSlotIndex:!1}),new p(".methods-section__case-list",{classParams:{slotClass:"methods-section__case-item",slotOpenClass:"methods-section__case-item--open",slotOpenedClass:"methods-section__case-item--opened",slotCloseClass:"methods-section__case-item--close",slotClosedClass:"methods-section__case-item--closed",summaryClass:"methods-section__case-item-trigger",triggerClass:"methods-section__case-item-trigger",iconClass:"methods-section__case-item-icon"},multiOpen:!1,defaultOpenSlotIndex:!1});var e=o(".methods-section__case"),t=o(".methods-section__case-trigger-label"),n=o("span",t),s=!1;t.addEventListener("click",(function(){var t=(s=!s)?"Скрыть список":"Показать список";n.textContent=t,e.classList.toggle("methods-section__case--open",s)}))}(),new u.A(".cost-section__slider",{modules:[d.Ij,d.Vx],loop:!0,autoplay:{delay:1e4},breakpoints:{768:{slidesPerView:2,spaceBetween:10}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new u.A(".reviews-section__slider",{modules:[d.Ij,d.Vx],loop:!0,autoplay:{delay:1e4},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new p(".faq-section .accordion",{multiOpen:!1,defaultOpenSlotIndex:!1}),window.addEventListener("load",(function(){return new _}))}}]);