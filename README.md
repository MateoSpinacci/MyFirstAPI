# Games REST API

My first REST API built with Node.js and Express to practice backend development concepts and REST architecture.

## Features

- Get all games
- Get a game by ID
- Create a new game
- Update a game with PATCH
- Delete a game

## Technologies

- Node.js
- Express.js

## Project Structure

```text
src/
├── config/
├── controllers/
├── models/
├── repositories/
├── services/
└── app.js
```

## API Endpoints

### Get all games

```http
GET /games
```

---

### Get game by ID

```http
GET /games/:id
```

Example:

```http
GET /games/1
```

---

### Create a new game

```http
POST /games
```

Body example:

```json
{
  "title": "Elden Ring",
  "genre": "RPG"
}
```

---

### Update a game

```http
PATCH /games/:id
```

Body example:

```json
{
  "finished": true
}
```

---

### Delete a game

```http
DELETE /games/:id
```

## How to Run

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node src/app.js
```

The API will run on:

```text
http://localhost:3000
```

## Notes

This is a learning project created to understand:
- REST APIs
- Express
- HTTP methods
- Controllers, Services and Repositories
- Request/Response flow
- Basic backend architecture
