const bcrypt = require('bcryptjs');

module.exports = {
  getUsers: (req, res) => {
    const db = req.app.get(`db`)
    db.getAllUsers().then((data) => {
      res.status(200).send(data)
    })
  },
  register: async (req, res) => {
    const db = req.app.get('db')
    const { loginUsername: username, loginPassword: password } = req.body
    console.log(8787878, 'register in ctrl', username, password)
    const { session } = req
    let usernameTaken = await db.checkRegistered({ username })
    usernameTaken = usernameTaken.length
    // [0].count
    if (usernameTaken !== 0) {
      return res.sendStatus(409)
    }
    const salt = bcrypt.genSaltSync(10);
    console.log(444444, password, salt)
    const hash = bcrypt.hashSync(password, salt)
    const user_id = await db.registerUser({
      username,
      hash,

    })
    console.log(77777777, user_id)
    session.user = {
      username,
      hash,
      login_id: user_id[0]
    }
    res.sendStatus(200)
  },

  login: async (req, res) => {
    console.log(1111, 'login')
    const db = req.app.get(`db`)
    const { session } = req
    const { loginUsername: username } = req.body
    try {
      let user = await db.login({ username })
      session.user = user[0]
      const authenticated = bcrypt.compareSync(req.body.loginPassword, user[0].password)
      // console.log(user[0].password, bcrypt.hashSync(req.body.password, 10))
      console.log(user, 'in login controller')
      if (authenticated) {
        res.status(200).send({ authenticated, user_id: user[0].user_id })
      } else {
        throw new Error(401)
      }
    } catch (err) {
      console.log(err)
      res.sendStatus(401)
    }

  },
  logout: (req, res) => {
    const db = req.app.get(`db`)
    console.log(123456789, req.session.user, req.session)
    const { session } = req
    const { username } = session.user
    db.login({ username })
    // session.user = user[0]
    console.log(`logout @ ctrl`, req)
    req.session.destroy()
    res.sendStatus(200)
  }
}