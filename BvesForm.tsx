import React, { useState, ChangeEvent, FormEvent } from "react";
import "./from.css";

const BvesForm: React.FC = () => {
  // Category state
  const [category, setCategory] = useState("");
  // Section visibility
  const [showStudent, setShowStudent] = useState(false);
  const [showProfessional, setShowProfessional] = useState(false);
  const [showOther, setShowOther] = useState(false);
  // Mutually exclusive course checkboxes
  const [completed, setCompleted] = useState(false);
  const [year, setYear] = useState(false);
  // Declaration checkboxes
  const [declare, setDeclare] = useState(false);
  const [terms, setTerms] = useState(false);
  // Success message
  const [success, setSuccess] = useState(false);

  // Category change handler
  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCategory(value);
    setShowStudent(value === "Student");
    setShowProfessional(value === "Professional");
    setShowOther(value === "Other");
  };

  // Mutually exclusive course checkboxes
  const handleCompletedChange = () => {
    setCompleted(true);
    setYear(false);
  };
  const handleYearChange = () => {
    setYear(true);
    setCompleted(false);
  };

  // Declaration checkboxes (both can be checked)
  const handleDeclareChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeclare(e.target.checked);
  };
  const handleTermsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerms(e.target.checked);
  };

  // Form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (declare && terms) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2500);
      // Optionally reset form fields here
    }
  };

  return (
    <div className="form-container">
      <div className="notice-box">
        <div className="notice-header">
          ⚠️ <span>Important Information Before Joining</span>
        </div>
        <div className="notice-content">
          <p>
            Dear User, Before you fill out the membership form of
            <strong> BVES (Bahujan Vidyarthi Ekta Sangh)</strong>, please note the following:
          </p>
          <ul>
            <li>Your personal details (Name, Email, Contact Number, Address, etc.) will be kept completely confidential.</li>
            <li>No information will ever be shared, sold, or misused in any manner.</li>
            <li>The data you provide will be used only for organizational purposes like communication, verification, and updates.</li>
            <li className="positive">Your trust and privacy are our top priority.</li>
          </ul>
          <hr />
          <ul>
            <li>आपकी व्यक्तिगत जानकारी (नाम, ईमेल, संपर्क नंबर, पता आदि) पूरी तरह से गोपनीय रखी जाएगी।</li>
            <li>कोई भी जानकारी कभी भी साझा, बेची या किसी भी तरीके से दुरुपयोग नहीं की जाएगी।</li>
            <li>उपयोगकर्ता द्वारा प्रदान किया गया डेटा केवल संचार, सत्यापन और अपडेट जैसे संगठनात्मक उद्देश्यों के लिए उपयोग किया जाएगा। </li>
            <li className="positive">आपका विश्वास और गोपनीयता हमारी सर्वोच्च प्राथमिकता है।</li>
          </ul>
        </div>
      </div>
      <h2>BVES Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" required />
        </div>
        {/* Gender */}
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        {/* Profile Photo */}
        <div className="form-group">
          <label htmlFor="photo">Profile Photo Upload</label>
          <input type="file" id="photo" name="photo" accept="image/*" />
        </div>
        {/* Mobile Number */}
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input type="tel" id="mobile" name="mobile" required />
        </div>
        {/* Email ID */}
        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" name="email" required />
        </div>
        {/* Full Address */}
        <div className="form-group">
          <label htmlFor="address">Full Address</label>
          <textarea id="address" name="address" rows={2}></textarea>
        </div>
        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <div className="form-options">
            <label>
              <input
                type="radio"
                name="category"
                value="Professional"
                checked={category === "Professional"}
                onChange={handleCategoryChange}
              />{" "}
              Professional
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Student"
                checked={category === "Student"}
                onChange={handleCategoryChange}
              />{" "}
              Student
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Other"
                checked={category === "Other"}
                onChange={handleCategoryChange}
              />{" "}
              Other
            </label>
          </div>
        </div>
        {/* Student Details */}
        {showStudent && (
          <div id="student-details">
            <h3>Student Details</h3>
            <div className="form-group">
              <label>Institution / College / School Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Current Course</label>
              <select>
                <option value="">Select Course</option>
                <option>10th</option>
                <option>12th</option>
                <option>B.A</option>
                <option>B.Sc</option>
                <option>B.Com</option>
                <option>BCA</option>
                <option>B.Tech</option>
                <option>M.A</option>
                <option>M.Sc</option>
                <option>M.Com</option>
                <option>MCA</option>
                <option>M.Tech</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-options">
              <label>
                <input
                  type="checkbox"
                  id="course-completed"
                  checked={completed}
                  onChange={handleCompletedChange}
                />{" "}
                Completed
              </label>
              <label>
                <input
                  type="checkbox"
                  id="course-year"
                  checked={year}
                  onChange={handleYearChange}
                />{" "}
                Year
              </label>
            </div>
            <div className="form-group">
              <label>Year</label>
              <select id="academic-year" name="academic-year">
                <option value="">Select Year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
                <option>5th Year</option>
              </select>
            </div>
            <div className="form-group">
              <label>Stream / Subject</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Previous Qualification</label>
              <input type="text" />
            </div>
          </div>
        )}
        {/* Professional Details */}
        {showProfessional && (
          <div id="professional-details">
            <h3>Professional Details</h3>
            <div className="form-group">
              <label>Organization / Company Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Designation / Job Title</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Department / Field</label>
              <select>
                <option value="">Select Department</option>
                <option>IT</option>
                <option>Teaching</option>
                <option>Medical</option>
                <option>Finance</option>
                <option>Management</option>
                <option>Engineering</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Work Experience (in years)</label>
              <select>
                <option value="">Select Years</option>
                <option>0 - 1 Years</option>
                <option>2 - 3 Years</option>
                <option>4 - 5 Years</option>
                <option>6 - 10 Years</option>
                <option>11 - 15 Years</option>
                <option>16 - 20 Years</option>
                <option>21 - 30 Years</option>
                <option>More than 30 Years</option>
              </select>
            </div>
            <div className="form-group">
              <label>Qualification / Degree</label>
              <select>
                <option value="">Select Qualification</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>PhD</option>
                <option>Diploma</option>
                <option>Certification</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Office Address</label>
              <textarea rows={2}></textarea>
            </div>
          </div>
        )}
        {/* Other Details */}
        {showOther && (
          <div id="other-details">
            <h3>Other Details</h3>
            <div className="form-group">
              <label>Occupation</label>
              <input type="text" />
            </div>
          </div>
        )}
        {/* Declaration */}
        <div className="form-check">
          <input
            type="checkbox"
            id="declare"
            checked={declare}
            onChange={handleDeclareChange}
            required
          />
          <label htmlFor="declare">I declare that the information provided is true.</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="terms"
            checked={terms}
            onChange={handleTermsChange}
            required
          />
          <label htmlFor="terms">I agree to the Terms & Conditions.</label>
        </div>
        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
      {success && (
        <div id="successMsg" className="success">
          ✅ Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default BvesForm;