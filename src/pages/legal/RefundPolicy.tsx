import React from 'react';
import { Helmet } from 'react-helmet-async';

const RefundPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Refund Policy | Kranti Classes</title>
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8">Refund & Cancellation Policy</h1>
                <div className="prose max-w-none">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                    <p className="mb-4">
                        Thank you for choosing Kranti Classes. We ensure that our users have a rewarding experience while they discover, assess, and purchase our courses.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">Refunds</h2>
                    <p className="mb-4">
                        We offer a full money-back guarantee for all purchases made on our website. If you are not satisfied with the product that you have purchased from us, you can get your money back no questions asked. You are eligible for a full reimbursement within 14 calendar days of your purchase.
                    </p>
                    <p className="mb-4">
                        After the 14-day period you will no longer be eligible and won't be able to receive a refund. We encourage our customers to try the product (or service) in the first two weeks after their purchase to ensure it fits your needs.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">Cancellations</h2>
                    <p className="mb-4">
                        If you wish to cancel your registration, please contact us immediately. Cancellations made 7 days or more in advance of the course start date will receive a 100% refund.
                    </p>
                </div>
            </div>
        </>
    );
};

export default RefundPolicy;
