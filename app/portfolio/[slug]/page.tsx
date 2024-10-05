"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    id: "electronic-gadget",
    title: "Electronic Gadget Hub",
    description:
      "An electronic gadgets marketplace with an intuitive UI/UX, leveraging Next.js and Redux for a seamless user experience.",
    features: [
      "User authentication and dynamic product management",
      "Cart functionality with Redux Persist for a persistent shopping experience",
      "Comprehensive admin dashboards to manage products and orders",
      "User dashboard to view and review their orders",
    ],
    technologies: [
      "Next.js",
      "NextUI",
      "Redux",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Mongoose",
      "MongoDB",
    ],
    mockup: "/mockups/gadget.png",
    live: "https://electronic-gadget-hub-final.vercel.app/",
    code: "https://github.com/NurMuhammadCSE/Electronic-Gadgets-Shop-Frontend/",
  },
  {
    id: "car-wash",
    title: "Car Wash Booking System",
    description:
      "An online car wash booking platform with appointment scheduling, real-time updates, and payment integration.",
    features: [
      "Explore, filter, and book available services with a user-friendly interface",
      "Admin can efficiently manage services, slots, and user bookings",
      "Secure payment integration via AAMARPAY",
      "Responsive design with dark mode and personalized dashboards for users and admins",
    ],
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Mongoose",
      "MongoDB",
    ],
    mockup: "/mockups/carwash.png",
    live: "https://car-washing-booking.web.app/",
    code: "https://github.com/NurMuhammadCSE/car-wash-booking-system",
  },
  {
    id: "mobile-shop",
    title: "Mobile Shop",
    description:
      "A full-stack e-commerce platform for mobile phones, featuring user authentication and secure payments.",
    features: [
      "User authentication and secure Stripe payments",
      "Admin functionalities for managing inventory and user roles",
      "Integrated React Query for efficient data fetching",
      "Admin tools for monitoring revenue and order details",
    ],
    technologies: [
      "React",
      "Firebase",
      "Tanstack Query",
      "Axios",
      "Stripe",
      "Node.js",
      "Express.js",
      "JWT",
      "MongoDB",
    ],
    mockup: "/mockups/mobile.png",
    live: "https://mobile-shop-fdd56.web.app/",
    code: "https://github.com/NurMuhammadCSE/mobile-shop-client",
  },
];


const ProjectDetails = ({ params }:{ params: { slug: string } }) => {
  // Find the specific project by id
  const projectInfo = projects.find((p) => p.id === params.slug);

  if (!projectInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col items-center py-10">
      {/* Project Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">{projectInfo.title}</h1>

      {/* Project Image */}
      <div className="relative w-full max-w-3xl">
        <Image
          src={projectInfo.mockup}
          alt={projectInfo.title}
          width={800}
          height={450}
          className="rounded-lg shadow-lg object-cover w-full"
        />
      </div>

      {/* Project Description */}
      <div className="mt-10 w-full max-w-4xl px-6 py-8 bg-white rounded-lg shadow-md text-center">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{projectInfo.description}</p>

        {/* Key Features */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-gray-600">
            {projectInfo.features.map((feature, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center space-x-2"
              >
                <span className="text-blue-500">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {projectInfo.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            href={projectInfo.live}
            target="_blank"
            className="btn btn-secondary text-white px-8 py-3 rounded-md shadow-md transition text-lg"
          >
            View Live Demo
          </Link>
          <Link
            href={projectInfo.code}
            target="_blank"
            className="btn btn-primary text-white px-8 py-3 rounded-md shadow-md transition text-lg"
          >
            View Source Code
          </Link>
        </div>
      </div>

      {/* Back to Portfolio */}
      <div className="mt-16 text-center">
        <Link href="/portfolio" className="text-blue-600 hover:underline text-lg">
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;




// import React from 'react'

// const PortfolioDetail = ({ params }: { params: { slug: string } }) => {
//   return (
//     <div>PortfolioDetail for {params.slug}
    
    
//     </div>
//   )
// }

// export default PortfolioDetail