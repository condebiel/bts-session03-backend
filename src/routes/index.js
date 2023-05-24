import { Router } from 'express'
import products from '../data/db.js'

const router = Router()

// root
router.get('/', (request, response) => {
	// key value object (json object)
	let person = {
		name: 'Biel v2',
		age: 30,
	}

	response.json(person)
})


router.get('/products', (request, response) => {
	response.json(products)
})

export default router