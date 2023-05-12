import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleJobDetails() {

  const { case_id } = useParams();
  const [caseInfo, setCaseInfo] = useState([]);
  const data = require('../../../data/cases.json')
  const item = data.find((item) => item.case_id === case_id);

  return (
    <div>
      <h2>{item.school_name}</h2>
      <section>
        <p>Address:</p>
        <p>{item.school_address}</p>
      </section>
      <section>
        <div>
          <p>Date Posted</p>
          <p>{item.date_posted}</p>
        </div>
        <div>
          <p>Type:</p>
          <p>{item.type}</p>
        </div>
      </section>
      <section>
        <p>Student Information</p>
        <p>ID: {item.student_id}</p>
        <p>DOB: {item.student_dob}</p>
        <p>Grade level: {item.student_grade}</p>
      </section>
      <div>
        <button >ACCEPT JOB</button>
        <button>GO BACK</button>
      </div>
    </div>
  );
}

export default SingleJobDetails;