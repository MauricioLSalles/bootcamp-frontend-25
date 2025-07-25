class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import "./Card.css";
      </style>
      <div class="card">
        <card-header></card-header>
        <card-image ></card-image>
        <card-name ></card-name>
        <card-role ></card-role>
      </div>`;
  }
}

customElements.define("card-custom", Card);
