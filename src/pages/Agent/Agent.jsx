// import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Agent/Header/Header";
import AcquireTicket from "../../components/Agent/AcquireTicket/AcquireTicket";
// import AddEmployer from '../../components/Employer/AddEmployer/AddEmployer';
// import ListEmployer from '../../components/Employer/ListEmployer/ListEmployer';
// import CreateTable from '../../components/Employer/CreateTable/CreateTable';
// import ProfileInfo from '../../components/Employer/ProfileInfo/ProfileInfo';
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
              <Col md={10}>
                <AcquireTicket />

                {/* <Routes>
                  <Route path="/profile-info" element={<ProfileInfo />} />
                  <Route path="/add-employer" element={<AddEmployer />} />
                  <Route path="/list-employer" element={<ListEmployer />} />
                  <Route path="/create-table" element={<CreateTable />} />
                </Routes> */}
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Agent;
