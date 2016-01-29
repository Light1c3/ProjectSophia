var React = require('react');
var Formsy  = require('formsy-react');
var FRC = require('formsy-react-components');

var Input = FRC.Input;

module.exports = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },
  render() {

    var className = 'form-group' + (this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'error' : '');

    var errorMessage = this.getErrorMessage();

    return (
      <div className={className}>
        <label htmlFor={this.props.name}>{this.props.title}</label>
          <Input
            name = {this.props.name}
            value= {this.getValue()}
            label= {this.props.label}
            type="text"
            placeholder= {this.props.placeholder}
            required
          />
        <span className='validation-error'>{errorMessage}</span>
      </div>
    );
  }
});
