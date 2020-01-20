var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

app.use(express.json())

var table_values = {
        'title': 'Resumen del año',
        'table': {
          'heads': ['Meses', 'Valores'],
          'rows':[
            ['Enero', '12'],
            ['Febrero', '14'],
            ['Marzo', '15']
          ]
        }
      }

app.get('/get_table_values', function (req, res) {
  res.json(table_values);
  console.log('table_values sended');
});

app.post('/set_table_values', function (req, res) {
  res.send('ok');
  table_values.table.rows.push([req.body.month, req.body.value])
});


app.listen(8000, function () {
  console.log('//-----------------------//');
  console.log('Server for testing');
  console.log('Listening on port 8000!');
  console.log('//-----------------------//');
  console.log('http://localhost:8000/get_table_values');
  console.log('http://localhost:8000/set_table_values');
});