# Database

### Create new migration
```bash
flask db migrate -m "<name>"
```

### Apply migration
```bash
flask db upgrade
```

### Rollback migration
```bash
flask db downgrade
```
