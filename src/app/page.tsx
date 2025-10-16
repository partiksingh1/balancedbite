// app/page.tsx or pages/index.tsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-green-50 px-6 py-12 text-center">
      {/* Hero Section */}
      <header className="max-w-3xl">
        <h1 className="text-5xl font-extrabold text-green-800 mb-4">
          BalancedBite
        </h1>
        <p className="text-gray-700 text-xl mb-6 leading-relaxed font-bold">
          Smarter eating, powered by AI — track your meals, get personalized
          meal plans, and receive practical nutrition insights that adapt to
          your goals, habits, and lifestyle.
        </p>
        <p className="text-gray-600 mb-8">
          BalancedBite simplifies healthy living with intelligent suggestions
          that help you make mindful choices every day — no complicated diets,
          just smart guidance.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <Link
            href="/privacy"
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="border border-green-600 text-green-700 px-6 py-3 rounded-full hover:bg-green-50 transition"
          >
            Terms of Service
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="flex flex-col md:flex-row max-w-6xl w-full gap-8 items-center mt-10 mx-auto px-4 text-left">
        <div className="flex flex-col md:w-1/3">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">
            What is BalancedBite?
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-3">
            BalancedBite is your personal AI-powered nutrition assistant built to make
            healthy eating effortless. It helps you stay consistent with meal tracking,
            balance your macros, and receive meal ideas suited to your tastes and goals.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Whether you want to lose weight, maintain a balanced diet, or simply
            understand your eating patterns better — BalancedBite learns from you and evolves with you.
          </p>
        </div>

        <div className="flex md:w-2/3 justify-center items-center">
          <Image
            src="/images/p0.png"
            alt="BalancedBite App Preview"
            width={600}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="max-w-6xl w-full mt-16 px-4">
        <h3 className="text-2xl font-semibold text-green-800 mb-6">
          Inside the BalancedBite Experience
        </h3>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { src: "/images/p1.png", alt: "Meal tracking feature" },
            { src: "/images/p2.png", alt: "AI meal suggestions" },
            { src: "/images/p3.png", alt: "Nutrition insights dashboard" },
            { src: "/images/p4.png", alt: "Goal setting screen" },
            { src: "/images/p5.png", alt: "Profile and analytics view" },
          ].map((img, idx) => (
            <div
              key={idx}
              className="flex w-full sm:w-[64%] lg:w-[60%] justify-center"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={560}
                className="rounded-lg shadow object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Transparency Section */}
      <section className="max-w-4xl mt-20 text-left px-4">
        <h3 className="text-2xl font-semibold text-green-800 mb-4">
          Your Data, Your Control
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          BalancedBite values your privacy. We only collect the minimum data
          required to personalize your meal plans and deliver accurate insights.
          All personal and dietary information is securely encrypted and stored
          with your consent.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          You can review how your data is used, request deletion, or manage
          permissions at any time in our{" "}
          <Link href="/privacy" className="text-green-700 underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="bg-green-100 border border-green-200 rounded-xl p-4 text-gray-700">
          <p>
            ⚠️ BalancedBite does not share or sell your information to third
            parties. Our AI suggestions are generated based only on your input
            and preferences.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm text-center px-4">
        <p>© {new Date().getFullYear()} BalancedBite. All rights reserved.</p>
        <p className="mt-1">
          Designed and developed with ❤️ by Partik Singh Tanwer.
        </p>
      </footer>
    </main>
  );
}
