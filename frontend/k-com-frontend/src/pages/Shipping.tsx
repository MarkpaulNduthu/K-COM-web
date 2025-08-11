//import React from 'react';

import { Footer } from "@/components/Footer";

const Shipping = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6">Shipping & Delivery</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Shipping Overview</h2>
                    <p className="text-muted-foreground">
                        At <span className="font-medium">K-COM</span>, we are committed to delivering your orders quickly, safely, and at the lowest cost possible. We partner with trusted logistics companies to ensure timely delivery across Kenya and beyond.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Shipping Locations</h2>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li>We deliver to all counties in Kenya.</li>
                        <li>International shipping is available for select items.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Delivery Timeframes</h2>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li><strong>Nairobi & Major Towns:</strong> 1–2 business days</li>
                        <li><strong>Other Counties:</strong> 2–5 business days</li>
                        <li><strong>International Shipping:</strong> 5–10 business days</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Shipping Fees</h2>
                    <p className="text-muted-foreground">
                        Shipping fees vary depending on the location and weight of your order. The exact amount is calculated at checkout. We occasionally offer free shipping promotions on select products.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Order Tracking</h2>
                    <p className="text-muted-foreground">
                        Once your order is shipped, you will receive an email or SMS with a tracking number. You can use this number to track your package in real time through our logistics partner’s website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Questions or Concerns?</h2>
                    <p className="text-muted-foreground">
                        If you have any issues or questions about your delivery, feel free to contact our support team via the <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a>.
                    </p>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default Shipping;
