INSERT IGNORE INTO tournaments (
    name,
    start_date,
    end_date,
    additional_information,
    costs_text,
    address,
    possible_space,
    start_arrival_date,
    end_arrival_date,
    registration_costs,
    registration_costs_type,
    status,
    contacts,
    accommodation_location,
    accommodation_type,
    location,
    deadlines,
    schedule,
    food_morning,
    food_noon,
    food_evening,
    food_gastro,
    shoes_text,
    studded_shoes_allowed,
    cam_shoes_allowed,
    cleats_shoes_allowed,
    barefoot_allowed,
    house_rules_text,
    house_rules_url,
    tournament_system_text,
    tournament_system_url,
    pompf_check_text,
    pompf_check_url,
    registration_procedure_text,
    registration_procedure_type,
    registration_start_date,
    organizer_id
) VALUES (
    'Pottpompfen mit Biss, für Mutige mit Zunder',
    '2025-01-07 10:00:00',
    '2025-01-08 18:00:00',
    'Abschlussturnier der Pottsblitze und Potthucken, die in Schul-AGs zusammen kommen und halbjährlich neu ausgeschrieben werden. Dies ist das Winterturnier. Das Pendant im Sommer ist "Der Pott erwacht" (Termin steht noch nicht fest)..',
    '',
    'Turnhalle der Maria Sybilla Merian - Gesamtschule, Lohackerstraße 9a, 44867 Bochum',
    16,
    '2025-01-07',
    '2025-01-08',
    20,
    'PER_TEAM',
    'published',
    '["maxi@gmail.de"]',
    'Hotel ABC',
    'camping',
    'Bochum',
    'Anmeldung bis 2024-12-15 an Mark, Bei Claudia das gewünschte Essen bis zum 1.1 angeben',
    'Anmeldung um 09:00 Uhr',
    'no',
    'snacks',
    'no',
    'on_the_course',
    'Players must wear appropriate shoes.',
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    'Follow the house rules strictly.',
    'https://example.com/house-rules',
    'Standard tournament system.',
    'https://example.com/tournament-system',
    'Check-in required before the tournament.',
    'https://example.com/pompf-check',
    'First come, first served.',
    'first_come',
    NOW(),
    1
),
       (
    'Summer Tournament',
    '2025-02-01 10:00:00',
    '2025-02-02 18:00:00',
    'Please bring your own water bottle.',
    '',
    '123 Main St, Anytown, GER',
    10,
    '2025-11-28',
    '2025-12-03',
    20,
    'PER_PERSON',
    'published',
    '["maxi@gmail.de"]',
    'Hotel ABC',
    'camping',
    'Anytown',
    'Anmeldung bis 2024-12-15 an Mark, Bei Claudia das gewünschte Essen bis zum 1.1 angeben',
    'Anmeldung um 09:00 Uhr',
    'no',
    'snacks',
    'no',
    'on_the_course',
    'Players must wear appropriate shoes.',
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    'Follow the house rules strictly.',
    'https://example.com/house-rules',
    'Standard tournament system.',
    'https://example.com/tournament-system',
    'Check-in required before the tournament.',
    'https://example.com/pompf-check',
    'First come, first served.',
    'first_come',
    NOW(),
    2
),
       (
    'Summer Tournament',
    '2025-02-18 10:00:00',
    '2025-02-19 18:00:00',
    'Please bring your own water bottle.',
    '',
    '123 Main St, Anytown, GER',
    10,
    '2025-11-28',
    '2025-12-03',
    20,
    'PER_PERSON',
    'published',
    '["maxi@gmail.de"]',
    'Hotel ABC',
    'camping',
    'Anytown',
    'Anmeldung bis 2024-12-15 an Mark, Bei Claudia das gewünschte Essen bis zum 1.1 angeben',
    'Anmeldung um 09:00 Uhr',
    'no',
    'snacks',
    'no',
    'on_the_course',
    'Players must wear appropriate shoes.',
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    'Follow the house rules strictly.',
    'https://example.com/house-rules',
    'Standard tournament system.',
    'https://example.com/tournament-system',
    'Check-in required before the tournament.',
    'https://example.com/pompf-check',
    'First come, first served.',
    'first_come',
    NOW(),
    3
),
       (
    'Summer Tournament',
    '2024-12-01 10:00:00',
    '2024-12-02 18:00:00',
    'Please bring your own water bottle.',
    '',
    '123 Main St, Anytown, GER',
    10,
    '2025-11-28',
    '2025-12-03',
    20,
    'PER_PERSON',
    'published',
    '["maxi@gmail.de"]',
    'Hotel ABC',
    'camping',
    'Anytown',
    'Anmeldung bis 2024-12-15 an Mark, Bei Claudia das gewünschte Essen bis zum 1.1 angeben',
    'Anmeldung um 09:00 Uhr',
    'no',
    'snacks',
    'no',
    'on_the_course',
    'Players must wear appropriate shoes.',
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    'Follow the house rules strictly.',
    'https://example.com/house-rules',
    'Standard tournament system.',
    'https://example.com/tournament-system',
    'Check-in required before the tournament.',
    'https://example.com/pompf-check',
    'First come, first served.',
    'first_come',
    NOW(),
    4
),
       (
    'Summer Tournament',
    '2024-12-01 10:00:00',
    '2024-12-01 18:00:00',
    'Please bring your own water bottle.',
    '',
    '123 Main St, Anytown, GER',
    10,
    '2025-11-28',
    '2025-12-03',
    20,
    'PER_PERSON',
    'published',
    '["maxi@gmail.de"]',
    'Hotel ABC',
    'camping',
    'Anytown',
    'Anmeldung bis 2024-12-15 an Mark, Bei Claudia das gewünschte Essen bis zum 1.1 angeben',
    'Anmeldung um 09:00 Uhr',
    'no',
    'snacks',
    'no',
    'on_the_course',
    'Players must wear appropriate shoes.',
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    'Follow the house rules strictly.',
    'https://example.com/house-rules',
    'Standard tournament system.',
    'https://example.com/tournament-system',
    'Check-in required before the tournament.',
    'https://example.com/pompf-check',
    'First come, first served.',
    'first_come',
    NOW(),
    5
),
       (
    'Summer Tournament',
    '2025-03-01 10:00:00',
    '2025-03-01 18:00:00',
    'Please bring your own water bottle.',
    '',
    '123 Main St, Anytown, GER',
    10,
    '2025-11-28',
    '2025-12-03',
    20,
    'PER_PERSON',
    'published',
    '["maxi@gmail.de"]',
    'Hotel ABC',
    'camping',
    'Anytown',
    'Anmeldung bis 2024-12-15 an Mark, Bei Claudia das gewünschte Essen bis zum 1.1 angeben',
    'Anmeldung um 09:00 Uhr',
    'no',
    'snacks',
    'no',
    'on_the_course',
    'Players must wear appropriate shoes.',
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    'Follow the house rules strictly.',
    'https://example.com/house-rules',
    'Standard tournament system.',
    'https://example.com/tournament-system',
    'Check-in required before the tournament.',
    'https://example.com/pompf-check',
    'First come, first served.',
    'first_come',
    NOW(),
    6
),
       (
    'Summer Tournament',
    '2025-01-01 10:00:00',
    '2025-01-02 18:00:00',
    'Please bring your own water bottle.',
    '',
    '123 Main St, Anytown, GER',
    10,
    '2025-11-28',
    '2025-12-03',
    20,
    'PER_PERSON',
    'published',
    '["maxi@gmail.de"]',
    'Hotel ABC',
    'camping',
    'Anytown',
    'Anmeldung bis 2024-12-15 an Mark, Bei Claudia das gewünschte Essen bis zum 1.1 angeben',
    'Anmeldung um 09:00 Uhr',
    'no',
    'snacks',
    'no',
    'on_the_course',
    'Players must wear appropriate shoes.',
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    'Follow the house rules strictly.',
    'https://example.com/house-rules',
    'Standard tournament system.',
    'https://example.com/tournament-system',
    'Check-in required before the tournament.',
    'https://example.com/pompf-check',
    'First come, first served.',
    'first_come',
    NOW(),
    1
),
       (
    'Summer Tournament',
    '2025-01-01 10:00:00',
    '2025-01-02 18:00:00',
    'Please bring your own water bottle.',
    '',
    '123 Main St, Anytown, GER',
    10,
    '2025-11-28',
    '2025-12-03',
    20,
    'PER_PERSON',
    'published',
    '["maxi@gmail.de"]',
    'Hotel ABC',
    'camping',
    'Anytown',
    'Anmeldung bis 2024-12-15 an Mark, Bei Claudia das gewünschte Essen bis zum 1.1 angeben',
    'Anmeldung um 09:00 Uhr',
    'no',
    'snacks',
    'no',
    'on_the_course',
    'Players must wear appropriate shoes.',
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    'Follow the house rules strictly.',
    'https://example.com/house-rules',
    'Standard tournament system.',
    'https://example.com/tournament-system',
    'Check-in required before the tournament.',
    'https://example.com/pompf-check',
    'First come, first served.',
    'first_come',
    NOW(),
    1
),
       (
    'Summer Tournament',
    '2025-01-01 10:00:00',
    '2025-01-02 18:00:00',
    'Please bring your own water bottle.',
    '',
    '123 Main St, Anytown, GER',
    10,
    '2025-11-28',
    '2025-12-03',
    20,
    'PER_PERSON',
    'published',
    '["maxi@gmail.de"]',
    'Hotel ABC',
    'camping',
    'Anytown',
    'Anmeldung bis 2024-12-15 an Mark, Bei Claudia das gewünschte Essen bis zum 1.1 angeben',
    'Anmeldung um 09:00 Uhr',
    'no',
    'snacks',
    'no',
    'on_the_course',
    'Players must wear appropriate shoes.',
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    'Follow the house rules strictly.',
    'https://example.com/house-rules',
    'Standard tournament system.',
    'https://example.com/tournament-system',
    'Check-in required before the tournament.',
    'https://example.com/pompf-check',
    'First come, first served.',
    'first_come',
    NOW(),
    1
),
       (
    'Summer Tournament',
    '2025-01-01 10:00:00',
    '2025-01-02 18:00:00',
    'Please bring your own water bottle.',
    '',
    '123 Main St, Anytown, GER',
    10,
    '2025-11-28',
    '2025-12-03',
    20,
    'PER_PERSON',
    'published',
    '["maxi@gmail.de"]',
    'Hotel ABC',
    'camping',
    'Anytown',
    'Anmeldung bis 2024-12-15 an Mark, Bei Claudia das gewünschte Essen bis zum 1.1 angeben',
    'Anmeldung um 09:00 Uhr',
    'no',
    'snacks',
    'no',
    'on_the_course',
    'Players must wear appropriate shoes.',
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    'Follow the house rules strictly.',
    'https://example.com/house-rules',
    'Standard tournament system.',
    'https://example.com/tournament-system',
    'Check-in required before the tournament.',
    'https://example.com/pompf-check',
    'First come, first served.',
    'first_come',
    NOW(),
    1
);
