import "core-js/modules/es.array.join.js";
import express from 'express';
import path from 'path'; //import { AuthConfig as config, LOGIN_URL, TIMEOUT } from './config'
// import history from 'connect-history-api-fallback'

var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.resolve(__dirname, '../../dist'), {
  maxAge: '1y',
  etag: false
})); //app.use(history());

app.get('/api/login', function (req, res) {
  console.log('hit the point');
  res.status(200).send("Yeah Sure");
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});
app.listen(process.env.PORT || 8000, function () {
  console.log("Server is listening on port ".concat(process.env.PORT));
});