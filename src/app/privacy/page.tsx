export default function PrivacyPolicy() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
            <h1 className="text-4xl font-bold text-green-700 text-center mb-6">
                Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 text-center mb-12">
                Effective Date: October 2025
            </p>

            <p className="mb-6">
                Welcome to <strong>BalancedBite</strong>. Your privacy is important to us.
                This Privacy Policy explains how we collect, use, and protect your data
                when you use our app and services.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">1. Information We Collect</h2>
            <ul className="list-disc pl-6 mb-6">
                <li>Account details (name, email) via Google Sign-In</li>
                <li>Nutrition and meal log data</li>
                <li>Device and usage analytics</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-3">2. How We Use Information</h2>
            <ul className="list-disc pl-6 mb-6">
                <li>To personalize diet plans and insights</li>
                <li>To provide authentication and secure sessions</li>
                <li>To improve app performance and support</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-3">3. Data Security</h2>
            <p className="mb-6">
                We use encryption and secure cloud infrastructure to protect your
                information. Data is never sold to third parties.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">4. Contact Us</h2>
            <p>
                For questions or requests, contact us at{" "}
                <a
                    href="mailto:partiksingh28@gmail.com"
                    className="text-blue-600 underline"
                >
                    partiksingh28@gmail.com
                </a>
                .
            </p>

            <footer className="mt-16 text-center text-gray-500 text-sm">
                © 2025 BalancedBite. All rights reserved.
            </footer>
        </main>
    );
}
