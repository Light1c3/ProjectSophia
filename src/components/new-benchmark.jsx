var React = require('react');
var Formsy  = require('formsy-react');
var Bootstrap = require('react-bootstrap');

var MyInput = require('../input/formElement');
var Modal = Bootstrap.Modal;

module.exports = React.createClass({
  getInitialState() {
    return { canSubmit: false };
  },
  submit(data) {
    alert(JSON.stringify(data, null, 4));
  },
  enableButton() {
    this.setState({ canSubmit: true });
  },
  disableButton() {
    this.setState({ canSubmit: false });
  },
  render() {
    return (
      <Modal
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        show={this.props.show}
        onHide={this.props.onHide}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <Formsy onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
            <MyInput name="email" title="Email" validations="isEmail" validationError="This is not a valid email" required />
            <MyInput name="password" title="Password" type="password" required />
            <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
          </Formsy>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
});
