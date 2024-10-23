INSERT IGNORE INTO is_part_of (
    user_id,
    team_id,
    user_role,
    created_at
) VALUES (
     1,
     1,
     'admin',
     NOW()
 );