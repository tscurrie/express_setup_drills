var express = require('express');
var app = express();
app.use(express.static('public'));

var dinosaur = [
	{ 
      title: 'Raptor',
      artist: 'carnivore'
    },
    {
      title: 'triceratops',
      artist: 'herbivore'
    },
    {
      title: 'tyrannosaurus Rex',
      artist: 'carnivore'
    }
];



app.get('/', function (req, res){
	res.send('hello world!');
});

app.listen(3001);


