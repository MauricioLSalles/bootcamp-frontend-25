class CardHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
        @import "./Card.css";
    </style>
    <h1 class="card-header">Jalasoft</h1>`;
  }
}

customElements.define("card-header", CardHeader);
