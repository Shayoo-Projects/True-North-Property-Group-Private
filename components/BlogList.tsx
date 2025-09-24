
import React from 'react';

const BlogList: React.FC = () => {
  const posts = [
    {
      title: 'First-Time Home Buyer Tips for 2024',
      href: '#',
      category: { name: 'Buying', href: '#' },
      description:
        'Navigating the market for the first time? Here are our top tips to make the process smoother and more successful.',
      imageUrl:
        'https://picsum.photos/600/400?image=101',
    },
    {
      title: 'How to Stage Your Home to Sell Fast',
      href: '#',
      category: { name: 'Selling', href: '#' },
      description:
        'Learn the secrets of home staging that can help you get the best price for your property in the shortest amount of time.',
      imageUrl:
        'https://picsum.photos/600/400?image=102',
    },
    {
      title: 'Understanding the Northern Virginia Market',
      href: '#',
      category: { name: 'Market Insights', href: '#' },
      description:
        'A deep dive into the latest trends, pricing, and opportunities in the dynamic Northern Virginia real estate market.',
      imageUrl:
        'https://picsum.photos/600/400?image=103',
    },
  ];

  return (
    <div className="relative bg-tn-light px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the Blog</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Stay informed with our latest news, tips, and market insights.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-tn-primary">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">True North Team</span>
                      <img className="h-10 w-10 rounded-full" src="https://picsum.photos/40/40?image=44" alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#" className="hover:underline">
                        True North Team
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2024-07-26">July 26, 2024</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
