import { Outerbase, OuterbaseConnection } from '@outerbase/sdk'
import type { NextApiRequest, NextApiResponse } from 'next'

const connection: OuterbaseConnection = new OuterbaseConnection({
  apiKey: process.env.NEXT_PUBLIC_OB_API_KEY || '',
})

export const db = Outerbase(connection)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const formData = await req.body
    const email = formData.email

    const { data, error } = await db
      .insert({ email: email })
      .into('signups')
      .query()

    if (error) {
      console.error('Error inserting data:', error)
      return res.status(500).json({ error: 'Failed to insert data' })
    }

    // Use res.redirect for client redirection
    res.redirect(303, '/') // 307 preserves POST method
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
