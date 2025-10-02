class Card extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin: 16px;
        }
        .card {
          width: 100%;
          height: 100%;
          padding: 16px;
          border-radius: 4px;
          background-color: white;
        }
      </style>

      <div class="card">
        <slot></slot>
      </div>
    `
  }
}

// Define the custom element
customElements.define('app-card', Card)
