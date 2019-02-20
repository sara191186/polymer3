import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
class XCustom extends PolymerElement {
  static get template () {
    return html`
      <input value="{{user.name::input}}">
    `;
  }
  static get properties() {
    return {
      user: {
        type: Object,
        value: function() {
          return {};
        }
      }
    }
  }
  // Observe the name sub-property on the user object
  static get observers() {
    return [
        'userNameChanged(user.name)'
    ]
  }
  // For a property or sub-property dependency, the corresponding
  // argument is the new value of the property or sub-property
  userNameChanged(name) {
    if (name) {
      console.log('new name: ' + name);
    } else {
      console.log('user name is undefined');
    }
  }
}
customElements.define('x-custom', XCustom);
