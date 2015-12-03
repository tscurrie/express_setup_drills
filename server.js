var express = require('express');
var app = express();
app.use(express.static('public'));

 var albums = [
    { 
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ];

app.get('/', function (req, res){
	res.send('hello world!');
});

app.get('/api/albums', function (req, res){
	res.json(albums);
});

app.listen(process.env.port||3000, function(){
	console.log('example');
});