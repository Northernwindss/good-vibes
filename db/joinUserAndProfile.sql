select *
from user_profile 
join users on user_profile.profile_id = users.user_id
where users.user_id = ${profile_id}