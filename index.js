const express = require('express')
const swagger = require('swagger-express-middleware')
const app = express()

swagger('PetStore.yaml', app, (_, middleware) => {
  app.use(
    middleware.CORS(),
    middleware.files(),
    middleware.metadata(),
    middleware.parseRequest(),
    middleware.validateRequest()
    // middleware.mock()
  )

  app.get('/pets', (req, res) => {
    res.send([
      {
        id: 59,
        name: 'Gaston',
        tag: 'cat'
      }
    ])
  })

  app.listen(8000)
})
