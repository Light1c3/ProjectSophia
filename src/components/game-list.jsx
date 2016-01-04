var React = require('react');
var Header = require('./header');
var GameCat = require('./gamecat');
var Router = require('react-router');
var Link = Router.Link;


module.exports = React.createClass({
  getInitialState: function(){
    return {
      gamecatData:  [{
        header: 'Benchmarks',
        number: 120,
        title: 'Fallout 4',
        id: 'fallout4',
        description: 'Fallout 4 is an open world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. The fifth major installment in the Fallout series...',
        imageUrl: 'https://imgrszr-prod.s3.amazonaws.com/1_400--5c49c9942a51f3ad29244289a5de762f641b42cc.png'
      },{
        header: 'Benchmarks',
        number: 25,
        title: 'Star Wars',
        id: 'starwars',
        description: 'Star Wars Galaxies was a Star Wars themed massively multiplayer online role-playing game for Microsoft Windows, developed by Sony Online Entertainment and published by LucasArts.',
        imageUrl: 'https://levelwhimsicality.files.wordpress.com/2014/06/swg_02.png'
      },{
        header: 'Benchmarks',
        number: 160,
        title: 'Battlefield 4',
        id: 'bf4',
        description: 'Fallout 4 is an open world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. The fifth major installment in the Fallout series...',
        imageUrl: 'http://d10e5q7gdrohow.cloudfront.net/wp-content/uploads/2014/02/battle-field-4-400x400.jpg'
      },{
        header: 'Benchmarks',
        number: 2,
        title: 'Star Wars Battlefront',
        id: 'battlefront',
        description: 'Star Wars Galaxies was a Star Wars themed massively multiplayer online role-playing game for Microsoft Windows, developed by Sony Online Entertainment and published by LucasArts.',
        imageUrl: 'http://www.offgamers.com/blog/wp-content/uploads/2015/11/Star-Wars-Battlefront.jpg'
      },{
        header: 'Benchmarks',
        number: 70,
        title: 'Crysis 3',
        id: 'crysis3',
        description: 'Fallout 4 is an open world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. The fifth major installment in the Fallout series...',
        imageUrl: 'http://www.adventure-music-pack.com/wp-content/uploads/Crysis-3.jpg'
      },{
        header: 'Benchmarks',
        number: 159,
        title: 'The Witcher 3',
        id: 'witcher3',
        description: 'Star Wars Galaxies was a Star Wars themed massively multiplayer online role-playing game for Microsoft Windows, developed by Sony Online Entertainment and published by LucasArts.',
        imageUrl: 'http://game-maps.com/y16/mp-mosaic/mp-mosaic-Witcher3-a.jpg'
      }]
    }
  },
  render: function() {
    {console.log()}
    var list = this.state.gamecatData.map(function(gamecatProps){
      return <div className="text-center">
        <GameCat {...gamecatProps} />
      </div>
    });

    return <div>
      {list}
    </div>
  }
});
