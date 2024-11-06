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
    'scrypt:32768:8:1$1zBx79UnutJvoemC$21b21a9f0c795f613b476b01691c862219a40520161d341b493324580ea50a2c3aa8a651e942bf4b9c391b94edb0026130f2476a9b6a4a5998e2accb5213b335',
    'maxi@gmail.de',
    'Max Pecu',
    '1990-01-01',
    'https://example.com/picture.png',
    NOW(),
    NOW()
);
