import { useState, useEffect } from "react";
import { useExamsQuery, useEventItemsQuery } from "./../../../api/exams";
import s from "./ShareTicket.module.scss";

function ShareTicket() {
  const { data: exams } = useExamsQuery();
  const [selectedExam, setSelectedExam] = useState("");

  const handleExamChange = (e) => setSelectedExam(e.target.value);

  return (
    <div className={s.shareTicket}>
      <div className={s.pageHeader}>
        <div className={s.headerTitle}>
          <h1>Share tickets</h1>
        </div>
      </div>

      <section>
        <div className={s.card}>
          <label
            htmlFor="exam"
            style={{ fontSize: "20px", marginRight: "30px" }}
          >
            Exam
          </label>
          <select
            id="exam"
            name="exam"
            value={selectedExam}
            onChange={handleExamChange}
            style={{ fontSize: "20px" }}
          >
            <option value="" label="Choose exam" disabled></option>
            {exams?.map((exam) => (
              <option key={exam.examid} value={exam.examid}>
                {exam.Name}
              </option>
            ))}
          </select>

          <button>Clear All</button>
          <button>Confirm to share</button>
        </div>
      </section>
    </div>
  );
}

export default ShareTicket;
