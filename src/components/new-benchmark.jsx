/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions');
var BenchmarkStore = require('../stores/benches-store');
var BenchmarkList = require('./benchmark-list');
var Bootstrap = require('react-bootstrap');

var Jumbotron = Bootstrap.Jumbotron;
var Modal = Bootstrap.Modal;
var Input = Bootstrap.Input;
var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Well = Bootstrap.Well;
var Button = Bootstrap.Button;

module.exports = React.createClass({
  getInitialState() {
    return {
      Username: '',
      CPU: '',
      GPU: '',
      RAM: '',
      showModal: false
    }
  },
  render: function() {
    return (<Modal
              bsSize="large"
              aria-labelledby="contained-modal-title-lg"
              show={this.props.show}
              onHide={this.props.onHide}>
      <Modal.Header>
        <Jumbotron className="text-center">
          <h1>New Benchmark</h1>
          <p>Complete this form and Submit to add a new benchmark entery</p>
        </Jumbotron>
      </Modal.Header>
      <Modal.Body>
        <Grid fluid={true}>
          <form>
            <Row className="show-grid">
              <Col>
                <Well bsSize="small" className="text-center">
                  Enter Basic Computer Specs
                </Well>
                <Input type="text" label="CPU" onChange={this.handleChange.bind(this, 'CPU')} value={this.state.CPU} bsSize="large" ref="inpCPU" placeholder="Enter Current CPU" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Input type="text" label="GPU" onChange={this.handleChange.bind(this, 'GPU')} value={this.state.GPU} bsSize="large" placeholder="Enter Current GPU" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Input type="text" label="RAM" onChange={this.handleChange.bind(this, 'RAM')} value={this.state.RAM} bsSize="large" placeholder="Enter Current RAM" />
              </Col>
            </Row>
          </form>
        </Grid>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" bsStyle="primary" onClick={this.formSubmit}>Submit</Button>
        <Button bsStyle="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>);
  },
  formSubmit: function() {
    var submitJSON = {};
    submitJSON = '{ "Username":"PostTest" , "CPU":"Skylake" , "GameId": 2 }';

    console.log(submitJSON);
  },
  handleChange: function(name, e) {
      var state = {};
      state[name] = e.target.value;
      this.setState(state);
  }
});
