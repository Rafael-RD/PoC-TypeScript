# PoC-TypeScript

GET: /tasks
Retorn a array of all tasks

POST: /tasks
```json
BODY: { "name": "Clean", "description": "Clean my house", "date": "2023-07-20", "resposible": "Josh" }
```
PATCH: /task/:id
```json
BODY: { "completed": true }
```
PATCH: /task/68


DELETE: /task/:id

DELETE: /task/50
