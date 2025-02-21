# Worker

## Run worker task from cli

```bash
. venv/bin/activate

celery -A worker.tasks call calculate_team_scores_task
```
