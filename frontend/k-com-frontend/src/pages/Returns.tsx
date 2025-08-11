//import React from 'react';

import { Footer } from "@/components/Footer";

const Returns = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6">Returns & Refunds Policy</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Our Promise</h2>
                    <p className="text-muted-foreground">
                        At <span className="font-medium">K-COM</span>, customer satisfaction is our top priority. If you're not completely satisfied with your purchase, we're here to help.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Return Eligibility</h2>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li>Items must be returned within <strong>7 days</strong> of delivery.</li>
                        <li>Products must be unused, unwashed, and in their original packaging.</li>
                        <li>Digital products and gift cards are non-refundable.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">How to Initiate a Return</h2>
                    <p className="text-muted-foreground">
                        To initiate a return, contact our support team via the <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a> with your order number and reason for return. We’ll guide you through the next steps.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Refund Process</h2>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
                        <li>Approved refunds will be processed within <strong>5–7 business days</strong> to your original payment method.</li>
                        <li>Shipping fees are non-refundable unless the item was damaged or incorrect.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Need Assistance?</h2>
                    <p className="text-muted-foreground">
                        Our support team is available to answer any questions. Reach out anytime via our <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a> or email <a href="mailto:support@k-com.co.ke" className="text-blue-600 hover:underline">support@k-com.co.ke</a>.
                    </p>
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default Returns;
