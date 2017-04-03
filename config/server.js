const restify = require('restify');
const consign = require('consign');

const server = restify.createServer();

server.use(restify.CORS());
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    return next();
});

server.use(restify.bodyParser());
server.use(restify.queryParser());
server.use(restify.jsonp());

//Load resources for application
consign()
    .include('api/routes')
    .then('config/db.js')
    .then('api/models')
    .then('api/controllers')
    .into(server);

module.exports = server;