Website Specification Document: Kranti Classes

Version: 1.1 (Revised)  
Date: October 2023  
Project Owner: Ila Kranti  

---

# 1. Executive Summary

Kranti Classes is a new educational coaching institute focusing on Foundation (Class 6–10) and Competitive Exams (JEE/NEET). The website serves as the primary digital storefront to build trust, showcase results, and facilitate streamlined admissions.

**Scope Change (v1.1):** We are excluding complex LMS features (Student Login, Attendance, Marks Dashboard). The focus is purely on Marketing, Lead Generation, and Transactional Registration (Admission Fees/Test Series purchases).

**Primary Goal:** Convert visitors into leads (via Demo Class bookings) and facilitate direct payments for admissions/test series.  
**Target Audience:** Parents (looking for trust/results) and Students (looking for resources/ease of learning).

---

# 2. Design Philosophy & UX Guidelines

## A. Visual Identity (Trust & Warmth)

### Color Palette:
- **Primary:** Deep Blue or Navy (Symbolizing Trust, Education, Discipline)  
- **Secondary:** Warm Orange or Golden Yellow (Symbolizing Energy, Future, Success)  
- **Background:** Clean White or very light Grey for readability.  

### Typography:
- **Headings:** Bold, sans-serif (e.g., Montserrat or Poppins).  
- **Body:** High-legibility serif or sans-serif (e.g., Open Sans or Lato).  

### Imagery:
- Real photos of the facility and faculty preferred over stock images.  
- Images of happy, engaged students.  
- Icons should be outline-style or colorful flat icons.

## B. Navigation Strategy (Child-Friendly)
- **Mega Menu:** Avoid; keep top-level items simple.
- **Sticky Header:** Always visible on scroll.
- **Clear CTAs:** Large, distinct buttons such as **Join Now** (pill-shaped).

---

# 3. Sitemap Structure

- Home (Landing Page)  
- About Us (Mission, Vision, Director)  
- Courses  
  - Foundation (6–10)  
  - Competitive (11–12 JEE/NEET)  
  - Crash Courses  
- Results (Toppers & Testimonials)  
- Faculty  
- Free Resources (Downloads: Notes/PYQs)  
- Admissions & Payments (Registration Form & Payment Gateway)  
- Contact Us  

---

# 4. Detailed Page Specifications

## 1. Home Page
**Hero Section:**  
- Headline: *"Empowering Students, Shaping Futures."*  
- Sub-headline: *"Expert coaching for Class 6–12, JEE, & NEET."*  
- Buttons: **[Book Free Demo]** (Primary), **[Pay Admission Fee]** (Secondary/Outline)  
- Visual: High-quality image of a student or teacher.

**Trust Bar (4 Icons):**  
- "10+ Years Experience"  
- "1000+ Students"  
- "Top Results"  
- "Expert Faculty"

**Course Overview:** Three cards (Foundation, Boards, Competitive).

**Topper’s Spotlight:** Sliding carousel.

**Director's Excerpt:** Quote from Ila Kranti + "Read More".

---

## 2. About Us
- Our Story  
- Mission & Vision  
- Director’s Message (personal letter)  
- Professional headshot of Ila Kranti  
- Key text: *"As a teacher, I believe every student has potential..."*

---

## 3. Courses Page
Tabbed Interface:  
- **Foundation (6–10)**  
- **Board + Competitive (11–12)**  
- **Crash Courses**

**Course Detail Card Includes:**  
- Target Audience  
- Subject Coverage  
- Batch Start Date  
- Buttons: **[Download Syllabus PDF]**, **[Enquire Now]**

---

## 4. Faculty Page
- Grid layout  
- Card fields: Photo, Name, Designation, Qualification, Experience  
- Tone: Professional but friendly

---

## 5. Results & Testimonials
**Wall of Fame:** Grid with student photo, name, exam, rank/score.  
**Statistics:** Animated counters.  
**Testimonials:**  
- Video (YouTube Shorts)  
- Text-based parent testimonials  

---

## 6. Free Resources (Lead Generation)
- Formula sheets, PYQs  
- **Gated Downloads:** Popup request for Name & Phone Number → PDF download.

---

## 7. Admissions & Payments (CRITICAL SECTION)

Purpose: Replace physical admission desk.

### Registration Form Fields (Mandatory)
- Student Full Name  
- Parent/Guardian Name  
- Mobile Number (WhatsApp enabled)  
- Email Address  
- Current Class (6–12)  
- Course Interested In  
- Payment Type  
  - Registration Fee – ₹500  
  - Test Series – ₹1500  
  - Tuition Installment  

### Payment Flow
1. User fills form  
2. Clicks **Proceed to Pay**  
3. Data saved to database  
4. Redirect to Razorpay/Paytm checkout  

**Success:** "Thank You" page + Transaction ID + email receipt  
**Failure:** Error message + retry option

---

## 8. Contact
- Address, Phone, Email  
- Google Maps embed  
- FAQ (Accordion)

---

# 5. Functional Requirements (Tech Stack)

## A. Core Features
- **CMS:** WordPress or Custom React Admin with Firebase/Supabase  
- **Responsive:** Mobile-first  
- **WhatsApp Integration:** Floating chat button  

## B. Payment Gateway Integration
- Razorpay/Paytm (Razorpay recommended)  
- SSL required  
- Optional webhook for automated SMS/email  

## C. Analytics & SEO
- Google Analytics 4  
- Meta Pixel  
- On-page SEO for coaching keywords  

---

# 6. Implementation Checklist for Developer

- [ ] Hosting, Domain, SSL setup  
- [ ] Mobile-friendly UI pages  
- [ ] Forms:
  - [ ] Book Demo  
  - [ ] Download Resource (lead capture)  
- **Payments:**  
  - [ ] Admissions page form  
  - [ ] Razorpay/Paytm API integration  
  - [ ] Success/Failure pages  
- [ ] Upload faculty photos and topper results  
- [ ] Test payment with ₹1 transaction  

---
