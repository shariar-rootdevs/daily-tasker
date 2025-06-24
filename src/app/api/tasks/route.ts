// import fs from 'fs/promises'
// import { NextResponse } from 'next/server'
// import path from 'path'
// import { Task } from '../../../../types/task'

// export async function GET() {
//   try {
//     const filePath = path.join(process.cwd(), 'db.json')
//     const jsonData = await fs.readFile(filePath, 'utf-8')
//     const data: Task[] = JSON.parse(jsonData)
//     return NextResponse.json(data)
//   } catch (error) {
//     console.error('Error loading tasks:', error)
//     return NextResponse.json(
//       {
//         error: 'Failed to load tasks',
//       },
//       { status: 500 }
//     )
//   }
// }
