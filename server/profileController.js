module.exports = {
  profile: async (req, res) => {
    let profile_id = req.params.id
    console.log(123123123123, 'profile in pctrl', req.params.id)
    const db = req.app.get(`db`)
    let res1 = await db.joinUserAndProfile({
      profile_id
    })
    console.log(3333, 'profilectrl', res1)
    res.status(200).send(res1)
  },
  updateProfileInfo: (req, res) => {
    console.log('updateProfInfo rctrl', req.body)
    const db = req.app.get('db')
    const { profile_id, profile_picture, profile_name, profile_bio } = req.body;
    let response = db.updateProfileInfo({
      profile_id,
      profile_picture,
      profile_name,
      profile_bio
    }).then(response => {
      console.log('update222Profile pctrl', response)
      res.status(200).send(response)
    })
  },
  // deleteProfileInfo: (req, res) => {
  //   console.log('delete working on pctrl')
  //   const db = req.app.get(`db`)
  //   const { profile_id, profile_picture, profile_name, profile_bio } = req.body;
  //   let res3 = db.updateProfileInfo({
  //     profile_id,
  //     profile_picture,
  //     profile_name,
  //     profile_bio
  //   })
  //   console.log('deleteProfile pctrl', res3)
  //   res.status(200).send(res3)
  // }

}
