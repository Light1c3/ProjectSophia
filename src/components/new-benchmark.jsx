var React = require('react');
var Formsy  = require('formsy-react');
var Actions = require('../actions');
var Bootstrap = require('react-bootstrap');
var Router = require('react-router');
var Link = Router.Link;

var MyInput = require('../input/formElement');
var Modal = Bootstrap.Modal;
var Jumbotron = Bootstrap.Jumbotron;
var Button = Bootstrap.Button;

module.exports = React.createClass({
  getInitialState() {
    return { canSubmit: false };
  },
  submit(data) {
    data.GameId = this.props.id;
    Actions.postBenchmarks(data);
    alert(JSON.stringify(data, null, 4));
    this.props.onHide();
    this.setState({subCheck: true})
    console.log(this.props.subCheck);
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
          <Jumbotron className="text-center">
          <h1>New Benchmark</h1>
          <p>Complete this form and Submit to add a new benchmark!</p>
        </Jumbotron>
        </Modal.Header>
        <Modal.Body>
          <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
            <MyInput
              name="Username"
              value=""
              label="Username"
              type="text"
              placeholder="Choose a Username" />
            <hr />
            {/**<h2>
              Basic Computer Info
            </h2>
            <MyInput
              name="CPU"
              value=""
              label="CPU"
              type="text"
              placeholder="What Processor are you using?" />
            <MyInput
              name="GPU"
              value=""
              label="GPU"
              type="text"
              placeholder="What Graphics Card are you using?" />
            <MyInput
              name="RAM"
              value=""
              label="RAM"
              type="text"
              placeholder="How much RAM do you have?" />
            <hr />
            <h2>
              Benchmark Scores
            </h2>
            <MyInput
              name="AvgFPS"
              value=""
              label="Avrage FPS"
              type="text"
              placeholder="Your Avrage Frames Per Second" />
            <MyInput
              name="MaxFPS"
              value=""
              label="Max FPS"
              type="text"
              placeholder="Your Maximum Frames Per Second" />
            <MyInput
              name="MinFPS"
              value=""
              label="Minimum FPS"
              type="text"
              placeholder="Your Minimum Frames Per Second" />
            */}
            <Button type="submit" disabled={!this.state.canSubmit}>Submit</Button>
          </Formsy.Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
});
