
(function() {
    // Make a new Component
    // Choose an element to extend, usually HTMLElement
    class navbar extends HTMLElement {
      constructor() {
        super(); // MUST call super!
        // Attach a shadow root to the element.
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._navEl = document.createElement('div')
        // ul styled for list elems
        this._navUl = document.createElement('ul')
        this._navUl.innerHTML = this.innerHTML
        this._centerAlign = false
        this._color = 'white'
        this._curve = '' // bottom, top

        this.render() // render styles

        this._navEl.appendChild(this._navUl)
        this._shadowRoot.appendChild(this._navEl)
      }
  
      // Defines the attributes accessible to JS
      static get observedAttributes() {
        return ['center-align', 'color','curve'] // List an array of attribute names
      }

      // append styles to item
      _styleNav() {
        //   styles for default navbar
        this._navEl.style.display = 'flex';
        this._navEl.style.flexDirection = 'row';
        this._navEl.style.justifyContent = 'space-between';
        this._navEl.style.alignItems = 'center';
        this._navEl.style.backgroundColor = this._color;
        this._navEl.style.alignItems = 'baseline';
        this._navEl.style.borderRadius = this._color; // TODO: lighten 20%
        this._navEl.style.color = "red";
        // use hsl(hue, saturation, lightness)?
        // ex. hsl(${i*step}, 100%, 50%) would create a rainbow in a for loop
        // this._navEl.style.color = LightenDarkenColor(this._color, 20);
        // Align center styles
        if (this._centerAlign === true) {
            this._navEl.style.justifyContent = 'center';
        }
        // create a bottom curve
        if (this._curve === 'bottom') {
            this._navEl.style.height = '100px';
            this._navEl.style.width = '100%';
            this._navEl.style.borderBottomLeftRadius = '800%';
            this._navEl.style.borderBottomRightRadius = '800%';
            this._navEl.style.alignItems = 'flex-start';
        }
        // create a top curve
        if (this._curve === 'top') {
            this._navEl.style.height = '100px';
            this._navEl.style.width = '100%';
            this._navEl.style.borderTopLeftRadius = '800%';
            this._navEl.style.borderTopRightRadius = '800%';
            this._navEl.style.alignItems = 'flex-end';
        }
      }

      // style the ul element
      _styleUl() {
        this._navUl.style.listStyleType = 'none';
        this._navUl.style.padding = '0';
        this._navUl.style.margin = '0';
        this._navUl.style.display = 'flex';
        this._navUl.style.flexDirection = 'row';
        this._navUl.style.alignItems = 'baseline';
        this._navUl.style.padding = '0px 20px';
      }

      // Handle changes to an attribute
      attributeChangedCallback(attributeName, oldValue, newValue) {
        switch (attributeName) {
            case 'center-align':
                this._centerAlign = newValue.toLowerCase() === 'true'
                this.render()
                break
            case 'color':
                this._color = newValue
                this.render()
                break
            case 'curve':
                this._curve = newValue.toLowerCase()
                this.render()
                break
        }
      }
  
      // Lifecycle method called when this component is appended to the DOM
      connectedCallback() {
        // Do things when component is added to the DOM
      }

      // User defined method to 'render' this component.
      render() {
        this._styleNav()
        this._styleUl()
      }
    }
  
    customElements.define('nav-bar', navbar);
    // ---------
  
  
  })()