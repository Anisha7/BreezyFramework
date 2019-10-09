
(function() {
    // Make a new Component
    // Choose an element to extend, usually HTMLElement
    class buttonComponent extends HTMLElement {
      constructor() {
        super(); // MUST call super!
        // Attach a shadow root to the element.
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._buttonEl = document.createElement('button')
        this._buttonEl.innerHTML = this.innerHTML; // insert button text
        // style the button
        this.bgColor = 'transparent'
        this.textColor = 'black'
        this.fontSize = '16px'
        this._style()
        // add button to shadow root
        this._shadowRoot.appendChild(this._buttonEl)
      }
  
      _style() {
        this._buttonEl.style.margin = '30px 30px 0';
        this._buttonEl.style.padding = '15px 30px';
        this._buttonEl.style.borderRadius = '13px';
        this._buttonEl.style.border = `3px solid ${this.textColor}`;
        this._buttonEl.style.fontSize = this.fontSize;
        this._buttonEl.style.color = this.textColor;
        this._buttonEl.style.background = this.bgColor;
      }

      // Defines the attributes accessible to JS
      static get observedAttributes() {
        return ['bgColor', 'textColor', 'fontSize'] // List an array of attribute names
      }
  
      // Handle changes to an attribute
      attributeChangedCallback(attributeName, oldValue, newValue) {
        // use switch() {case: code, break} 
        if (attributeName === 'bgColor') {
          this.bgColor = newValue
        }
        if (attributeName === 'textColor') {
          // handle changes to an attribute
          this.textColor = newValue
        }
        if (attributeName === 'fontSize') {
          // handle changes to an attribute
          this.fontSize = newValue
        }
      }
  
      // Lifecycle method called when this component is appeded to the DOM
      connectedCallback() {
        // Do things when component is added to the DOM
      }
    }
  
    customElements.define('styled-button', buttonComponent);
    // ---------
  
  
  })()
  
  
  // NOTE:
  // if making navbar: Array.from(document.querySelectorAll('nav-item'))
  // <nav-bar> 
  //    <nav-item>
  //    </nav-item>
  // </nav-bar>

  // <custom-button>
  // document.querySelector('custom-buttom').onclick = function() {}

  // <custom-button onclick="buttonClick()">
   