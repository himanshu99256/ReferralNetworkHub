import React, { useState } from "react";
import styles from "./Form.module.css";
import Preferences from "./Preferences/Preferences";
import ResumeUpload from "../Buttons/ResumeUpload/ResumeUpload";
import ImageSection from "./ImageSection/ImageSection";
import ProfessionalInfo from "./ProfessionalInfo/ProfessionalInfo";
import WorkHistory from "./WorkHistory/WorkHistory";
// import ChipTextField from "./ChipTextField/ChipTextField";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState("Experienced");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <ImageSection />
        <div className={styles.formSection}>
          {/* <input type="file" className={styles.fileInput} /> */}
          <ResumeUpload />
          <div className={styles.personalInfo}>
            <h3>Personal Information</h3>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Full Name"
                className={styles.inputField}
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Location (City, Country)"
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Phone Number"
                className={styles.inputField}
              />
            </div>
          </div>
          <ProfessionalInfo
            handleOptionClick={handleOptionClick}
            selectedOption={selectedOption}
          />
          <div className={styles.educationInfo}>
            <h3>Education</h3>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Highest Degree Attained"
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="University/Institution Name"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Field of Study"
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Graduation Year"
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.skillsInfo}>
            <h3>Skills and Expertise</h3>
            <div className={styles.inputRow}>
              {/* <ChipTextField placeholder={'Key Skills'} className={styles.inputField}/>
              <ChipTextField placeholder={'Certifications or Licenses'}  className={styles.inputField}/> */}
              <input
                type="text"
                placeholder="Key Skills"
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Certifications or Licenses"
                className={styles.inputField}
              />
            </div>
          </div>
          <WorkHistory isDisabled={selectedOption === "Fresher"} />
          <Preferences />
          <div className={styles.additionalInfo}>
            <h3>Additional Information</h3>
            <textarea
              placeholder="Personal Bio or Summary (in 200 Words Only)"
              className={styles.textArea}
            ></textarea>
          </div>
          <div className={styles.footerInputes}>
            <div className={styles.termsAndConditions}>
              <label>
                <input type="checkbox" /> Accept Terms & Conditions
              </label>
            </div>
            <button className={styles.saveButton}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
