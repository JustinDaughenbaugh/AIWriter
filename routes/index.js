express = require('express');
app = express();

response = require('./routes/response.js');

app.set("view engine", "ejs");
app.set(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));


app.use("/response", response);

app.get('/', function(req, res) {
  res.render('base');
}
);

app.listen(3000);
