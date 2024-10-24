INSERT IGNORE INTO participates_in (
    tournament_id,
    team_id,
    placement,
    is_on_waiting_list,
    has_played,
    registration_order,
    created_at
) VALUES (
    1,
    1,
    3,
    FALSE,
    FALSE,
    1,
    NOW()
);
