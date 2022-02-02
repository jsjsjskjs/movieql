import { getById, people } from './db'

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(String(id))
  }
}

export default resolvers
