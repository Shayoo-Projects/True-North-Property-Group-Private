import React from 'react';
import BlogList from '../components/BlogList';

const BlogHeader: React.FC = () => (
    <section className="bg-tn-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Real Estate <span className="text-tn-secondary">Insights</span>
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
            Your source for the latest market news, tips for buyers and sellers, and community highlights.
          </p>
        </div>
      </div>
    </section>
  );

const BlogPage: React.FC = () => {
  return (
    <>
      <BlogHeader />
      <BlogList />
    </>
  );
};

export default BlogPage;