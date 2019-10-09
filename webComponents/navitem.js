// TODO: Fix text-color. 
(function() {
    // Make a new Component
    // Choose an element to extend, usually HTMLElement
    class navItem extends HTMLElement {
      constructor() {
        super(); // MUST call super!

        // variables
        this._logo = false // does this need logo styles
        this._textColor = 'black'

        // Attach a shadow root to the element.
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._navItemEl = document.createElement('li')
        // link element
        this._textEl = document.createElement('a')
        if (this._logo == true) {
            this._textEl = document.createElement('h1')
        }
        this._textEl.innerHTML = this.innerHTML
        this._navItemEl.appendChild(this._textEl)
        this._shadowRoot.appendChild(this._navItemEl)

        const styles = document.createElement('style')
        styles.innerHTML = `
          :host {
            color: #000;
            font-family: Helvetica;
          }
        `
        this._shadowRoot.appendChild(styles)

        this.render()
      }
      
      _style() {
        this._textEl.style.display = 'block';
        this._textEl.style.padding = '1em';
        this._textEl.style.textDecoration = 'none';
        this._textEl.style.fontWeight = '600';
        this._textEl.onmouseover = () => {
            this._textEl.style.textDecoration = 'underline';
        }

        if (this._logo == true) {
          this._textEl.style.margin = '0px';
          // fix because lighten darken doesn't exist
          this._textEl.style.color = this._textColor;
          // this._textEl.style.color = LightenDarkenColor("#fAA275", 60);
        }
        
      }

      // Defines the attributes accessible to JS
      static get observedAttributes() {
        return ['src', 'logo', 'text-color'] // List an array of attribute names
      }
  
      // Handle changes to an attribute
      attributeChangedCallback(attributeName, oldValue, newValue) {
        switch(attributeName) {
            case 'src':
                this._textEl.href = newValue
                break
            case 'logo':
                this._logo = newValue.toLowerCase()  == 'true'
                const old = this._textEl
                const text = this._textEl.innerHTML
                this._textEl =  this._logo ? document.createElement('h1') : this._textEl
                this._textEl.innerHTML = text
                this._navItemEl.replaceChild(this._textEl, old)
                this.render()
                break
            case 'text-color':
                this._textColor = newValue
                break
        }
      }
  
      // Lifecycle method called when this component is appeded to the DOM
      connectedCallback() {
        // Do things when component is added to the DOM
      }

      render() {
        this._style()
      }
    }
  
    customElements.define('nav-item', navItem);
    // ---------
  
  
  })()
