
update  forum_index
-- comment_id,
set
thread_id = ${thread_id},
user_forum_name= ${user_forum_name},
comment= ${comment},
creator_id= ${creator_id}

where comment_id = ${comment_id}
returning *;



-- )values(
-- -- ${comment_id},
-- ${thread_id},
-- ${user_forum_name},
-- ${comment}
-- )
-- -- select * from forum_index
-- --  where comment_id = ${comment_id}
-- returning *;