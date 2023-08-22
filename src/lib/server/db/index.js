import Database from 'better-sqlite3'
import { Document } from './document'

const database = new Database('models.db', {verbose: console.log})

export const models = {
  Document : new Document(database)
}
