// components/CustomerReviews.tsx

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
const reviews = [
  {
    name: 'Amit Kumar',
    role: 'Shop Owner, Delhi',
    image: 'https://ui-avatars.com/api/?name=Amit+Kumar&background=0D8ABC&color=fff',
    rating: 5,
    feedback:
      'myBillBook has simplified my GST billing and invoice sharing. It’s secure and super easy to use!',
  },
  {
    name: 'Priya Sharma',
    role: 'Freelancer, Mumbai',
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=8A2BE2&color=fff',
    rating: 4,
    feedback:
      'The dashboard helps me track all my payments and sales. I love how I can get old bills in one click!',
  },
  {
    name: 'Rakesh Patel',
    role: 'Wholesaler, Ahmedabad',
    image: 'https://ui-avatars.com/api/?name=Rakesh+Patel&background=FF6347&color=fff',
    rating: 5,
    feedback:
      'Due date reminders saved me from missed payments. The demo was helpful and the support is amazing!',
  },
];
export default function CustomerReviews() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center mb-4 text-yellow-400">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>

              <p className="text-gray-300 text-sm">{`"${review.feedback}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
