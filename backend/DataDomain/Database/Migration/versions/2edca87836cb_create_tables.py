"""Create base tables

Revision ID: 2edca87836cb
Revises:
Create Date: 2024-11-19 12:41:37.434612

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2edca87836cb'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('teams',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('name', sa.String(length=100), nullable=False),
                    sa.Column('logo', sa.String(length=255), nullable=True),
                    sa.Column('founded', sa.DateTime(), nullable=True),
                    sa.Column('points', sa.Float(),
                              server_default='0', nullable=True),
                    sa.Column('city', sa.String(length=100), nullable=True),
                    sa.Column('training_time', sa.String(
                        length=100), nullable=True),
                    sa.Column('training_time_updated_at',
                              sa.DateTime(), nullable=True),
                    sa.Column('about_us', sa.String(
                        length=100), nullable=True),
                    sa.Column('contacts', sa.Text(), nullable=False),
                    sa.Column('is_mix_team', sa.Boolean(), nullable=True),
                    sa.Column('is_deleted', sa.Boolean(),
                              server_default='0', nullable=False),
                    sa.Column('created_at', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=False),
                    sa.Column('updated_at', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=False),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_table(
        'login_attempts',
        sa.Column(
            'id',
            sa.Integer(),
            nullable=False),
        sa.Column(
            'username',
            sa.String(
                length=100),
            nullable=False),
        sa.Column(
            'attempts',
            sa.Boolean(),
            server_default='1',
            nullable=False),
        sa.Column(
            'last_attempt',
            sa.DateTime(),
            server_default=sa.text('now()'),
            nullable=False),
        sa.PrimaryKeyConstraint('id'))
    op.create_table(
        'logs',
        sa.Column(
            'id',
            sa.Integer(),
            nullable=False),
        sa.Column(
            'logger_name',
            sa.String(
                length=100),
            nullable=False),
        sa.Column(
            'level',
            sa.String(
                length=20),
            nullable=False),
        sa.Column(
            'message',
            sa.String(
                length=255),
            nullable=False),
        sa.Column(
            'data',
            sa.JSON(),
            nullable=True),
        sa.Column(
            'created_at',
            sa.DateTime(),
            server_default=sa.text('now()')),
        sa.PrimaryKeyConstraint('id'))
    op.create_table('users',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('username', sa.String(
                        length=100), nullable=False),
                    sa.Column('password_hash', sa.String(
                        length=255), nullable=False),
                    sa.Column('email', sa.String(length=100), nullable=True),
                    sa.Column('name', sa.String(length=100), nullable=True),
                    sa.Column('name_visibility', sa.Boolean(), nullable=False),
                    sa.Column('birthdate', sa.Date(), nullable=True),
                    sa.Column('birthdate_visibility',
                              sa.Boolean(), nullable=False),
                    sa.Column('picture', sa.String(length=255), nullable=True),
                    sa.Column('pronoums', sa.String(
                        length=255), nullable=True),
                    sa.Column('city', sa.String(length=100), nullable=True),
                    sa.Column('city_visibility', sa.Boolean(), nullable=False),
                    sa.Column('is_deleted', sa.Boolean(),
                              server_default='0', nullable=False),
                    sa.Column('created_at', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=False),
                    sa.Column('updated_at', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=False),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('email'),
                    sa.UniqueConstraint('username')
                    )
    op.create_table(
        'is_part_of',
        sa.Column(
            'user_id',
            sa.Integer(),
            nullable=False),
        sa.Column(
            'team_id',
            sa.Integer(),
            nullable=False),
        sa.Column(
            'user_role',
            sa.Enum(
                'MEMBER',
                'ADMIN',
                'MODERATOR',
                name='userroletypesenum'),
            server_default='member',
            nullable=False
        ),
        sa.Column(
            'is_deleted',
            sa.Boolean(),
            server_default='0',
            nullable=False
        ),
        sa.Column(
            'created_at',
            sa.DateTime(),
            server_default=sa.text('now()'),
            nullable=True
        ),
        sa.ForeignKeyConstraint(
            ['team_id'],
            ['teams.id'],
        ),
        sa.ForeignKeyConstraint(
            ['user_id'],
            ['users.id'],
        ),
        sa.PrimaryKeyConstraint(
            'user_id',
            'team_id'
        )
    )
    op.create_table('tournaments',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('name', sa.String(length=100), nullable=False),
                    sa.Column('start_date', sa.DateTime(), nullable=False),
                    sa.Column('end_date', sa.DateTime(), nullable=False),
                    sa.Column('additional_information',
                              sa.Text(), nullable=False),
                    sa.Column('address', sa.String(
                        length=255), nullable=False),
                    sa.Column('possible_space', sa.Integer(), nullable=False),
                    sa.Column('start_arrival_date',
                              sa.DateTime(), nullable=False),
                    sa.Column('end_arrival_date',
                              sa.DateTime(), nullable=False),
                    sa.Column('registration_costs',
                              sa.Integer(), nullable=True),
                    sa.Column('registration_costs_type', sa.Enum('PER_PERSON', 'PER_TEAM',
                                                                 name='tournamentcosttypesenum'), nullable=True),
                    sa.Column('deposit_costs', sa.Integer(), nullable=True),
                    sa.Column('deposit_costs_type', sa.Enum('PER_PERSON', 'PER_TEAM',
                                                            name='tournamentcosttypesenum'), nullable=True),
                    sa.Column('accommodation_costs',
                              sa.Integer(), nullable=True),
                    sa.Column('accommodation_costs_type', sa.Enum('PER_PERSON', 'PER_TEAM',
                                                                  name='tournamentcosttypesenum'), nullable=True),
                    sa.Column('guest_costs', sa.Integer(), nullable=True),
                    sa.Column('guest_costs_type', sa.Enum('PER_PERSON', 'PER_TEAM',
                                                          name='tournamentcosttypesenum'), nullable=True),
                    sa.Column('costs_text',
                              sa.Text(), nullable=False, default=''),
                    sa.Column('status', sa.Enum('CREATED', 'PUBLISHED', 'CANCELED', 'OVER',
                                                name='tournamentstatustypesenum'), server_default='created', nullable=False),
                    sa.Column('contacts', sa.Text(), nullable=False),
                    sa.Column('accommodation_type', sa.Enum(
                        'CAMPING', 'GYM', 'HOTEL', 'NONE', name='tournamentaccommodationtypesenum'), nullable=False),
                    sa.Column('accommodation_location', sa.String(
                        length=255), nullable=False),
                    sa.Column('location', sa.String(
                        length=30), nullable=False),
                    sa.Column('deadlines', sa.Text(), nullable=False),
                    sa.Column('schedule', sa.Text(), nullable=True),
                    sa.Column('food_morning', sa.Enum(
                        'PROVIDED', 'NO', name='tournamentfoodmorningtypesenum'), nullable=False),
                    sa.Column('food_noon', sa.Enum(
                        'PROVIDED', 'SNACKS', 'NO', name='tournamentfoodnoontypesenum'), nullable=False),
                    sa.Column('food_evening', sa.Enum('PROVIDED', 'GRILL_AVAILABLE',
                                                      'NO', name='tournamentfoodeveningtypesenum'), nullable=False),
                    sa.Column('food_gastro', sa.Enum('ON_THE_COURSE', 'NEAR', 'FAR',
                                                     'NO', name='tournamentfoodgastrotypesenum'), nullable=False),
                    sa.Column('shoes_text', sa.Text(), nullable=False),
                    sa.Column('shoes_url', sa.String(
                        length=255), nullable=False),
                    sa.Column('studded_shoes_allowed',
                              sa.Boolean(), nullable=False),
                    sa.Column('cam_shoes_allowed',
                              sa.Boolean(), nullable=False),
                    sa.Column('cleats_shoes_allowed',
                              sa.Boolean(), nullable=False),
                    sa.Column('barefoot_allowed',
                              sa.Boolean(), nullable=False),
                    sa.Column('house_rules_text', sa.Text(), nullable=False),
                    sa.Column('house_rules_url', sa.String(
                        length=255), nullable=False),
                    sa.Column('tournament_system_text',
                              sa.Text(), nullable=False),
                    sa.Column('tournament_system_type', sa.Enum(
                        'TUGENY', name='tournamentsystemtypesenum'), nullable=False),
                    sa.Column('tournament_system_url', sa.String(
                        length=255), nullable=False),
                    sa.Column('pompf_check_text', sa.Text(), nullable=False),
                    sa.Column('pompf_check_url', sa.String(
                        length=255), nullable=False),
                    sa.Column('registration_procedure_text',
                              sa.Text(), nullable=True),
                    sa.Column('registration_procedure_type', sa.Enum(
                        'FIRST_COME', 'LOTS', 'OTHER', name='tournamentregistrationproceduretypesenum'), nullable=False),
                    sa.Column('registration_procedure_url',
                              sa.String(length=255), nullable=False),
                    sa.Column('registration_start_date', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=False),
                    sa.Column('is_deleted', sa.Boolean(),
                              server_default='0', nullable=False),
                    sa.Column('created_at', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=False),
                    sa.Column('updated_at', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=False),
                    sa.Column('organizer_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['organizer_id'], ['teams.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_table('participates_in',
                    sa.Column('created_at', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=True),
                    sa.Column('has_played', sa.Boolean(),
                              server_default='0', nullable=False),
                    sa.Column('is_deleted', sa.Boolean(),
                              server_default='0', nullable=False),
                    sa.Column('has_payed', sa.Boolean(),
                              server_default='0', nullable=False),
                    sa.Column('is_on_waiting_list',
                              sa.Boolean(), nullable=False),
                    sa.Column('placement', sa.Integer(), nullable=True),
                    sa.Column('registration_order',
                              sa.Integer(), nullable=False),
                    sa.Column('team_id', sa.Integer(), nullable=False),
                    sa.Column('tournament_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['team_id'], ['teams.id'], ),
                    sa.ForeignKeyConstraint(['tournament_id'],
                                            ['tournaments.id'], ),
                    sa.PrimaryKeyConstraint('tournament_id', 'team_id')
                    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('is_part_of')
    op.drop_table('login_attempts')
    op.drop_table('logs')
    op.drop_table('participates_in')
    op.drop_table('teams')
    op.drop_table('tournaments')
    op.drop_table('users')
    # ### end Alembic commands ###
