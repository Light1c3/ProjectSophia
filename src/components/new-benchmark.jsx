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
      UsernameStyle: '',
      CPUStyle: '',
      GPUStyle: '',
      RAMStyle: '',
      showModal: false,
      disabled: true,
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
                <Input hasFeedback type="text" label="Username" bsStyle={this.state.UsernameStyle} onChange={this.handleChange.bind(this, 'Username')} value={this.state.Username} bsSize="large" ref="inptUser" placeholder="Enter Username"/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Well bsSize="small" className="text-center">
                  Enter Basic Computer Specs
                </Well>
                <Input hasFeedback type="text" label="CPU" bsStyle={this.state.CPUStyle} onChange={this.handleChange.bind(this, 'CPU')} value={this.state.CPU} bsSize="large" ref="inptCPU" placeholder="Enter Current CPU" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Input type="text" label="GPU" bsStyle={this.state.GPUStyle} onChange={this.handleChange.bind(this, 'GPU')} value={this.state.GPU} bsSize="large" ref="inptGPU" placeholder="Enter Current GPU" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Input type="text" label="RAM" bsStyle={this.state.RAMStyle} onChange={this.handleChange.bind(this, 'RAM')} value={this.state.RAM} bsSize="large" ref="inptRAM" placeholder="Enter Current RAM" />
              </Col>
            </Row>
          </form>
        </Grid>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit"  onClick={this.formSubmit} >Submit</Button>
        <Button bsStyle="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>);
  },
  formSubmit: function() {
    console.log("formSubmit");
    if (this.state.UsernameStyle == 'success' && this.state.CPUStyle == 'success') {

      var submitJSON = {
        "Username": this.state.Username,
        "CPU": this.state.CPU,
        "GPU": this.state.GPU,
        "RAM": this.state.RAM,
        "GameId": this.props.id
      };
      console.log(submitJSON);
      //Actions.postBenchmarks(submitJSON);
    } else {
      console.log("else");
      if (this.state.UsernameStyle !== 'seccess') {
        console.log("No Username");
      } else if (this.state.CPUStyle !== 'seccess') {
        console.log("No CPU");
      } else if (this.state.GPUStyle !== 'seccess') {
        console.log("No GPU");
      } else if (this.state.RAMStyle !== 'seccess') {
        console.log("No RAM");
      }
    }
  },
  handleChange: function(name, e) {
    var state = {};
    state[name] = e.target.value;
    this.setState(state);
    var namestyle  = name + 'Style';
    this.setState(this.validationState(namestyle, e));
  },
  validationState: function(style, event) {
    var length = event.target.value.length;

    switch (style) {
      case 'UsernameStyle':
        if (length > 6) this.setState({UsernameStyle: 'success'});
        else if (length > 4) this.setState({UsernameStyle: 'warning'});
        break;
      case 'CPUStyle':
        if (length > 6) this.setState({CPUStyle: 'success'});
        else if (length > 4) this.setState({CPUStyle: 'warning'});
        break;
      case 'GPUStyle':
        if (length > 6) this.setState({GPUStyle: 'success'});
        else if (length > 4) this.setState({GPUStyle: 'warning'});
        break;
      case 'RAMStyle':
        if (length > 6) this.setState({RAMStyle: 'success'});
        else if (length > 4) this.setState({RAMStyle: 'warning'});
        break;
    }
    return {style};
  }
});
