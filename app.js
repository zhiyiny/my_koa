const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
//  var sqldb = require('./sqldb');
//
//
// //  连接数据库
// sqldb.sequelize.sync({force: false}).then(function() {
//   console.log("database start successed ");
// }).catch(function(err){
//   console.log("Server failed to start due to error: %s", err);
// });

const index = require('./routes/index');
const users = require('./routes/users');


// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});





router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());




app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;
