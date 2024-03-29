import db from '../db/connection.js'
import Post from '../models/post.js'
import faker from 'faker'

const insertData = async () => {
  
  await db.dropDatabase()

  const posts = [...Array(100)].map(item => {
    return { title: faker.lorem.sentence(), img: faker.internet.url(), status: faker.lorem.paragraph(), author: faker.name.findName() }
  })

  await Post.insertMany(posts)
  console.log('Created Posts!')

  db.close()
}
insertData()