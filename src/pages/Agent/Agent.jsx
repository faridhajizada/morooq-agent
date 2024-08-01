import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Agent/Header/Header";
import Footer from "../../components/Agent/Footer/Footer";
import AcquireTicket from "../../components/Agent/AcquireTicket/AcquireTicket";
import ShareTicket from "../../components/Agent/ShareTicket/ShareTicket";
import StripeAcquisition from "../../components/Agent/StripeAcquisition/StripeAcquisition";

import s from "./Agent.module.scss";
import PersonalDetails from "../../components/Agent/PersonalDetails/PersonalDetails";

function Agent() {
  return (
    <>
      <Header />
      <main className={s.name}>
        <section>
          <Container fluid>
            <Row>
              <Col className={s.col} md={2}>
                <Sidebar />
              </Col>
              <Col
                md={10}
                className={s.col}
                style={{ backgroundColor: "white" }}
              >
                <Routes>
                  <Route path="/" element={<AcquireTicket />} />
                  <Route path="/acquire-tickets" element={<AcquireTicket />} />
                  <Route path="/share-tickets" element={<ShareTicket />} />
                  <Route
                    path="/stripe-acquisition"
                    element={<StripeAcquisition />}
                  />
                  <Route
                    path="/personal-details"
                    element={<PersonalDetails />}
                  />
                </Routes>
                <Footer />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Agent;
