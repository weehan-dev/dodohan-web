const express = require('express')
const loaders = require('./loaders')

const app = express()

;(async function startApp(app) {
  await loaders(app)
  app.listen(app.get('port'), () => {
    console.log('서버 작동 중')
  })
})(app)
