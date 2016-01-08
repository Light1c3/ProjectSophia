var React = require('react');
var Usermark = require('./usermark');
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
            <Row className="show-grid">
              <Col>
                <Input type="text" label="GPU" bsSize="large" placeholder="Enter Current GPU" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Input type="text" label="RAM" bsSize="large" placeholder="Enter Current RAM" />
              </Col>
            </Row>
            <hr />
            <Row className="show-grid">
              <Col>
                <Well bsSize="small" className="text-center">
                  Enter Benchmark Results
                </Well>
                <Input type="text" label="Avarage FPS" bsSize="large" placeholder="Enter Avarage FPS" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Input type="text" label="Maximum FPS" bsSize="large" placeholder="Enter Maximum FPS" />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <Input type="text" label="Minimum FPS" bsSize="large" placeholder="Enter Minimum FPS" />
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
    console.log("Inner Flag 1")
    {this.props.handleSubmit}
    console.log("Inner Flag 2")
  }
});
