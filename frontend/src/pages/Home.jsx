// frontend/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const studentIcon = "https://img.icons8.com/ios-filled/24/4f46e5/student.png";
const recruiterIcon = "https://img.icons8.com/ios-filled/24/10b981/briefcase.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="content-container">
        <div className="text-center intro-text">
          <h1 className="title">
            Welcome to <span className="highlight">CVAlign</span>
          </h1>
          <p className="subtitle">
            The intelligent platform that connects talented students with top recruiters. 
            Upload your CV, find perfect job matches, and accelerate your career journey.
          </p>
        </div>

        {/* Features section (your original feature boxes) */}
        <div className="features-grid">
          <div className="feature-card indigo-bg">
            <div className="icon-circle indigo-circle">
              <svg
                className="feature-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="feature-title">Smart CV Matching</h3>
            <p className="feature-desc">
              Our AI analyzes your CV and matches you with the most relevant job opportunities.
            </p>
          </div>

          <div className="feature-card green-bg">
            <div className="icon-circle green-circle">
              <svg
                className="feature-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                />
              </svg>
            </div>
            <h3 className="feature-title">Easy Job Applications</h3>
            <p className="feature-desc">
              Apply to multiple jobs with just a few clicks using your uploaded CVs.
            </p>
          </div>

          <div className="feature-card purple-bg">
            <div className="icon-circle purple-circle">
              <svg
                className="feature-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="feature-title">Real-time Analytics</h3>
            <p className="feature-desc">
              Track your application status and get insights to improve your job search.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="how-it-works">
          <h2 className="section-title">How It Works</h2>
          <div className="how-grid">
            <div>
              <h3 className="student-title">For Students</h3>
              <ol className="steps-list">
                <li><span className="step-num">1</span>Create your profile and upload up to 3 CVs</li>
                <li><span className="step-num">2</span>Browse and search for relevant job opportunities</li>
                <li><span className="step-num">3</span>Apply with the most suitable CV for each job</li>
                <li><span className="step-num">4</span>Track applications and receive feedback</li>
              </ol>
            </div>

            <div>
              <h3 className="recruiter-title">For Recruiters</h3>
              <ol className="steps-list">
                <li><span className="step-num recruiter-step">1</span>Register and create your company profile</li>
                <li><span className="step-num recruiter-step">2</span>Post jobs with detailed descriptions and requirements</li>
                <li><span className="step-num recruiter-step">3</span>Review applications and candidate CVs</li>
                <li><span className="step-num recruiter-step">4</span>Score candidates and provide feedback</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Added Centered Login Buttons */}
       
      </div>
    </div>
  );
}
