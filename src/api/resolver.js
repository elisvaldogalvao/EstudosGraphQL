const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, { id }) {
            return await db('users').first({ id })
        },
        async getUsers(_, { id }) {
            return await db('users')
        },
    },
    Mtation:{
        async createUser(_, { input }) {
            const result = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })
            const id = result[0]
            return await db('users').first({ id })
        },
    }
}