
from Infrastructure.JTRFaker.fake import fake
from DataDomain.Database.Models.Tournaments import Tournaments
from DataDomain.Database.db import db


def generateFakeTournaments(n):
    for _ in range(n):
        tournament = Tournaments(
            name=fake.word(),
            date=fake.date(),
            address=fake.address(),
            shoes_text=fake.text(),
            shoes_url=fake.url(),
            studded_shoes_allowed=fake.boolean(),
            cam_shoes_allowed=fake.boolean(),
            cleats_shoes_allowed=fake.boolean(),
            barefoot_allowed=fake.boolean(),
            house_rules_text=fake.text(),
            house_rules_url=fake.url(),
            tournament_system_text=fake.text(),
            tournament_system_url=fake.url(),
            pompf_check_text=fake.text(),
            pompf_check_url=fake.url()
        )
        db.session.add(tournament)
    db.session.commit()
