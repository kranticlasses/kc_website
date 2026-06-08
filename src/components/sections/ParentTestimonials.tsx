import { Star } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ParentTestimonials = () => {
    const testimonials = [
        {
            name: "Ajitsinh Chauhan",
            role: "Parent",
            text: "The teachers at Kranti Classes are excellent and create a positive, supportive learning environment where students feel comfortable asking questions. We are extremely happy with the guidance provided. I have seen a significant improvement in my child's confidence and overall development. Thank you for being such an important part of my child's educational journey."
        },
        {
            name: "Namita Patil",
            role: "Parent",
            text: "I am extremely happy with the way Ilakranti Ma'am teaches my child. Her patience, dedication, and ability to explain complex concepts in a simple manner have helped my child understand subjects much better. I can clearly see improvement in my child's academic performance and confidence. Thank you for your hard work and support."
        },
        {
            name: "Manisha Patel",
            role: "Parent",
            text: "I am very satisfied with Kranti Classes. I have seen noticeable improvement in my child's studies and confidence. Ilakranti Ma'am teaches with dedication and makes even difficult subjects easy to understand. The regular tests, proper guidance, and personal attention contribute greatly to overall development. I highly recommend Kranti Classes to other parents."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        ⭐ What Parents Say About Kranti Classes
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Trusted by parents for quality teaching, personal attention, and student growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <Card 
                            key={index} 
                            className="p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className="fill-orange-400 text-orange-400" />
                                ))}
                            </div>
                            
                            <p className="text-gray-700 italic mb-8 flex-grow leading-relaxed">
                                "{testimonial.text}"
                            </p>
                            
                            <div className="mt-auto pt-6 border-t border-gray-50">
                                <h4 className="font-bold text-gray-900 text-lg">— {testimonial.name}</h4>
                                <p className="text-gray-500 text-sm mb-2">{testimonial.role}</p>
                                <span className="inline-flex items-center text-xs font-semibold tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase">
                                    Verified Google Review
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center bg-blue-50 rounded-3xl p-10 md:p-16">
                    <h3 className="text-2xl md:text-4xl font-bold text-blue-900 mb-6">
                        Ready to Help Your Child Excel?
                    </h3>
                    <Button to="/contact" variant="secondary" className="text-lg px-10 py-4 shadow-xl">
                        Book Free Demo Class
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ParentTestimonials;
