// src/components/hero/hero-component.js

class HeroComponent extends HTMLElement {
    connectedCallback() {
        fetch('src/components/hero/hero.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            })
            .catch(error => console.error('Error loading hero component:', error));
    }
}

customElements.define('hero-component', HeroComponent);