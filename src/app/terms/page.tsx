export default function TermsOfService() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
            <h1 className="text-4xl font-bold text-green-700 text-center mb-6">
                Terms of Service
            </h1>
            <p className="text-sm text-gray-500 text-center mb-12">
                Effective Date: October 2025
            </p>

            <p className="mb-6">
                Welcome to <strong>BalancedBite</strong>. By using our app, you agree to
                the following terms. Please read them carefully.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">1. Acceptance of Terms</h2>
            <p className="mb-6">
                By accessing or using our services, you agree to comply with these
                Terms. If you do not agree, please discontinue use.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">2. User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6">
                <li>Provide accurate information during registration</li>
                <li>Do not misuse or reverse-engineer the platform</li>
                <li>Respect intellectual property rights of BalancedBite</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-3">3. Limitation of Liability</h2>
            <p className="mb-6">
                BalancedBite provides personalized recommendations but does not replace
                professional medical advice. Use the app at your own discretion.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">4. Modifications</h2>
            <p className="mb-6">
                We may update these Terms periodically. Continued use of the app means
                you accept the updated Terms.
            </p>

            <footer className="mt-16 text-center text-gray-500 text-sm">
                © 2025 BalancedBite. All rights reserved.
            </footer>
        </main>
    );
}
