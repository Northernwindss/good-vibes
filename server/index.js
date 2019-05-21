const express = require('express')
require('dotenv').config()
const app = express()
const massive = require('massive')
const session = require('express-session')
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env
const ctrl = require('./controller')
const pctrl = require('./profileController')
const fctrl = require('./fourmsController')

app.use(express.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
)
// make a get request that gets all the axios stuff on all the pages that you need it comp did mount saves it to state or the places that might need it "get user info end point"

massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
  console.log('database is not broken')
  app.listen(SERVER_PORT, () =>
    console.log(`breathe in breathe out ${SERVER_PORT}`)
  )
})
// loggin controllers
app.get('/api/users', ctrl.getUsers)
app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
app.get(`/auth/logout`, ctrl.logout)

// profile controllers
app.get(`/profile/:id`, pctrl.profile)
app.put(`/profile/:id`, pctrl.updateProfileInfo)
// app.put(`/profile/:id`, pctrl.deleteProfileInfo)

// forum controllers
app.get(`/forums/:id`, fctrl.forumGetAllThreads)
app.post(`/forums/:id`, fctrl.forumCreateThread)
app.put(`/forums/:id`, fctrl.forumUpdateThreadComment)
app.delete(`/forums/:id`, fctrl.forumDeleteThreadComment)
// app.get(`/forums/:id`, (req, res) => {
//   res.send(req.body)
// })



// use redux to save information of sessions

