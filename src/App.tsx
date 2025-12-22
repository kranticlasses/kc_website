import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Faculty from './pages/Faculty';
import Results from './pages/Results';
import Contact from './pages/Contact';
import Parents from './pages/Parents';
import Scholarship from './pages/Scholarship';
import Admissions from './pages/Admissions';
import BlogList from './pages/blog/BlogList';
import BlogPost from './pages/blog/BlogPost';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import RefundPolicy from './pages/legal/RefundPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="results" element={<Results />} />
          <Route path="contact" element={<Contact />} />
          <Route path="parents" element={<Parents />} />
          <Route path="scholarship" element={<Scholarship />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="legal/terms-conditions" element={<TermsConditions />} />
          <Route path="legal/refund-policy" element={<RefundPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
