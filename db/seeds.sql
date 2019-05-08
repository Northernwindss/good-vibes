-- create table user_profile(
-- profile_id serial primary key,
-- profile_picture text,
-- profile_name varchar,
-- profile_bio text)


-- colton seed

-- insert into user_profile(
-- profile_id,
-- profile_picture,
-- profile_name,
-- profile_bio
-- )values(
-- ${profile_id},
-- 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/29441_1454837328981_5612590_n.jpg?_nc_cat=107&_nc_ht=scontent-lax3-2.xx&oh=791e0659ded6990a5c45b027fce25ed6&oe=5D6BD214',
-- 'Colton Freeze',
-- ' stuff and things about the coolest person ever in the wholeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee world.'
-- )



-- select * from user_profile
-- where
-- profile_id = 1



-- my profile stuff
-- { profile_id: 1,
--     profile_picture:
--      'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/29441_1454837328981_5612590_n.jpg?_nc_cat=107&_nc_ht=scontent-lax3-2.xx&oh=791e0659ded6990a5c45b027fce25ed6&oe=5D6BD214',    profile_name: 'Colton Freeze',    profile_bio:
--      ' stuff and things about the coolest person ever in the wholeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee world.',    user_id: 1,
--     username: 'freeze',    password:     '$2a$10$x4G9O5b.gQeeXHhhRKxdKu.t/2Myb5Fek.9eEODPoAdIOdcTtTsyK' }




-- select profile_id
-- from user_profile 
-- join users on user_profile.profile_id = users.user_id



-- insert into user_profile(
-- profile_picture,
-- profile_name,
-- profile_bio
-- )values(
-- 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/22528307_10212754582033454_3297098877250745852_n.jpg?_nc_cat=110&_nc_ht=scontent-lax3-2.xx&oh=c927b2a2364e2afd97b964a9ccb50f84&oe=5D2E7F5F',
-- 'Xan Ostler',
-- 'Break Coltons site'
-- )