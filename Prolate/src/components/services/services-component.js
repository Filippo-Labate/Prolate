// src/components/services/services-component.js

class ServicesComponent extends HTMLElement {
    connectedCallback() {
        fetch('src/components/services/services.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            })
            .catch(error => console.error('Error loading services component:', error));
    }
}

customElements.define('services-component', ServicesComponent);