var router = require('koa-router')();
var user_router = require('./user_router');

router.get('/', async function (ctx, next) {
  const title = ctx.request.name;
  ctx.state = {
    title: 'title'
  };
 /* await ctx.render('index', {
  });*/
  await ctx.redirect('./index')
})
router.use('/users', user_router.routes(), user_router.allowedMethods());

module.exports = router;


