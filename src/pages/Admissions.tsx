import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Admissions = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        mobile: '',
        email: '',
        currentClass: '',
        course: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // TODO: Replace this URL with your actual Google Form action URL
            // To get this: Create a Google Form > Get prefilled link > Copy the form action URL
            const GOOGLE_FORM_URL = 'YOUR_GOOGLE_FORM_URL_HERE';

            // Create form data for Google Forms
            const formDataToSend = new FormData();
            // Map your form fields to Google Form entry IDs
            // You'll need to inspect your Google Form to get these entry IDs
            formDataToSend.append('entry.STUDENT_NAME_ID', formData.studentName);
            formDataToSend.append('entry.PARENT_NAME_ID', formData.parentName);
            formDataToSend.append('entry.MOBILE_ID', formData.mobile);
            formDataToSend.append('entry.EMAIL_ID', formData.email);
            formDataToSend.append('entry.CLASS_ID', formData.currentClass);
            formDataToSend.append('entry.COURSE_ID', formData.course);

            // Submit to Google Forms
            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                body: formDataToSend,
                mode: 'no-cors' // Required for Google Forms
            });

            // If we reach here, submission was successful
            setSubmitStatus('success');
            // Reset form
            setFormData({
                studentName: '',
                parentName: '',
                mobile: '',
                email: '',
                currentClass: '',
                course: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Student Enrollment | Kranti Classes</title>
                <meta name="description" content="Enroll at Kranti Classes. Fill in your details to join our expert coaching for Class 6-12, JEE, and NEET preparation." />
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Student Enrollment</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join Kranti Classes today. Fill in your details below and our team will contact you shortly to complete the enrollment process.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <Card className="p-8">
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-800 font-semibold">✓ Enrollment Submitted Successfully!</p>
                                <p className="text-green-700 text-sm mt-1">Thank you for enrolling. We'll contact you shortly.</p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-800 font-semibold">✗ Submission Failed</p>
                                <p className="text-red-700 text-sm mt-1">Please try again or contact us directly.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Student Details */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Information</h2>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Full Name *</label>
                                        <input
                                            type="text"
                                            name="studentName"
                                            value={formData.studentName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                            placeholder="Enter full name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name *</label>
                                        <input
                                            type="text"
                                            name="parentName"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                            placeholder="Enter parent/guardian name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number (WhatsApp) *</label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                            placeholder="+91 98765 43210"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                            placeholder="student@example.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Class *</label>
                                        <select
                                            name="currentClass"
                                            value={formData.currentClass}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                                            required
                                        >
                                            <option value="">Select Class</option>
                                            <option value="6">Class 6</option>
                                            <option value="7">Class 7</option>
                                            <option value="8">Class 8</option>
                                            <option value="9">Class 9</option>
                                            <option value="10">Class 10</option>
                                            <option value="11">Class 11</option>
                                            <option value="12">Class 12</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Course Interested In *</label>
                                        <select
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                                            required
                                        >
                                            <option value="">Select Course</option>
                                            <option value="foundation">Foundation (Class 6-10)</option>
                                            <option value="boards">Boards (Class 11-12)</option>
                                            <option value="jee">JEE Preparation</option>
                                            <option value="neet">NEET Preparation</option>
                                            <option value="crash">Crash Course</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-700">
                                    By submitting this form, you agree to be contacted by Kranti Classes regarding your enrollment.
                                </p>
                            </div>

                            <Button
                                type="submit"
                                className="w-full text-lg"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Enroll Now'}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Admissions;
