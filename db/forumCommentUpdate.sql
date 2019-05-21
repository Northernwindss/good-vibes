insert into forum_index(
comment_id,
thread_id,
user_forum_name,
comment,
creator_id
)values(
${comment_id},
${thread_id},
${user_forum_name},
${comment},
${creator_id}
) where comment_id = ${comment_id}
returning *