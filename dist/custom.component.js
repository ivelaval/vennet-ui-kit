"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_element_decorator_1 = require("./custom-element.decorator");
let CustomComponent = class CustomComponent extends HTMLElement {
    connectedCallback() {
        const elm = document.createElement('h3');
        elm.textContent = 'Boo!';
        const appended = this.shadowRoot.appendChild(elm);
    }
};
CustomComponent = __decorate([
    custom_element_decorator_1.CustomElement({
        selector: 'vennet-first',
        template: `<div>Hello world</div>`,
        style: `
    :host {
        background: #009cff;     
        padding: 16px;         
        font-size: 24px;
    }
  `,
        useShadow: true
    })
], CustomComponent);
window.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('vennet-first');
    setTimeout(() => {
        element.parentNode.removeChild(element);
    }, 2000);
});
//# sourceMappingURL=custom.component.js.map