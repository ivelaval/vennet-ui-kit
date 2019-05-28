import { CustomElement } from "./custom-element.decorator";

@CustomElement({
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
class CustomComponent extends HTMLElement {
  connectedCallback() {
    const elm = document.createElement('h3');
    elm.textContent = 'Boo!';
    const appended = this.shadowRoot.appendChild(elm);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('vennet-first');
  setTimeout(()=> {
    element.parentNode.removeChild(element);
  }, 2000);
});
