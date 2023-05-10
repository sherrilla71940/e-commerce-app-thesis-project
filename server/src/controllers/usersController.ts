
const { User } = require('../models/usersModel')

export const getAllUsers = async (req, res) => {
  // console.log('testing');
  const allUsers = await User.findAll();
  console.log(allUsers)
  res.json(allUsers)
}

export const postOneUser = async (req, res) => {
  console.log('testing user - POST')
  try {
    const oneUser = await User.create(req.body);
    console.log(oneUser)
    res.json(oneUser)
  } catch (error) {
    console.log('post one transaction', error)
  }

}