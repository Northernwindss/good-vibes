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
    const { comment_id, thread_id, user_forum_name, comment } = req.body;
    let res1 = await db.forumCreateThread({
      comment_id,
      thread_id,
      user_forum_name,
      comment
    }).then(res1 => {
      console.log('f-update response', res1)
      res.status(200).send(res1)
    })
  }

}