import React from "react";

const blogPosts = [
  {
    title: "Claims Management – The Way Forward",
    date: "Aug 26, 2016",
    excerpt: "I still remember one of the Claims Presentations I had attended way back in 2005...",
    image: "https://source.unsplash.com/600x400/?insurance,office",
    link: "#"
  },
  {
    title: "Bima Claim – Your Claim Advisor",
    date: "Jul 16, 2016",
    excerpt: "Indian insurance industry is 15th Largest in the World. Gross premium booked in Non Life Segment...",
    image: "https://source.unsplash.com/600x400/?business,meeting",
    link: "#"
  },
  {
    title: "Clients Duty of Disclosure",
    date: "Jun 20, 2016",
    excerpt: "We draw your attention to the Duty of Utmost Good Faith. This Duty applies to you whenever you...",
    image: "https://source.unsplash.com/600x400/?insurance,map",
    link: "#"
  },
  {
    title: "Special Features of Claims",
    date: "May 18, 2016",
    excerpt: "Product Liability claim: Whether the product is covered under the policy...",
    image: "https://source.unsplash.com/600x400/?insurance,technology",
    link: "#"
  },
  {
    title: "Effective ways to handle Claims",
    date: "Apr 21, 2016",
    excerpt: "Liability claims: Do not make any payment, make any compromise, commitment or enter into agreement...",
    image: "https://source.unsplash.com/600x400/?insurance,businessman",
    link: "#"
  }
];

const BlogGrid = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-teal-700 to-cyan-500 p-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Our Blog</h1>
        <p className="text-gray-200 text-lg">
          Latest insights, tips, and guides on insurance claims and policies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-2">{post.date}</p>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="text-cyan-500 font-semibold hover:underline transition"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
