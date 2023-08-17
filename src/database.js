import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// db.json file path
let db;
const __dirname = dirname(fileURLToPath(import.meta.url))

export async function createConection() {
  const file = join(__dirname, 'db.json')
  // Configure lowdb to write data to JSON file
  const adapter = new JSONFile(file)
  const defaultData = { users: [] }
  db = new Low(adapter, defaultData)
  // Read data from JSON file, this will set db.data content
  // If JSON file doesn't exist, defaultData is used instead
  await db.read()
  // Create and query items using plain JavaScript
  db.data ||= {users: []}
  // Finally write db.data content to file
  await db.write()
}

export const getConnection = () => db;