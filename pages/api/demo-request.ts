// pages/api/demo-request.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('gstbillbook');
  const demoCollection = db.collection('demo_requests');

  if (req.method === 'POST') {
    const { mobile } = req.body;
    if (!mobile) return res.status(400).json({ error: 'Mobile number is required' });

    await demoCollection.insertOne({ mobile, createdAt: new Date() });
    return res.status(201).json({ message: 'Demo request received' });
  }

  if (req.method === 'GET') {
    const requests = await demoCollection.find().sort({ createdAt: -1 }).toArray();
    return res.status(200).json(requests);
  }

  return res.status(405).end(); // Method Not Allowed
}
