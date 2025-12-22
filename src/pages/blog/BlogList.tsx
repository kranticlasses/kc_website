import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import Card from '../../components/ui/Card';

const BlogList = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'JEE', 'NEET', 'Boards', 'Study Tips'];

    const posts = [
        {
            id: 'jee-advanced-2024-strategies',
            title: "JEE Advanced 2026: 5 Proven Strategies for Top 1000 Rank",
            excerpt: "Discover expert strategies and study plans to crack JEE Advanced with a top 1000 rank in your first attempt.",
            date: "Oct 15, 2023",
            category: "JEE",
            readTime: "8 min read",
            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 'cbse-class-10-guide-2026',
            title: "CBSE Class 10 Board Exams: Complete Preparation Guide 2026",
            excerpt: "Master your Class 10 board exams with our comprehensive preparation guide, time management tips, and subject-wise strategy.",
            date: "Oct 10, 2023",
            category: "Boards",
            readTime: "7 min read",
            img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 'class-12-physics-board-2026',
            title: "Class 12 Physics: Most Important Topics for Board Exams 2026",
            excerpt: "Focus on these high-weightage Physics topics to maximize your score in the upcoming CBSE Class 12 Board Exams.",
            date: "Sep 22, 2023",
            category: "Boards",
            readTime: "5 min read",
            img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
    ];

    const filteredPosts = activeCategory === 'All'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <>
            <Helmet>
                <title>Blog & Study Resources | Kranti Classes - JEE, NEET & Board Exam Preparation</title>
                <meta name="description" content="Get expert study tips, exam strategies, and subject guides for JEE, NEET, and Board Exams. Stay updated with the latest exam patterns and preparation techniques from Kranti Classes educators." />
                <meta name="keywords" content="JEE preparation, NEET 2024, Board exam tips, study strategies, exam preparation, Kranti Classes blog" />
            </Helmet>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Latest Updates & Study Resources</h1>
                    <p className="text-xl text-gray-600">
                        Expert insights, exam strategies, and study tips from Kranti Classes educators to help you excel in JEE, NEET, and Board Exams.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <article key={post.id} className="group">
                            <Link to={`/blog/${post.id}`} className="h-full flex flex-col">
                                <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                                    <div className="h-48 overflow-hidden rounded-t-lg">
                                        <img
                                            src={post.img}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <User className="w-4 h-4 mr-1" />
                                                Kranti Classes Faculty
                                            </div>
                                            <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:underline">
                                                Read More
                                                <ArrowRight className="ml-1 w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No articles found in this category. Please check back soon for updates!</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogList;
