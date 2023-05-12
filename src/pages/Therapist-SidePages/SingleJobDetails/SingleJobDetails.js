import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SingleJobDetails.scss';
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";

function SingleJobDetails() {

  const { case_id } = useParams();
  const [caseInfo, setCaseInfo] = useState([]);
  const data = require('../../../data/cases.json')
  const item = data.find((item) => item.case_id === case_id);

  return (
    <>
    <Nav/>

    <div className="jobdetails">
      <header className='jobdetails__header'>
        <h2>{item.school_name}</h2>
      </header>

      <section className="jobdetails__address">
        <p className="jobdetails__address-header">ADDRESS:</p>
        <p className="jobdetails__address-info">{item.school_address}</p>
      </section>

      <section className="jobdetails__info">
        <div className="jobdetails__info-date">
          <p className="jobdetails__info-date-header">DATE POSTED</p>
          <p className="jobdetails__info-date-info">{item.date_posted}</p>
        </div>
        <div className="jobdetails__info-type">
          <p className="jobdetails__info-type-header">TYPE</p>
          <p className="jobdetails__info-type-info">{item.type}</p>
        </div>
      </section>

      <section className="jobdetails__student">
        <p className="jobdetails__student-header">STUDENT INFORMATION</p>
        <p className="jobdetails__student-id">ID Number: {item.student_id}</p>
        <p className="jobdetails__student-dob">Date of Birth: {item.student_dob}</p>
        <p className="jobdetails__student-grade">Grade Level: {item.student_grade}</p>
      </section>

      <div className="jobdetails-buttons">
        <button className="jobdetails-buttons__accept">ACCEPT JOB</button>
        <button className="jobdetails-buttons__goback">GO BACK</button>
      </div>

    </div>
    <Footer/>
    </>
  );
}

export default SingleJobDetails;