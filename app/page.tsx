import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const ProfilePicture = () => {
  return (
    // <img
    //   src="/nur.jpg"
    //   alt="Profile picture of Payton"
    //   className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full w-[350px] md:w-2/5 p-3"
    // />
    <Image
      src="/nur.jpg"
      alt="Profile picture of Nur"
      width={500}
      height={500}
      className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full w-[350px] md:w-2/5 p-3"
    ></Image>
  );
};

const BulletPoints = () => {
  return (
    <ul className="space-y-1 text-xl text-center md:text-left">
      {/* <li>🧀 based in wisconsin</li>
      <li>🐔 cat & chicken mom</li> */}
      <div className="flex items-center space-x-3">
        {/* <FaEnvelope size={20} /> */}
        <span className="text-lg">
          {/* 📧{" "} */}
          <a href="mailto:nurmuhammadd2003@gmail.com">
            📧 nurmuhammadd2003@gmail.com
          </a>
        </span>
      </div>
      <li>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt size={20} />
          <span className="text-lg">Gazipur, Bangladesh</span>
        </div>
      </li>
      {/* <li>
        <a href="mailto:nurmuhammadd2003@gmail.com">📧 let's get in touch!</a>
      </li> */}
      <li>
        📝Download my{" "}
        <a
          className="link link-primary"
          href="/NurMuhammad.pdf"
          download="NurMuhammad"
        >
          resume
        </a>
      </li>
    </ul>
  );
};

const WavingHand = () => {
  return <span className="animate-wave inline-block">🤚🏻</span>;
};

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/NurMuhammadCSE/",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/mdnurmuhammad",
  },
  {
    icon: <FaXTwitter />,
    href: "https://x.com/NMuhammad321",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* picture of me */}
      <ProfilePicture />
      {/* little bio */}
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-tl from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text font-bold">
              Nur Muhammad
            </span>
            {/* <WavingHand /> */}
          </h1>
          <h2 className="text-3xl font-semibold">I'm a Full Stack Developer.</h2>
        </div>
        <BulletPoints />
        {/* socials */}
        <ul className="flex justify-center text-3xl gap-10 mt-4">
          {socials.map((social, index) => (
            <li
              key={index}
              className="hover:scale-125 hover:text-gray-500 transition-all ease-in-out"
            >
              <Link href={social.href} target="_blank">
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
