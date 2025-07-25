class CardRole extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
        @import "./Card.css";
    </style>  
    <p class="card-role">Developer</p>`;
  }
}

customElements.define("card-role", CardRole);
