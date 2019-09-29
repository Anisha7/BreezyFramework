import { thisTypeAnnotation } from "babel-types";

// Start with an anonymous function

(function() {
    // Make a new Component
    // Choose an element to extend, usually HTMLElement
    class webComponentBase extends HTMLElement {
      constructor() {
        super(); // MUST call super!
        // Attach a shadow root to the element.
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._navItemEl = document.createElement('ul')
        
        this._title = ''
        this._src = ''
        this._logo = false // does this need logo styles
        this._shadowRoot.appendChild(this._navItemEl)

        this._listEl = document.createElement('li')
        if (this._logo == true) {
            // append h1 tag instead of (or inside??) the 'a' tag
        }
        this._listLinkEl = document.createElement('a')

        this.render()
      }
      
      _style() {
        this._listLinkEl.style.display = 'block';
        this._listLinkEl.style.padding = '1em';
        this._listLinkEl.style.textDecoration = 'none';
        this._listLinkEl.style.fontWeight = '600';
        this._listLinkEl.onmouseover = () => {
            this._listLinkEl.style.textDecoration = 'underline';
        }
        
      }

      // Defines the attributes accessible to JS
      static get observedAttributes() {
        return ['title', 'src', 'logo'] // List an array of attribute names
      }
  
      // Handle changes to an attribute
      attributeChangedCallback(attributeName, oldValue, newValue) {
        // use switch() {case: code, break} 
        switch(attributeName) {
            case 'title':
                this._title = newValue
                break
            case 'src':
                this._src = newValue
                break
            case 'logo':
                this._logo = newValue.toLowerCase()  == 'true'
                break
        }
        if (attributeName === '???') {
          // handle changes to an attribute
  
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
  
    customElements.define('hello-world', webComponentBase);
    // ---------
  
  
  })()
  
  
  // NOTE:
  // if making navbar: Array.from(document.querySelectorAll('nav-item'))
  // <nav-bar> 
  //    <nav-item>
  //    </nav-item>
  // </nav-bar>
  