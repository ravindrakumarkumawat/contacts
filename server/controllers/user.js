const User = require("../models/user")

const getUsers = async (req, res) => {
  try {
    const users = await User.find()

    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const addUser = async (req, res) => {
  try {
    const { fullName, email, phone, company, address } = req.body

    const user = await User.create({ 
      fullName, email, phone, company, address
    })

    res.status(200).json(user)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params

    const { fullName, email, phone, company, address } = req.body

    const user = await User.findOneAndUpdate({ 
        _id: id 
      },
      { 
        fullName, email, phone, company, address
      },
      { 
        new: true 
      }
    )


    if (!user) {
      return res.status(404).json({ error: "The User doesnt exist" })
    }

    res.status(200).json({ _id: id, fullName, email, phone, company, address })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    const del = await User.findOneAndDelete({ _id: id })

    if (!del) {
      return res.status(404).json({ error: "The User does not exists" })
    }
    
    res.status(200).json({ deleted: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
}
