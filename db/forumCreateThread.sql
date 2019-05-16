insert into forum_index(
-- comment_id,
thread_id,
user_forum_name,
comment
)values(
-- ${comment_id},
${thread_id},
${user_forum_name},
${comment}
) returning*;
-- where
