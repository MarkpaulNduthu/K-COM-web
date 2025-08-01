//import React from 'react';

import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <section className="mb-8">
                    <p className="text-muted-foreground">
                        This Privacy Policy describes how <strong>K-COM</strong> collects, uses, and protects your personal information when you use our website and services. By accessing our platform, you agree to the practices described below.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address, billing information.</li>
                        <li><strong>Account Details:</strong> Username, password, and order history.</li>
                        <li><strong>Device Information:</strong> IP address, browser type, operating system, and usage data.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li>To process and deliver your orders.</li>
                        <li>To personalize your shopping experience.</li>
                        <li>To improve our website, services, and customer support.</li>
                        <li>To send you order updates, promotional offers, or newsletters (you may opt out at any time).</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
                    <p className="text-muted-foreground">
                        We do not sell or rent your personal information. We may share your information with trusted third-party service providers (e.g., payment processors, shipping partners) only to the extent necessary to fulfill your orders and services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
                    <p className="text-muted-foreground">
                        We use industry-standard security measures to protect your personal information. However, no method of transmission or storage is 100% secure, so we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">5. Your Rights & Choices</h2>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li>You may access, update, or delete your personal data at any time via your account settings.</li>
                        <li>You may opt out of promotional emails through the unsubscribe link in the email.</li>
                        <li>You can request a copy of the data we hold about you by contacting our support team.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">6. Cookies</h2>
                    <p className="text-muted-foreground">
                        We use cookies to enhance your browsing experience and analyze site traffic. You can manage cookie preferences in your browser settings.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
                    <p className="text-muted-foreground">
                        We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
                    <p className="text-muted-foreground">
                        For questions about this Privacy Policy, please contact us at: <br />
                        <a href="mailto:privacy@k-com.co.ke" className="text-blue-600 hover:underline">privacy@k-com.co.ke</a>
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
