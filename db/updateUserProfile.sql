-- insert into users
-- (username, password)
-- values(
-- ${username},
-- ${hash}
-- )returning *;



insert into user_profile 
(
  profile_picture,
  profile_name,
  profile_bio
)values(
  ${profile_picture},
  ${profile_name},
  ${profile_bio}
);

select * from user_profile
join users on users_profile_id = users.user_id
where users.username = ${username}







