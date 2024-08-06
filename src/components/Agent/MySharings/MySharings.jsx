import React from "react";
import { Row, Col } from "react-bootstrap";
import s from "./MySharings.module.scss";

function MySharings() {
  return (
    <div className={s.shareTicket}>
      <div className={s.pageHeader}>
        <div className={s.headerTitle}>
          <h1>My Sharings</h1>
        </div>
      </div>

      <section>
        <div className={s.card}>
          <label
            htmlFor="language"
            style={{ fontSize: "20px", marginRight: "30px" }}
          >
            Language
          </label>
          <select id="language" name="language" style={{ fontSize: "20px" }}>
            <option value="English">English</option>
          </select>

          <label
            htmlFor="exam"
            style={{ fontSize: "20px", marginRight: "30px" }}
          >
            Exam
          </label>
          <select id="exam" name="exam" style={{ fontSize: "20px" }}>
            {/* <option value="" label="Choose exam" disabled=""></option> */}
            <option value="Writing">IELTS Writing Academic trial</option>
            <option value="Listening">IELTS Listening trial</option>
            <option value="Reading">IELTS Reading Academic trial</option>
          </select>
        </div>

        {/* {selectedExam && <div className={s.card}></div>} */}
        <Row>
          <div className={s.card}>
            <Col md={8}>
              <div>
                <div className={s.emailAndName}>
                  <p>1. inquiry@discuae.com</p>
                  <p>Leah Rosario</p>
                </div>
                <div className={s.ticket}>
                  <p>- standart-R: 5 ticket</p>
                  <p>Qty:1 </p>
                  <button className={s.shareBtn}>re-Share</button>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <p>Status: Expired</p>
            </Col>
          </div>
        </Row>
      </section>
    </div>
  );
}

export default MySharings;
