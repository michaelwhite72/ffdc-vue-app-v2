"use strict";

var _interopRequireDefault = require("C:/Users/u725009/Desktop/FFDC Prototypes/ffdc-vue-app-v2/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

require("core-js/modules/es.array.join.js");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.static(_path.default.resolve(__dirname, '../../dist'), {
  maxAge: '1y',
  etag: false
}));
app.get('/api/login', function (req, res) {
  console.log('hit the point');
  res.status(200).send("Yeah Sure");
});
app.get('*', function (req, res) {
  res.sendFile(_path.default.join(__dirname, '../../dist/index.html'));
});
app.listen(process.env.PORT || 8000, function () {
  console.log("Server is listening on port ".concat(process.env.PORT));
});