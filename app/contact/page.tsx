import Link from "next/link";

// pages/contract.tsx
export default function Contract() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4">Get in Touch</h1>
        <p className="text-lg text-center mb-5">
          Feel free to reach out if you have any questions or project inquiries.
        </p>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg p-8 rounded-lg w-full lg:w-1/2 mb-8 lg:mb-0">
            <form className="space-y-4">
              <div>
                <label className="block text-left text-gray-700 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              {/* <div>
                <label className="block text-left text-gray-700 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Subject"
                />
              </div> */}
              <div>
                <label className="block text-left text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  className="w-full p-2 border rounded-lg"
                  rows={2}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className=" p-8 rounded-lg w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-lg mb-4">
              Feel free to contact me directly via email or mail:
            </p>

            <div className="mt-6">
              <p className="text-xl font-bold">Nur Muhammad</p>
              <p className="text-gray-600">Gazipur, Dhaka, Bangladesh</p>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:nurmuhammadd2003@gmail.com"
                  className="text-blue-500"
                >
                  nurmuhammadd2003@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">Social Media</h3>
              <p className="text-gray-600">
                LinkedIn:{" "}
                <Link href="https://www.linkedin.com/in/mdnurmuhammad/" className="text-blue-500">
                  LinkedIn Profile
                </Link>
              </p>
              <p className="text-gray-600">
                GitHub:{" "}
                <Link href="https://github.com/NurMuhammadCSE" className="text-blue-500">
                  GitHub Profile
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
