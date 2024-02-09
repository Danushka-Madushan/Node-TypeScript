import { describe, it } from 'vitest'
import request from 'supertest'
import { app } from '../index.js';

const RouteConfig = {
	base: {
        name: 'Base Route',
        route: '/api'
    },
}

describe('Base Route', () => {
	it(RouteConfig.base.name, async () => {
		await request(app)
		.get(RouteConfig.base.route)
		.expect('Content-Type', /json/)
		.expect(200)
	})
})
