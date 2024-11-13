INSERT IGNORE INTO teams (
    name,
    logo,
    founded,
    points,
    city,
    training_time,
    about_us,
    contacts,
    is_mix_team,
    training_time_updated_at
) VALUES (
    'Team Alpha',
    'https://example.com/logo.png',
    '2010-05-15 12:00:00',
    100,
    'Hamburg',
    'Jeden 2. Freitag um 18:00 - 20:00',
    'A dedicated team with a passion for the sport.',
    '["contact1@example.com","contact2@example.com","12345647"]',
    TRUE,
    '2023-06-01 10:00:00'
);
