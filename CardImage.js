class CardImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import "./Card.css";
      </style>
      <img
        class="card-image"
        alt="Yamcha"
        src="https://preview.redd.it/how-many-times-has-yamcha-did-his-iconic-death-pose-v0-kcjjwgwgwose1.jpg?width=437&format=pjpg&auto=webp&s=00c14c02048a5a9e914fe7814f90d5af5d174c81"
      />
      `;
  }
}

customElements.define("card-image", CardImage);
