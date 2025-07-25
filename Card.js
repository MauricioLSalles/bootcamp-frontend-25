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
      <h1 class="card-header">Jalasoft</h1>
      <img
        class="card-image"
        alt="Yamcha"
        src="https://preview.redd.it/how-many-times-has-yamcha-did-his-iconic-death-pose-v0-kcjjwgwgwose1.jpg?width=437&format=pjpg&auto=webp&s=00c14c02048a5a9e914fe7814f90d5af5d174c81"
      />
      <p class="card-name">Yamcha</p>
      <p class="card-role">Developer</p>
    </div>`;
  }
}

customElements.define("card-custom", Card);
