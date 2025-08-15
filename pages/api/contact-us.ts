import type { NextApiRequest, NextApiResponse } from 'next';

// You can connect to MongoDB here if needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Optionally store in database (MongoDB, etc.)
  console.log('Received contact form data:', { name, email, message });

  return res.status(200).json({ message: 'Message received!' });
}
