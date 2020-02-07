/* eslint-disable no-undef */
import express, { Router } from 'express'
import { json, urlencoded } from 'body-parser'
import itemRouter from './resources/item/item.router'
import morgan from 'morgan'
import cors from 'cors'
export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api', router)
app.use('/api/item', itemRouter)

router.get('/me', (req, res) => {
  res.send({ me: 'harsh' })
})

const log = (req, res, next) => {
  console.log('logging')
  next()
}

app.get('/', (req, res) => {
  res.send({ message: 'hello' })
})
app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

app.get('/data', log, (req, res) => {
  res.send({ message: 'data hello' })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

export const start = () => {
  app.listen(27017, () => {
    console.log('sever is 4242')
  })
}
