INSERT IGNORE INTO tournaments (
    name,
    start_date,
    end_date,
    additional_information,
    address,
    possible_space,
    arrival_time,
    costs_per_user,
    costs_per_team,
    status,
    contacts,
    accommodation_text,
    accommodation_type,
    location,
    deadlines,
    schedule,
    food_morning,
    food_noon,
    food_evening,
    food_gastro,
    shoes_text,
    shoes_url,
    studded_shoes_allowed,
    cam_shoes_allowed,
    cleats_shoes_allowed,
    barefoot_allowed,
    house_rules_text,
    house_rules_url,
    tournament_system_text,
    tournament_system_type,
    tournament_system_url,
    pompf_check_text,
    pompf_check_url,
    registration_procedure_text,
    registration_procedure_type,
    registration_procedure_url,
    registration_open_at,
    created_at,
    updated_at,
    organizer_id
) VALUES (
    'Summer Tournament',
    '2024-12-01 10:00:00',
    '2024-12-02 18:00:00',
    'Please bring your own water bottle.',
    '123 Main St, Anytown, GER',
    10,
    '09:00',
    20,
    Null,
    'published',
    '["maxi@gmail.de"]',
    'Hotel ABC',
    'camping',
    'Anytown',
    '["Anmeldung bis 2024-12-15 an Mark","Bei Claudia das gewünschte Essen bis zum 1.1 angeben"]',
    'Anmeldung um 09:00 Uhr',
    'no',
    'snacks',
    'no',
    'on_the_course',
    'Players must wear appropriate shoes.',
    'https://example.com/shoes-info',
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    'Follow the house rules strictly.',
    'https://example.com/house-rules',
    'Standard tournament system.',
    'tugeny',
    'https://example.com/tournament-system',
    'Check-in required before the tournament.',
    'https://example.com/pompf-check',
    'First come, first served.',
    'first_come',
    'https://example.com/registration',
    NOW(),
    NOW(),
    NOW(),
    1
);
