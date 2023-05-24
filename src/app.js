import express from 'express'
import routes from './routes/index.js'

const app = express()

//configs
app.set('port', process.env.PORT || 8080)
app.set('json spaces', 2)

// Add headers before the routes are defined
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3003')

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true)

	// Pass to next layer of middleware
	next()
})

app.use(routes)



app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`)
})