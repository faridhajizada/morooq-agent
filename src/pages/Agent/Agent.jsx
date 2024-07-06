import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Agent/Header/Header";
import AcquireTicket from "../../components/Agent/AcquireTicket/AcquireTicket";
import ShareTicket from "../../components/Agent/ShareTicket/ShareTicket";

import s from "./Agent.module.scss";

function Agent() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container fluid>
            <Row>
              <Col className={s.col} md={2}>
                <Sidebar />
              </Col>
              <Col md={10} style={{ backgroundColor: "white" }}>
                <Routes>
                  <Route path="/" element={<AcquireTicket />} />
                  <Route path="/acquire-tickets" element={<AcquireTicket />} />
                  <Route path="/share-tickets" element={<ShareTicket />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Agent;