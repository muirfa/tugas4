class MyH2 extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `<style>h2 {font-family: "Lucida Console", Courier, monospace; color: royalblue;}</style><h2>${this.getAttribute('name')}</h2>`;
    }
}

class MyP extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `<style>p {font-family: "Lucida Console", Courier, monospace; color: royalblue;}</style><p>${this.getAttribute('name')}</p>`;
    }
}

window.customElements.define('my-h2', MyH2);
window.customElements.define('my-p', MyP);