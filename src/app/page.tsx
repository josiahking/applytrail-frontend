import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="flex flex-col items-center text-center mt-24 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Track Your Job Applications with Ease
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          ApplyTrail helps you stay organized while applying for jobs — keep
          track of companies, roles, and your application status all in one
          place.
        </p>
        <Link
          href="#signup"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      <footer className="mt-auto py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} ApplyTrail. All rights reserved.
      </footer>
    </>
  );
}
