/**
 *    用户路由
 */
var router = require('koa-router')();

var user_controller = require('../controllers/user_controller');
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
router.get('/delete', user_controller.deleteUser);
router.get('/find', user_controller.findUser);
router.get('/update', user_controller.updateUser);

module.exports = router;
