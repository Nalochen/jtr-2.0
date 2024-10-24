INSERT IGNORE INTO teams (
    name,
    logo,
    founded,
    city,
    training_time,
    about_us,
    contacts,
    is_mix_team,
    last_tournament_played,
    last_tournament_organized,
    created_at,
    updated_at
) VALUES (
    'Team Alpha',
    'https://example.com/logo.png',
    '2010-05-15 12:00:00',
    'Hamburg',
    'Mon, Wed, Fri 18:00 - 20:00',
    'A dedicated team with a passion for the sport.',
    '["contact1@example.com", "contact2@example.com"]',
    TRUE,
    '2023-06-01 10:00:00',
    '2024-01-15 14:00:00',
    NOW(),
    NOW()
);
