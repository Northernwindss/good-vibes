module.exports = {
  profile: async (req, res) => {
    let profile_id = req.params.id
    console.log(123123123123, 'profile in pctrl', req.params.id)
    const db = req.app.get(`db`)
    let res1 = await db.joinUserAndProfile({
      profile_id
    })
    console.log(3333, 'profiilectrl', res1)
    res.status(200).send(res1)
  },
  updateUserProfile: async (req, res) => {
    console.log(565656, 'updateprof pctrl')
    const db = req.app.get('db')
    const { session } = req
    let { proflie_picture, profile_name, profile_bio } = req.body
    let profileInfo = await db.updateUserProfile({
      proflie_picture,
      profile_name,
      profile_bio
    })
    if (profileInfo !== 0) {
      return res.sendStatus(409)
    }

    // profile_picture = " ",
    //   profile_name = " ",
    //   profile_bio = " "
  },


}