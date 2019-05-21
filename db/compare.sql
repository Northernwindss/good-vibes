select creator_id, comment_id from forum_index
where comment_id = ${comment_id}
AND creator_id = (
  select user_id from users
  where user_id = ${creator_id}
)

--  (
--   select user_id from users
--   where comment_id = ${comment_id}
--   AND comment_id = user_id
-- )
