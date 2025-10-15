"use client";

import { useState } from "react";

export default function DeleteAccountPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        if (!confirm) {
            setMessage({ type: "error", text: "Please confirm deletion before proceeding." });
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("http://localhost:3000/api/auth/delete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage({ type: "success", text: "✅ Your account and data have been successfully deleted." });
                setEmail("");
                setPassword("");
                setConfirm(false);
            } else {
                setMessage({ type: "error", text: data.message || "Failed to delete account. Please try again." });
            }
        } catch (err) {
            setMessage({ type: "error", text: "Server error. Please try again later." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="max-w-md mx-auto px-6 py-16 text-gray-800">
            <h1 className="text-4xl font-bold text-red-600 text-center mb-4">
                Delete Your Account
            </h1>
            <p className="text-center text-gray-600 mb-10">
                Permanently delete your account and all associated data from BalancedBite.
                This action cannot be undone.
            </p>

            <form
                onSubmit={handleDelete}
                className="bg-white shadow-md rounded-2xl p-6 border border-gray-100"
            >
                <label className="block mb-4">
                    <span className="text-gray-700 font-medium">Email</span>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                        placeholder="you@example.com"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700 font-medium">Password</span>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                        placeholder="Enter your password"
                    />
                </label>

                <label className="flex items-center mb-6">
                    <input
                        type="checkbox"
                        checked={confirm}
                        onChange={(e) => setConfirm(e.target.checked)}
                        className="h-4 w-4 text-red-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 text-sm">
                        I understand this action cannot be undone.
                    </span>
                </label>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 font-semibold rounded-lg text-white transition ${loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"
                        }`}
                >
                    {loading ? "Deleting..." : "Delete Account"}
                </button>
            </form>

            {message && (
                <p
                    className={`mt-6 text-center font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"
                        }`}
                >
                    {message.text}
                </p>
            )}

            <footer className="mt-16 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} BalancedBite. All rights reserved.
            </footer>
        </main>
    );
}
