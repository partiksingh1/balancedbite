import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-green-700 mb-4">BalancedBite Legal</h1>
      <p className="text-gray-600 mb-8">
        Read our Privacy Policy and Terms of Service.
      </p>
      <div className="flex gap-6">
        <Link href="/privacy" className="text-blue-600 underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-blue-600 underline">
          Terms of Service
        </Link>
      </div>
    </main>
  );
}
