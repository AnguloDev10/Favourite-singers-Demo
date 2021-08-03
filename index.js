//Loads the express module
const express = require('express');
const app = express();
const port = 8000;
const handlebars= require('express-handlebars')

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planb',
    partialsDir: __dirname + '/views/partials/'
}));

//Server static files 
app.use(express.static('public'))

fakeApi = () => 'Faker';
fakeApi = () => {
    return [
      {
        name: 'Katarina',
        lane: 'midlaner'
      },
      {
        name: 'Jayce',
        lane: 'toplaner'
      },
      {
        name: 'Heimerdinger',
        lane: 'toplaner'
      },
      {
        name: 'Zed',
        lane: 'midlaner'
      },
      {
        name: 'Azir',
        lane: 'midlaner'
      }
    ];
}
app.get('/', (req, res) => {
    res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
});
    
app.listen(port,()=> console.log(__dirname));