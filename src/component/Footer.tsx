import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white  pt-10 w-full">
      {/* CTA Section - stays constrained */}
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-100 rounded-2xl h-60 p-10 flex flex-col lg:flex-row items-center justify-between mb-16">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                Try our Opulents Events app for free for 14 days
              </h2>
              <p className="text-gray-600">
                The first step to a seamless event starts in less than a minute.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="#">
                <Image
                  src="/appstore-badge.png"
                  alt="App Store"
                  width={140}
                  height={40}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/googleplay-badge.png"
                  alt="Google Play"
                  width={140}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Main Content - full width background, centered content */}
      <div className="w-full px-6 ">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-sm text-gray-700">
          {/* Column 1 - Logo & Copyright */}
          <div className="col-span-1 lg:col-span-1">
            <h1 className="text-xl font-bold mb-2">Opulents Events</h1>
            <p className="text-gray-500 mb-2">© {new Date().getFullYear()} Opulents Events.</p>
            <div className="text-xs text-gray-400 space-x-2">
              <Link href="#" className="hover:underline">Terms of Service</Link>
              <span>·</span>
              <Link href="#" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Products</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Services</Link></li>
              <li><Link href="#" className="hover:underline">Pricing</Link></li>
              <li><Link href="#" className="hover:underline">Log in</Link></li>
              <li><Link href="#" className="hover:underline">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">About us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Our Story</Link></li>
              <li><Link href="#" className="hover:underline">Team</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Help Center</Link></li>
              <li><Link href="#" className="hover:underline">Book a Demo</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Get in touch</h3>
            <p className="mb-3">We’d love to hear from you!</p>
            <div className="flex space-x-4 text-xl text-gray-600">
              <Link href="#"><i className="fab fa-facebook"></i></Link>
              <Link href="#"><i className="fab fa-twitter"></i></Link>
              <Link href="#"><i className="fab fa-linkedin"></i></Link>
            </div>
          </div>
        </div>
        <div className="py-6" />
      </div>
    </footer>
  );
};

export default Footer;
