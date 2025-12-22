import { GraduationCap, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

function Admissions() {
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    class: '',
    course: '',
    previousSchool: '',
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    amount: '50000',
  });

  const courses = [
    { value: 'foundation-6-8', label: 'Foundation (Class 6-8)', fee: '₹25,000/year' },
    { value: 'foundation-9-10', label: 'Foundation (Class 9-10)', fee: '₹35,000/year' },
    { value: 'jee-11', label: 'JEE Preparation (Class 11)', fee: '₹50,000/year' },
    { value: 'jee-12', label: 'JEE Preparation (Class 12)', fee: '₹50,000/year' },
    { value: 'neet-11', label: 'NEET Preparation (Class 11)', fee: '₹50,000/year' },
    { value: 'neet-12', label: 'NEET Preparation (Class 12)', fee: '₹50,000/year' },
    { value: 'jee-integrated', label: 'JEE 2-Year Integrated', fee: '₹90,000' },
    { value: 'neet-integrated', label: 'NEET 2-Year Integrated', fee: '₹90,000' },
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (e.target.name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    setPaymentData({ ...paymentData, [e.target.name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <section id="admissions" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Admissions & Payment
            </h2>
            <p className="text-xl text-gray-600">
              Start your journey to excellence with Kranti Classes
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 ${step === 'form' ? 'text-orange-600' : step === 'payment' ? 'text-green-600' : 'text-green-600'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step === 'form' ? 'bg-orange-100 border-2 border-orange-600' : 'bg-green-100 border-2 border-green-600'}`}>
                  {step === 'form' ? '1' : <CheckCircle className="h-6 w-6" />}
                </div>
                <span className="hidden sm:inline font-semibold">Application</span>
              </div>

              <div className={`h-0.5 w-12 ${step === 'payment' || step === 'success' ? 'bg-green-600' : 'bg-gray-300'}`}></div>

              <div className={`flex items-center space-x-2 ${step === 'payment' ? 'text-orange-600' : step === 'success' ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step === 'payment' ? 'bg-orange-100 border-2 border-orange-600' : step === 'success' ? 'bg-green-100 border-2 border-green-600' : 'bg-gray-100 border-2 border-gray-300'}`}>
                  {step === 'success' ? <CheckCircle className="h-6 w-6" /> : '2'}
                </div>
                <span className="hidden sm:inline font-semibold">Payment</span>
              </div>

              <div className={`h-0.5 w-12 ${step === 'success' ? 'bg-green-600' : 'bg-gray-300'}`}></div>

              <div className={`flex items-center space-x-2 ${step === 'success' ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step === 'success' ? 'bg-green-100 border-2 border-green-600' : 'bg-gray-100 border-2 border-gray-300'}`}>
                  {step === 'success' ? <CheckCircle className="h-6 w-6" /> : '3'}
                </div>
                <span className="hidden sm:inline font-semibold">Confirm</span>
              </div>
            </div>
          </div>

          {step === 'form' && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Student Admission Form</h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="Parent's full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Current Class *
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                    >
                      <option value="">Select class</option>
                      {[6, 7, 8, 9, 10, 11, 12].map(c => (
                        <option key={c} value={c}>Class {c}</option>
                      ))}
                      <option value="dropper">Dropper</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Course Selection *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                  >
                    <option value="">Select a course</option>
                    {courses.map(course => (
                      <option key={course.value} value={course.value}>
                        {course.label} - {course.fee}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Previous School/Institute
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="Name of previous institution"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                    placeholder="Complete residential address"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          )}

          {step === 'payment' && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 p-3 rounded-xl">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Payment Details</h3>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Selected Course</p>
                    <p className="font-bold text-slate-900">
                      {courses.find(c => c.value === formData.course)?.label}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                    <p className="text-3xl font-bold text-orange-600">₹{paymentData.amount}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={handlePaymentChange}
                    required
                    maxLength={19}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Cardholder Name *
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={paymentData.cardName}
                    onChange={handlePaymentChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="Name on card"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={paymentData.expiryDate}
                      onChange={handlePaymentChange}
                      required
                      maxLength={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="MM/YY"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      CVV *
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={paymentData.cvv}
                      onChange={handlePaymentChange}
                      required
                      maxLength={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep('form')}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-slate-700 font-semibold py-4 rounded-lg transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <span>Complete Payment</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  Your payment information is secure and encrypted
                </p>
              </form>
            </div>
          )}

          {step === 'success' && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-12 text-center">
              <div className="inline-block bg-green-100 p-6 rounded-full mb-6">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Payment Successful!
              </h3>

              <p className="text-lg text-gray-600 mb-8">
                Welcome to Kranti Classes, {formData.studentName}!<br />
                Your admission has been confirmed.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl mb-8 max-w-md mx-auto">
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transaction ID:</span>
                    <span className="font-mono font-semibold">KRC{Date.now().toString().slice(-8)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-semibold text-green-600">₹{paymentData.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-slate-900 mb-2">What's Next?</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Check your email for confirmation and class schedule</li>
                  <li>Our team will contact you within 24 hours</li>
                  <li>Collect your study materials from the office</li>
                  <li>Attend the orientation session next week</li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setStep('form');
                  setFormData({
                    studentName: '',
                    parentName: '',
                    email: '',
                    phone: '',
                    address: '',
                    dob: '',
                    class: '',
                    course: '',
                    previousSchool: '',
                  });
                  setPaymentData({
                    cardNumber: '',
                    cardName: '',
                    expiryDate: '',
                    cvv: '',
                    amount: '50000',
                  });
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Admissions;
