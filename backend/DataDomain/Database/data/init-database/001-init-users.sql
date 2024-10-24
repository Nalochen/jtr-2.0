INSERT IGNORE INTO users (
    username,
    password_hash,
    email,
    name,
    birthday,
    picture,
    created_at,
    updated_at
) VALUES (
    'Maxi',
    'random password hash',
    'maxi@gmail.de',
    'Max Pecu',
    '1990-01-01',
    'https://example.com/picture.png',
    NOW(),
    NOW()
);
