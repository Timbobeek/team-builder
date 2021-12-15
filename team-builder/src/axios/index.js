import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialMembersList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Intern',
  },
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Vasya',
    email: 'vasya@pupkin.com',
    role: 'Intern',
  },
]

// 👉 simulating axios for [GET] and [POST]
const axios = {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialMembersList })
  },
  post(url, { username, email, role }) {
    const newMember = { id: uuid(), username, email, role }
    return Promise.resolve({ status: 200, success: true, data: newMember })
  }
}

export default axios;