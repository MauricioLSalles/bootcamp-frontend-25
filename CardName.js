class CardName extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
        @import "./Card.css";
    </style>
    <p class="card-name">Yamcha</p>`;
  }
}

customElements.define("card-name", CardName);
