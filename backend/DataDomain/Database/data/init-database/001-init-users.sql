INSERT IGNORE INTO users (
    username,
    escaped_username,
    password_hash,
    email,
    name,
    name_visibility,
    birthdate,
    birthdate_visibility,
    picture,
    city,
    city_visibility
) VALUES (
    'Maxi',
    'maxi',
    'scrypt:32768:8:1$1zBx79UnutJvoemC$21b21a9f0c795f613b476b01691c862219a40520161d341b493324580ea50a2c3aa8a651e942bf4b9c391b94edb0026130f2476a9b6a4a5998e2accb5213b335',
    'maxi@gmail.de',
    'Max Pecu',
    True,
    '1990-01-01',
    False,
    'sheep-on-grass.jpg',
    'Berlin',
     True
),
(
'Nalochen',
'nalochen',
'scrypt:32768:8:1$1zBx79UnutJvoemC$21b21a9f0c795f613b476b01691c862219a40520161d341b493324580ea50a2c3aa8a651e942bf4b9c391b94edb0026130f2476a9b6a4a5998e2accb5213b335',
'unger.juli@gmx.de',
'Nalo Unger',
True,
'1990-01-01',
True,
'lundy_sheep.jpeg',
'Hamburg',
True
),
(
'Jonas K',
'jonas',
'scrypt:32768:8:1$1zBx79UnutJvoemC$21b21a9f0c795f613b476b01691c862219a40520161d341b493324580ea50a2c3aa8a651e942bf4b9c391b94edb0026130f2476a9b6a4a5998e2accb5213b335',
'jonas@gmail.de',
'Jonas Kopka',
False,
'1990-01-01',
False,
'Sheep-Desktop-Wallpaper.jpg',
'Berlin',
False
),
(
'Lynkiboy Godfather of Zahnradschild',
'lynkiboy',
'scrypt:32768:8:1$1zBx79UnutJvoemC$21b21a9f0c795f613b476b01691c862219a40520161d341b493324580ea50a2c3aa8a651e942bf4b9c391b94edb0026130f2476a9b6a4a5998e2accb5213b335',
'lynkiboy@gmail.de',
'Lynk',
False,
'1990-01-01',
False,
'sheep-on-grass.jpg',
'Gießen',
True
),
(
'Gabo! Gabo! Gabo!',
'gabo',
'scrypt:32768:8:1$1zBx79UnutJvoemC$21b21a9f0c795f613b476b01691c862219a40520161d341b493324580ea50a2c3aa8a651e942bf4b9c391b94edb0026130f2476a9b6a4a5998e2accb5213b335',
'gabo@gmail.de',
'Gabo',
False,
'1990-01-01',
True,
'lundy_sheep.jpeg',
'München',
False
),
(
'Q-Till',
'till',
'scrypt:32768:8:1$1zBx79UnutJvoemC$21b21a9f0c795f613b476b01691c862219a40520161d341b493324580ea50a2c3aa8a651e942bf4b9c391b94edb0026130f2476a9b6a4a5998e2accb5213b335',
'till@gmail.de',
'Till',
True,
'1990-01-01',
False,
'Sheep-Desktop-Wallpaper.jpg',
'Leipzig',
True
);
