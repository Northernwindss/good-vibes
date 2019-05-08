insert into users
(username, password)
values(
${username},
${hash}
);
-- returning *;

insert into user_profile 
(
profile_id
  -- profile_picture,
  -- profile_name,
  -- profile_bio
)values(
-- ${profile_id}
(select user_id from users where username = ${username})
  -- ${profile_picture},
  -- ${profile_name},
  -- ${profile_bio}
);

-- select * from user_profile
-- join users on users_profile_id = users.user_id
-- where users.username = ${username}




















-- create table user_login(
--   id serial primary key,
--   username varchar,
--   password varchar
-- )values(
--   ${id},
--   ${username},
--   ${hash}
-- )