var React = require('react');
var Reflux = require('reflux');
var Benchmark = require('./benchmark');
var NewBench = require('./new-benchmark');
var Bootstrap = require('react-bootstrap');
var BenchmarksStore = require('../stores/benches-store');
var GamesStore = require('../stores/games-store');
var Actions = require('../actions');

var Modal = Bootstrap.Modal;
var Popover= Bootstrap.Popover;
var Button = Bootstrap.Button;
var PageHeader = Bootstrap.PageHeader;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(BenchmarksStore, 'onChangeBench'),
    Reflux.listenTo(GamesStore, 'onChangeGame')
  ],
  close() {
    this.setState({showModal: false});
  },
  open() {
    this.setState({ showModal: true });
  },
  getInitialState: function() {
    return {
      showModal: false,
      benches: [],
      game: null
    }
  },
  componentWillMount: function() {
    Actions.getBenchmarks(this.props.params.id);
    Actions.getGameById(this.props.params.id);
  },
  render: function() {
    var name = "";
    var gameCover = "";
    var publisher = "";
    var releastDate = "";

    if(this.state.game!=null)
    {
      name = this.state.game.Title
      gameCover = this.state.game.ImageURL
      publisher = this.state.game.Publisher
      releastDate = this.state.game.Year
    }
    return <div className="text-center">
      <h2 className="titleMark">
        {name}
        <div>
          <small>
            <b>Publisher: </b>{publisher}   <b>Release Year: </b>{releastDate}
          </small>
        </div>
      </h2>
      {this.renderBenches()}
      <div>
        <span>
          <NewBench handleSub={this.handleSubmit} show={this.state.showModal} onHide={this.close} id={this.props.params.id}/>
        </span>
      </div>
      <Button
        className="newBenchmark"
        bsSize="large"
        onClick={this.open}
      >
        Create New Benchmark
      </Button>

    </div>
  },
  renderBenches: function() {
    var pos = (window.innerWidth)/2
    pos = pos - 140
    if (this.state.game != null) {
      if (this.state.game.MarkCount == 0) {
        return <div>
          <br />
            <h3> Their are no benchmarks for this game.</h3>
            <h4>Click below to create the first!</h4>
          <br />
        </div>
      }
    }
    return <div>
      {this.state.benches.map((benchmark) =>
        <Benchmark Benches={benchmark} className="list-group-item" key={benchmark.Id} />
      )}
    </div>
  },
  onChangeBench: function(event, benches) {
    this.setState({benches: benches});
  },
  onChangeGame: function(event, game) {
    this.setState({game: game});
  }
})
