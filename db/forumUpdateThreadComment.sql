
update forum_index(
comment_id,
thread_id,
user_forum_name,
comment
)values(
${comment_id},
${thread_id},
${user_forum_name},
${comment}
)
 where comment_id = ${comment_id}
returing *;