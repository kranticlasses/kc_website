import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsConditions = () => {
    return (
        <>
            <Helmet>
                <title>Terms & Conditions | Kranti Classes</title>
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
                <div className="prose max-w-none">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                    <p className="mb-4">
                        These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Kranti Classes (“we,” “us” or “our”), concerning your access to and use of the website.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">Agreement to Terms</h2>
                    <p className="mb-4">
                        By accessing the Site, you agree that you have read, understood, and agreed to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">Intellectual Property Rights</h2>
                    <p className="mb-4">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TermsConditions;
