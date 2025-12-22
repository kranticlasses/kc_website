import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import JEEAdvanced2024Strategy from './posts/JEEAdvanced2024Strategy';
import CBSEClass10Guide2026 from './posts/CBSEClass10Guide2026';
import Class12PhysicsTopics2026 from './posts/Class12PhysicsTopics2026';

// Map of post IDs to their corresponding components
const POST_COMPONENTS: { [key: string]: React.ComponentType } = {
    'jee-advanced-2024-strategies': JEEAdvanced2024Strategy,
    'cbse-class-10-guide-2026': CBSEClass10Guide2026,
    'class-12-physics-board-2026': Class12PhysicsTopics2026,
    // Add more posts here as they are created
};

const BlogPost = () => {
    const { id } = useParams<{ id: string }>();

    // Get the component for the current post ID, or use a default not found component
    const PostComponent = id && POST_COMPONENTS[id];

    if (!PostComponent) {
        return (
            <div className="container mx-auto px-4 py-12 max-w-3xl text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Post Not Found</h1>
                <p className="text-gray-600 mb-6">The requested blog post could not be found.</p>
                <Link
                    to="/blog"
                    className="inline-flex items-center text-blue-600 hover:underline"
                >
                    <ArrowLeft size={16} className="mr-2" /> Back to Blog
                </Link>
            </div>
        );
    }

    return <PostComponent />;
};

export default BlogPost;
