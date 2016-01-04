var React = require('react');
var Header = require('./header');
var GameCat = require('./gamecat');


module.exports = React.createClass({
  getInitialState: function(){
    return {
      gamecatData:  [{
        title: 'Show Benchmarks',
        number: 120,
        header: 'Fallout 4',
        description: 'Fallout 4 is an open world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. The fifth major installment in the Fallout series...',
        imageUrl: 'https://imgrszr-prod.s3.amazonaws.com/1_400--5c49c9942a51f3ad29244289a5de762f641b42cc.png'
      },{
        title: 'Show Benchmarks',
        number: 25,
        header: 'Star Wars',
        description: 'Star Wars Galaxies was a Star Wars themed massively multiplayer online role-playing game for Microsoft Windows, developed by Sony Online Entertainment and published by LucasArts.',
        imageUrl: 'https://levelwhimsicality.files.wordpress.com/2014/06/swg_02.png'
      }]
    }
  },
  render: function() {
    {console.log()}
    var list = this.state.gamecatData.map(function(gamecatProps){
      return <GameCat {...gamecatProps} />
    });

    return <div>
      {list}
    </div>
  }
});
