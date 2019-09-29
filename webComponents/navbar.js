import './navitem.js';

(function() {
    // Make a new Component
    // Choose an element to extend, usually HTMLElement
    class webComponentBase extends HTMLElement {
      constructor() {
        super(); // MUST call super!
        // Attach a shadow root to the element.
        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this._navEl = document.createElement('div')
        // append ul element to this._navEl
        // append ul styles
        this._navUl = document.createElement('ul')

        this._centerAlign = false
        this._color = 'white'
        this._data = [] // store tuples (nav item name, link)
        this._curve = '' // bottom, top

        this.render()

        this._shadowRoot.appendChild(this._navEl)
      }
  
      // Defines the attributes accessible to JS
      static get observedAttributes() {
        return ['centerAlign', 'color','data', 'curve'] // List an array of attribute names
      }

      // append styles to item
      _styleNav() {
        //   styles for default navbar
        //   this._navEl.style
        this._navEl.style.display = 'flex';
        this._navEl.style.flexDirection = 'row';
        this._navEl.style.justifyContent = 'space-between';
        this._navEl.style.alignItems = 'center';
        this._navEl.style.backgroundColor = this._color;
        this._navEl.style.alignItems = 'baseline';
        this._navEl.style.borderRadius = '10px';
        this._navEl.style.color = LightenDarkenColor(this._color, 20);
        // Align center styles
        if (this._centerAlign === true) {
            this._navEl.style.justifyContent = 'center !important';
        }

        if (this._curve === 'bottom') {
            this._navEl.style.height = '100px !important';
            this._navEl.style.width = '100% !important';
            this._navEl.style.borderBottomLeftRadius = '800% !important';
            this._navEl.style.borderBottomRightERdius = '800% !important';
            this._navEl.style.alignItems = flex-start;
        }

        if (this._curve === 'top') {
            this._navEl.style.height = '100px !important';
            this._navEl.style.width = '100% !important';
            this._navEl.style.borderTopLeftRadius = '800% !important';
            this._navEl.style.borderTopRightRadius = '800% !important';
            this._navEl.style.alignItems = 'flex-end !important';
        }
      }

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
            case 'data':
                // TODO: remove attr.
                this._data = JSON.parse(newValue)
                break
            case 'centerAlign':
                this._centerAlign = newValue.toLowerCase() == 'true'
                break
            case 'color':
                this._color = newValue
                break
            case 'curve':
                this._curve = newValue.toLowerCase()
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
  
    customElements.define('hello-world', webComponentBase);
    // ---------
  
  
  })()
  
  
  // NOTE:
  // if making navbar: Array.from(document.querySelectorAll('nav-item'))
  // <nav-bar> 
  //    <nav-item>
  //    </nav-item>
  // </nav-bar>
   