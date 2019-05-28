interface ICustomElementConfig {
    selector: string;
    template: string;
    style?: string;
    useShadow?: boolean;
}

const validateSelector = (selector: string) => {
  if (selector.indexOf('-') <= 0) {
    throw new Error('You need at least 1 dash in the custom element name!');
  }
};

const validateTemplate = (template: string) => {
  if (!template) {
    throw new Error('You need to pass a template for the element');
  }
};

const applyStyles = (config: ICustomElementConfig) => {
  if (config.style) {
    return `<style>${config.style}</style>${config.template}`;
  }
  return config.template;
};

export const CustomElement = (config: ICustomElementConfig) => (classDefinition: any) => {
  validateSelector(config.selector);
  validateTemplate(config.template);
  const template = document.createElement('template');
  template.innerHTML = applyStyles(config);
  const connectedCallback = classDefinition.prototype.connectedCallback || (() => {});

  classDefinition.prototype.connectedCallback = () => {
    const clone = document.importNode(template.content, true);
    if (config.useShadow) {
      classDefinition.attachShadow({ mode: 'open'}).appendChild(clone);
      connectedCallback.call(classDefinition);
    }
  };

  window.customElements.define(config.selector, classDefinition);
};
