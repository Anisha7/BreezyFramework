
(function() {
    // Make a new Component
    // Choose an element to extend, usually HTMLElement
    class navItem extends HTMLElement {
      constructor() {
        super(); // MUST call super!
        // variables
        this._logo = false // does this need logo styles

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
          this._textEl.style.margin = 0;
          this._textEl.style.color = LightenDarkenColor("#fAA275", 60);
        }
        
      }

      // Defines the attributes accessible to JS
      static get observedAttributes() {
        return ['src', 'logo'] // List an array of attribute names
      }
  
      // Handle changes to an attribute
      attributeChangedCallback(attributeName, oldValue, newValue) {
        switch(attributeName) {
            case 'src':
                this._textEl.href = newValue
                break
            case 'logo':
                this._logo = newValue.toLowerCase()  == 'true'
                const text = this._textEl.innerHTML
                this._textEl =  this._logo ? document.createElement('h1') : this._textEl
                this._textEl = text
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
