/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Javascript Event Loop",
      description:
        "Understanding the JavaScript Event Loop: A Beginner’s Guide",
      image: "https://i.ibb.co.com/TwnWwqz/Javascript-event-loop.png",
      link: "https://dev.to/nurmuhammadd/understanding-the-javascript-event-loop-a-beginners-guide-2ebk",
    },
    {
      title: "Javascript Engine",
      description: "How Does the JavaScript Engine Work?",
      image: "https://i.ibb.co.com/NySVRgN/js-engine.png",
      link: "https://dev.to/nurmuhammadd/how-does-the-javascript-engine-work-2bbb",
    },
    {
      title: "Promise in Javascript",
      description: "Understanding Promises and Promise Chaining in JavaScript",
      image: "https://i.ibb.co.com/C2j30wB/1-2l-Vkf-Uxpad7-Y-2-Y0-K3-To-LQ.png",
      link: "https://dev.to/nurmuhammadd/understanding-promises-and-promise-chaining-in-javascript-gkf",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* <img
              className="w-full h-48 object-cover"
              src={post.image}
              alt={post.title}
            /> */}

            <Image
              className="w-full h-48 object-cover"
              src={post.image}
              alt={post.title}
              width={500}
              height={500}
            />
            <div className="p-6">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
              <Link
                href={post.link}
                target="_blank"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
