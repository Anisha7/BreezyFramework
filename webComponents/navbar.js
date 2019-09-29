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
        this._shadowRoot.appendChild(this._navEl)
        this._centerAlign = false
        this._bgColor = 'white'
        this._data = [] // store tuples (nav item name, link)

        this.render()
      }
  
      // Defines the attributes accessible to JS
      static get observedAttributes() {
        return ['centerAlign', 'color','data'] // List an array of attribute names
      }

      // append styles to item
      _styleNav() {
        //   styles for default navbar
        //   this._navEl.style
        this._navEl.style.display = 'flex';
        this._navEl.style.flexDirection = 'row';
        this._navEl.style.justifyContent = 'space-between';
        this._navEl.style.alignItems = 'center';
        this._navEl.style.backgroundColor = this._bgColor;
        this._navEl.style.alignItems = 'baseline';
        this._navEl.style.borderRadius = '10px';
        this._navEl.style.color = LightenDarkenColor(this._bgColor, 20);
        // Align center styles
        if (this._centerAlign === true) {
            this._navEl.style.justifyContent = 'center !important';
        }
      }
      
      // Parse the json string in data to get tuple (nav name, link)
      _parseData() {

      }

      // Handle changes to an attribute
      attributeChangedCallback(attributeName, oldValue, newValue) {
        // use switch() {case: code, break} 
        if (attributeName === 'centerAlign') {
          // add styles for centering navbar elements
        }
      }
  
      // Lifecycle method called when this component is appeded to the DOM
      connectedCallback() {
        // Do things when component is added to the DOM
      }

      // User defined method to 'render' this component.
      render() {
        this._styleNav()
        this._parseData()
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
   