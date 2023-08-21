import Database from 'better-sqlite3'

export const db = new Database('documents.db', {verbose: console.log})

const creation_string = `
  CREATE TABLE IF NOT EXISTS documents(
  id INTEGER PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(100),
  contents TEXT NOT NULL,
  restrict_to INTEGER DEFAULT -500,
  created_at TEXT DEFAULT CURRENT_DATE,
  updated_at TEXT DEFAULT CURRENT_DATE
);`

db.exec(creation_string)

// npm install better-sqlite3
// create file structure lib/server/db/index.js
// line 1 and line 3