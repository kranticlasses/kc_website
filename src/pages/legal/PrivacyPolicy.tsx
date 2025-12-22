import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Kranti Classes</title>
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose max-w-none">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                    <p className="mb-4">
                        At Kranti Classes, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">Collection of Information</h2>
                    <p className="mb-4">
                        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Personal Data: Name, email address, phone number, etc.</li>
                        <li>Derivative Data: IP address, browser type, operating system, etc.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">Use of Your Information</h2>
                    <p className="mb-4">
                        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Process payments and refunds.</li>
                        <li>Send you email newsletters.</li>
                        <li>Respond to product and customer service requests.</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
