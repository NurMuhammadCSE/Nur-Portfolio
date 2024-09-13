import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Electronic Gadget",
    mockup: "/mockups/gadget.png",
    live: "https://electronic-gadgets-shop-frontend.vercel.app/",
    code: "https://github.com/NurMuhammadCSE/Electronic-Gadgets-Shop-Frontend/",
  },
  {
    title: "Car Wash",
    mockup: "/mockups/carwash.png",
    live: "https://car-washing-booking.web.app/",
    code: "https://github.com/NurMuhammadCSE/car-wash-booking-system",
  },
  {
    title: "Mobile Shop",
    mockup: "/mockups/mobile.png",
    live: "https://mobile-shop-fdd56.web.app/",
    code: "https://github.com/NurMuhammadCSE/mobile-shop-client",
  },
  {
    title: "PC Builder",
    mockup: "/mockups/clockMock.png",
    live: "https://pc-builder-azure-ten.vercel.app/",
    code: "https://github.com/NurMuhammadCSE/pc-builder",
  },
];

const Portfolio = () => {
  return (
    <div className="text-center">
      {/* <p>Open Source Contributions:</p>
      <Link
        className="link link-primary"
        href="https://github.com/danielcranney/profileme-dev/pull/34"
      >
        ProfileMe.dev
      </Link> */}
      <div className="flex flex-wrap items-start mb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="md:w-1/2 flex flex-col items-center justify-center"
          >
            {/* <img src={project.mockup} /> */}
            <Image
              src={project.mockup}
              alt="mock up"
              width={400}
              height={400}
            ></Image>
            <h1 className="text-3xl mb-">{project.title}</h1>
            <div className="flex gap-4 mb-2">
              <Link
                href={project.live}
                target="_blank"
                className="btn btn-secondary"
              >
                Live
              </Link>
              <Link
                href={project.code}
                target="_blank"
                className="btn btn-primary"
              >
                Source
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
