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

    try {
      // Check if the email already exists in the 'signups' table
      const { data: existingEmails, error: fetchError } = await db
        .selectFrom([{ table: 'signups', columns: ['email'] }])
        .where(`email = '${email}'`)
        .query()

      if (fetchError) {
        console.error('Error fetching existing data:', fetchError)
        return res.status(500).json({ error: 'Failed to fetch data' })
      }

      // If email already exists, return early
      if (existingEmails.length > 0) {
        return res.status(400).json({ error: 'Email already registered' })
      }

      // Proceed with insertion if email is unique
      const { data, error } = await db
        .insert({ email: email })
        .into('signups')
        .query()

      if (error) {
        console.error('Error inserting data:', error)
        return res.status(500).json({ error: 'Failed to insert data' })
      }

      // Redirect after successful insertion
      res.redirect(303, '/') // 303 is for redirection after successful POST
    } catch (err) {
      console.error('Unexpected error:', err)
      return res.status(500).json({ error: 'An unexpected error occurred' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
