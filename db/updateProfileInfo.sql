update user_profile
set
profile_picture = ${profile_picture},
profile_name = ${profile_name},
profile_bio = ${profile_bio}

where profile_id = ${profile_id}
returning *;