// HTML Template example
const fertilityCircleTemplate = document.createElement('template');
fertilityCircleTemplate.innerHTML = `
  <style>
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
    }

    svg {
      width: 100%;
      height: 100%;
      position: absolute;
      pointer-events: none;
    }

    .content {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--circle-color, #ff736f);
    }
  </style>

  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="100"
      cy="100"
      r="96.5"
      stroke="var(--circle-color, #ff736f)"
      stroke-width="7"
      fill="white"
    />
  </svg>
  <div class="content">
    <slot></slot>
  </div>
`;

class FertilityCircle extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  static get observedAttributes() {
    return ['status']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) this.render()
  }

  render() {
    const status = this.getAttribute('status') || 'fertile'
    const color = status === 'fertile' ? '#ff736f' : '#a1c862'

    this.shadowRoot.innerHTML = ''

    const templateClone = fertilityCircleTemplate.content.cloneNode(true)
    this.shadowRoot.appendChild(templateClone)

    this.style.setProperty('--circle-color', color)
  }
}

// Define the custom element
customElements.define('app-fertility-circle', FertilityCircle)

