// import our db from better-sqlite3 (automatically assumes index.js)
import { db } from "$lib/server/db"

const addUser = () => {
   db.prepare(
    'INSERT INTO documents(title, author, contents) VALUES(@title, @author, @contents)'
    ).run(
      {title: "My first document", author: "Hal Helms", contents: "This truly is my <strong>first document</strong>"}
    )
}

const allDocs = () => {
  const documents = db.prepare("SELECT * FROM documents").all()
  return documents
}

export const load = async () => {
  // addUser()
  return {docs: allDocs()}
}