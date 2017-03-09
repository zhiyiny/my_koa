/**
 *    用户路由   f放弃掉
 */
var router = require('koa-router')();

var user_controller = require('../app/controllers/user_controller');
router.get('/', function (ctx, next) {

  //const name = ctx.query;
  console.log(ctx.query.name);
  console.log(ctx);
  ctx.body = ctx;
  //ctx.body = '11111n'
});
router.get('/get', user_controller.getUser);
router.get('/register', user_controller.registerUser);
router.get('/add', user_controller.addUser);

module.exports = router;