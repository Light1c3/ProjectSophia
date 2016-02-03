/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions');
var BenchmarkStore = require('../stores/benches-store');
var BenchmarkList = require('./benchmark-list');
var Bootstrap = require('react-bootstrap');

var Jumbotron = Bootstrap.Jumbotron;
var Modal = Bootstrap.Modal;
var Tooltip = Bootstrap.Tooltip;
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
      AvgFPS: '',
      MinFPS: '',
      MaxFPS: '',
      SubmitBtnStyle: 'default',
      UsernameStyle: 'default',
      CPUStyle: 'default',
      GPUStyle: 'default',
      RAMStyle: 'default',
      AvgFPSStyle: 'default',
      MinFPSStyle: 'default',
      MaxFPSStyle: 'default',
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
                <Input hasFeedback type="text" label="Username" bsStyle={this.state.UsernameStyle} onChange={this.handleChange.bind(this, 'Username')} value={this.state.Username} bsSize="large"  placeholder="Enter Username"/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Well bsSize="small" className="text-center">
                  Enter Basic Computer Specs
                </Well>
                <Input hasFeedback type="text" label="CPU" bsStyle={this.state.CPUStyle} onChange={this.handleChange.bind(this, 'CPU')} value={this.state.CPU} bsSize="large" placeholder="Enter Current CPU" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Input hasFeedback type="text" label="GPU" bsStyle={this.state.GPUStyle} onChange={this.handleChange.bind(this, 'GPU')} value={this.state.GPU} bsSize="large" placeholder="Enter Current GPU" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Input hasFeedback type="text" label="RAM" bsStyle={this.state.RAMStyle} onChange={this.handleChange.bind(this, 'RAM')} value={this.state.RAM} bsSize="large" placeholder="Enter Current RAM" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Well bsSize="small" className="text-center">
                  Enter Benchmark Results
                </Well>
                <Input hasFeedback type="text" label="Average FPS" bsStyle={this.state.AvgFPSStyle} onChange={this.handleChange.bind(this, 'AvgFPS')} value={this.state.AvgFPS} bsSize="large" placeholder="Enter your avrage frames per second" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Input hasFeedback type="text" label="Maximum FPS" bsStyle={this.state.MaxFPSStyle} onChange={this.handleChange.bind(this, 'MaxFPS')} value={this.state.MaxFPS} bsSize="large" placeholder="Enter your max frames per second" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Input hasFeedback type="text" label="Minimum FPS" bsStyle={this.state.MinFPSStyle} onChange={this.handleChange.bind(this, 'MinFPS')} value={this.state.MinFPS} bsSize="large" placeholder="Enter your min frames per second" />
              </Col>
            </Row>

          </form>
        </Grid>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle={this.state.SubmitBtnStyle} type="submit"  onClick={this.formSubmit} >Submit</Button>
        <Button bsStyle="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>);
  },
  formSubmit: function() {
    if (this.state.UsernameStyle == 'success' &&
        this.state.CPUStyle == 'success' &&
        this.state.GPUStyle == 'success' &&
        this.state.RAMStyle == 'success' &&
        this.state.AvgFPSStyle == 'success' &&
        this.state.MinFPSStyle == 'success' &&
        this.state.MaxFPSStyle == 'success') {

      var submitJSON = {
        "Username": this.state.Username,
        "CPU": this.state.CPU,
        "GPU": this.state.GPU,
        "RAM": this.state.RAM,
        "AvgFPS": this.state.AvgFPS,
        "MaxFPS": this.state.MaxFPS,
        "MinFPS": this.state.MinFPS,
        "GameId": this.props.id
      };
      alert(JSON.stringify(submitJSON, null, 4));
      this.props.onHide();
      Actions.postBenchmarks(submitJSON);
    } else {
      if (this.state.UsernameStyle !== 'success') {
        console.log("No Username");
      } else if (this.state.CPUStyle !== 'success') {
        console.log("No CPU");
      } else if (this.state.GPUStyle !== 'success') {
        console.log("No GPU");
      } else if (this.state.RAMStyle !== 'success') {
        console.log("No RAM");
      } else if (this.state.AvgFPSStyle !== 'success') {
        console.log("No Avrage FPS");
      } else if (this.state.MinFPSStyle !== 'success') {
        console.log("No Maximum FPS");
      } else if (this.state.MaxFPSStyle !== 'success') {
        console.log("No Minimum FPS");
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
        else this.setState({UsernameStyle: 'default'});
        break;
      case 'CPUStyle':
        if (length > 6) this.setState({CPUStyle: 'success'});
        else if (length > 4) this.setState({CPUStyle: 'warning'});
        else this.setState({CPUStyle: 'default'});
        break;
      case 'GPUStyle':
        if (length > 6) this.setState({GPUStyle: 'success'});
        else if (length > 4) this.setState({GPUStyle: 'warning'});
        else this.setState({GPUStyle: 'default'});
        break;
      case 'RAMStyle':
        if (length > 6) this.setState({RAMStyle: 'success'});
        else if (length > 4) this.setState({RAMStyle: 'warning'});
        else this.setState({RAMStyle: 'default'});
        break;
      case 'AvgFPSStyle':
        if (length > 6) this.setState({AvgFPSStyle: 'success'});
        else if (length > 4) this.setState({AvgFPSStyle: 'warning'});
        else this.setState({AvgFPSStyle: 'default'});
        break;
      case 'MaxFPSStyle':
        if (length > 6) this.setState({MaxFPSStyle: 'success'});
        else if (length > 4) this.setState({MaxFPSStyle: 'warning'});
        else this.setState({MaxFPSStyle: 'default'});
        break;
      case 'MinFPSStyle':
        if (length > 6) this.setState({MinFPSStyle: 'success'});
        else if (length > 4) this.setState({MinFPSStyle: 'warning'});
        else this.setState({MinFPSStyle: 'default'});
        break;
    }
    if (this.state.UsernameStyle == 'success' &&
        this.state.CPUStyle == 'success' &&
        this.state.GPUStyle == 'success' &&
        this.state.RAMStyle == 'success' &&
        this.state.AvgFPSStyle == 'success' &&
        this.state.MinFPSStyle == 'success' &&
        this.state.MaxFPSStyle == 'success') {

      this.setState({SubmitBtnStyle: 'success'});
    }else {
      this.setState({SubmitBtnStyle: 'default'});
    }
    return {style};
  }
});
