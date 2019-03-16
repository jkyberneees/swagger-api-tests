const express = require('express')
const swagger = require('swagger-express-middleware')
const app = express()
const router = express.Router()

swagger('PetStore.yaml', app, (_, middleware) => {
  app.use(
    middleware.CORS(),
    middleware.files(),
    middleware.metadata(),
    middleware.parseRequest(),
    middleware.validateRequest()
    // middleware.mock()
  )

  router.get('/pets', (req, res) => {
    res.send([
      {
        id: 59,
        name: 'Gaston',
        tag: 'cat'
      }
    ])
  })
  app.use('/api', router)

  app.listen(8000)
})
