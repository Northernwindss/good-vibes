module.exports = {
  forumGetAllThreads: (req, res) => {
    const db = req.app.get(`db`)
    db.forumGetAllThreads().then((data) => {
      res.status(200).send(data)
    })
  },
  forumCreateThread: async (req, res) => {
    console.log('f-update-thread-comment', req.body)
    const db = req.app.get(`db`)
    const { comment_id, thread_id, user_forum_name, comment, creator_id } = req.body;
    let res1 = await db.forumCreateThread({
      comment_id,
      thread_id,
      user_forum_name,
      comment,
      creator_id
    }).then(res1 => {
      console.log('f-update response', res1)
      res.status(200).send(res1)
    })
  },
  forumUpdateThreadComment: (req, res) => {
    console.log('formUpdateThread1111 fctrl', req.body)
    const db = req.app.get('db')
    const { comment_id,
      thread_id,
      user_forum_name,
      comment, creator_id } = req.body;
    // if(asdfasdf is true then run that)
    db.compare({ comment_id, creator_id }).then(dbRes => {
      console.log(`userdelete @fCtrl`, dbRes)
      if (dbRes.length != 0) {
        return db.forumUpdateThreadComment({
          comment_id,
          thread_id,
          user_forum_name,
          comment,
          creator_id
        })
      } else {
        res.send('not your post')
      }
    }).then(response => {
      if (response) {
        res.status(200).send(response)
      }
    })

  },
  forumDeleteThreadComment: (req, res) => {
    console.log(`forumDeleteThread11111 @ fctrl`, req.params)
    const db = req.app.get(`db`)
    const { id, thread_id, user_forum_name, comment } = req.params;
    // if (db.compare === false) {
    //   return res.status(401).send(`not your post`)
    // }
    db.forumDeleteThreadComment({
      // comment_id,
      id
      // thread_id,
      // user_forum_name,
      // comment
    }).then(response => {
      console.log(`forumDeleteThread2222 @ fctrl`, response)
      res.status(200).send(response)
    })

  }
}