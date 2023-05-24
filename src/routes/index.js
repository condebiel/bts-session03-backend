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

router.get('/products/:category', (request, response) => {
	const { category } = request.params

	const filteredProducts = products.filter(function(product) {
		const productCategory = product.category.toLowerCase()
		const paramCategory = category.toLowerCase()
		return productCategory === paramCategory
	})

	response.json(filteredProducts)
})

export default router