import { Helmet } from 'react-helmet-async';
import { Download, FileText, Bell, CheckSquare, Calendar, FolderOpen } from 'lucide-react';

interface DownloadItem {
    id: string;
    title: string;
    description: string;
    fileUrl: string;
    fileSize: string;
    fileType: string;
    category: 'updates' | 'notes' | 'checklists' | 'timetable' | 'documents';
}

const Downloads = () => {
    const downloadItems: DownloadItem[] = [
        // Updates
        {
            id: 'update-1',
            title: 'Important Notice - January 2026',
            description: 'Latest updates regarding exam schedules and important announcements',
            fileUrl: '/downloads/updates/important-notice-jan-2026.txt',
            fileSize: '45 KB',
            fileType: 'TXT',
            category: 'updates'
        },
        // Notes
        {
            id: 'notes-1',
            title: 'Physics Chapter 1 Notes',
            description: 'Comprehensive notes covering all key concepts and formulas',
            fileUrl: '/downloads/notes/physics-chapter-1-notes.txt',
            fileSize: '1.2 MB',
            fileType: 'TXT',
            category: 'notes'
        },
        {
            id: 'notes-2',
            title: 'Chemistry Organic Notes',
            description: 'Complete organic chemistry notes with reactions and mechanisms',
            fileUrl: '/downloads/notes/chemistry-organic-notes.txt',
            fileSize: '890 KB',
            fileType: 'TXT',
            category: 'notes'
        },
        // Checklists
        {
            id: 'checklist-1',
            title: 'JEE Preparation Checklist',
            description: 'Complete preparation checklist for JEE Main & Advanced',
            fileUrl: '/downloads/checklists/jee-preparation-checklist.txt',
            fileSize: '125 KB',
            fileType: 'TXT',
            category: 'checklists'
        },
        // Timetable
        {
            id: 'timetable-1',
            title: 'Class 10 Weekly Schedule',
            description: 'Weekly class schedule for Class 10 students',
            fileUrl: '/downloads/timetable/class-10-weekly-schedule.txt',
            fileSize: '78 KB',
            fileType: 'TXT',
            category: 'timetable'
        },
        // Documents
        {
            id: 'document-1',
            title: 'Admission Form',
            description: 'Download and fill the admission form for new enrollments',
            fileUrl: '/downloads/documents/admission-form.txt',
            fileSize: '156 KB',
            fileType: 'TXT',
            category: 'documents'
        }
    ];

    const categories = [
        {
            id: 'updates',
            name: 'Updates & Notices',
            icon: Bell,
            description: 'Latest announcements, news, and important updates',
            color: 'from-orange-500 to-orange-600'
        },
        {
            id: 'notes',
            name: 'Study Notes',
            icon: FileText,
            description: 'Subject-wise comprehensive notes and study materials',
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 'checklists',
            name: 'Preparation Checklists',
            icon: CheckSquare,
            description: 'Exam preparation checklists and revision guides',
            color: 'from-green-500 to-green-600'
        },
        {
            id: 'timetable',
            name: 'Timetables & Schedules',
            icon: Calendar,
            description: 'Class schedules, exam timetables, and important dates',
            color: 'from-purple-500 to-purple-600'
        },
        {
            id: 'documents',
            name: 'Important Documents',
            icon: FolderOpen,
            description: 'Forms, applications, and other essential documents',
            color: 'from-red-500 to-red-600'
        }
    ];

    const getCategoryItems = (categoryId: string) => {
        return downloadItems.filter(item => item.category === categoryId);
    };

    const handleDownload = (fileUrl: string, fileName: string) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Helmet>
                <title>Downloads & Resources | Kranti Classes</title>
                <meta name="description" content="Download study materials, notes, timetables, and important documents for JEE, NEET, and Foundation courses at Kranti Classes." />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="flex justify-center mb-6">
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                                    <Download size={48} className="text-white" />
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Downloads & Resources
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100">
                                Access study materials, notes, timetables, and important documents - all in one place
                            </p>
                        </div>
                    </div>
                </section>

                {/* Downloads Sections */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        {categories.map((category) => {
                            const categoryItems = getCategoryItems(category.id);
                            if (categoryItems.length === 0) return null;

                            const IconComponent = category.icon;

                            return (
                                <div key={category.id} className="mb-16">
                                    {/* Category Header */}
                                    <div className="mb-8">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg shadow-lg`}>
                                                <IconComponent size={28} className="text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-bold text-gray-800">
                                                    {category.name}
                                                </h2>
                                                <p className="text-gray-600 mt-1">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="h-1 bg-gradient-to-r from-gray-300 to-transparent rounded-full"></div>
                                    </div>

                                    {/* Category Items Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {categoryItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group"
                                            >
                                                <div className="p-6">
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div className={`bg-gradient-to-r ${category.color} p-2 rounded-lg`}>
                                                            <FileText size={24} className="text-white" />
                                                        </div>
                                                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                            {item.fileType}
                                                        </span>
                                                    </div>

                                                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                                        {item.description}
                                                    </p>

                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-gray-500 font-medium">
                                                            {item.fileSize}
                                                        </span>
                                                        <button
                                                            onClick={() => handleDownload(item.fileUrl, item.title)}
                                                            className={`flex items-center gap-2 bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                                                        >
                                                            <Download size={16} />
                                                            <span>Download</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Help Section */}
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Need Help with Downloads?
                            </h2>
                            <p className="text-blue-100 mb-6">
                                If you're having trouble accessing any materials or need additional resources, please contact our support team.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                Contact Support
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Downloads;
