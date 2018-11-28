// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
// Set Handlebars.
app.engine('handlebars', exphbs ({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controllers');
app.use('/', routes);

var PORT = process.env.PORT || 8080;
// Start our server so that it can begin listening to client requests
app.listen(PORT, function(){
    // Log in console when & where server has been started
    console.log("Server listening on Localhost:" + PORT);
});