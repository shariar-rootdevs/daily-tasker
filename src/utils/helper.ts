import fs from 'fs/promises'
import path from 'path'
import { DBStructure } from '../../types/register'

export const readDB = async (): Promise<DBStructure> => {
  const filePath = path.join(process.cwd(), 'db.json')
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data) as DBStructure
}

export const writeDb = async (data: DBStructure) => {
  const filePath = path.join(process.cwd(), 'db.json')
  await fs.writeFile(filePath, JSON.stringify(data, null, 2))
}
