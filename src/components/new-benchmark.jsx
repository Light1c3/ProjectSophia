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
      showModal: false,
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
                <Input type="text" label="CPU" bsSize="large" value={this.state.value} ref="inpCPU" placeholder="Enter Current CPU" />
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
  formSubmit() {
    var text = '{ "Username":"PostTest" , "CPU":"Skylake" , "GameId": 2 }';
    var obj = JSON.parse(text);
    Actions.postBenchmarks(obj);
    console.log(obj);

  }
});
