//import React from 'react';

import { Footer } from "@/components/Footer";

const TermsAndConditions = () => {

    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

                <section className="mb-8 text-muted-foreground">
                    <p>
                        Welcome to <strong>K-COM</strong>. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">1. Use of Website</h2>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li>You must be at least 18 years old or have parental consent to use our services.</li>
                        <li>You agree to use this site for lawful purposes only.</li>
                        <li>You may not copy, reproduce, or exploit any part of the site without written permission from K-COM.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">2. Account Registration</h2>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li>You must provide accurate, current, and complete information when creating an account.</li>
                        <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                        <li>K-COM is not liable for any loss or damage arising from your failure to comply with this security obligation.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">3. Product Information</h2>
                    <p className="text-muted-foreground">
                        We strive to ensure all product information, including prices and descriptions, is accurate. However, we do not guarantee that all content is error-free. K-COM reserves the right to correct errors and update information at any time without prior notice.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">4. Orders and Payments</h2>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li>All orders are subject to acceptance and availability.</li>
                        <li>Prices are subject to change without notice.</li>
                        <li>Payment must be completed before the order is processed and shipped.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">5. Shipping & Delivery</h2>
                    <p className="text-muted-foreground">
                        Please refer to our <a href="/shipping" className="text-blue-600 hover:underline">Shipping & Delivery</a> page for detailed information about delivery timelines, areas we cover, and costs.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">6. Returns & Refunds</h2>
                    <p className="text-muted-foreground">
                        Please review our <a href="/returns" className="text-blue-600 hover:underline">Returns & Refunds Policy</a> for information about how to initiate a return and eligibility for refunds or exchanges.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
                    <p className="text-muted-foreground">
                        All content, including logos, graphics, text, and software on K-COM is the intellectual property of K-COM or its licensors. Unauthorized use is strictly prohibited.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
                    <p className="text-muted-foreground">
                        K-COM shall not be liable for any indirect, incidental, or consequential damages arising from your use of our site or services. Our total liability to you for any claims shall not exceed the amount paid by you for the product or service in question.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">9. Termination</h2>
                    <p className="text-muted-foreground">
                        We reserve the right to terminate or suspend your account without notice if we believe you have violated these Terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
                    <p className="text-muted-foreground">
                        These Terms are governed by the laws of the Republic of Kenya. Any disputes arising from or related to the use of this site shall be subject to the exclusive jurisdiction of the courts located in Nairobi, Kenya.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">11. Contact Information</h2>
                    <p className="text-muted-foreground">
                        If you have any questions about these Terms, please contact us at: <br />
                        <a href="mailto:support@k-com.co.ke" className="text-blue-600 hover:underline">support@k-com.co.ke</a>
                    </p>
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default TermsAndConditions;
