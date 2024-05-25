import { Container, Row, Col } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import s from './ListEmployer.module.scss';
import { useReadAllQuery } from './../../../api/userApi';
import { useDepartmentIdQuery } from './../../../api/departmentApi';

function ListEmployer() {
  const { data: userData, isLoading } = useReadAllQuery();
  console.log("🚀 ~ ListEmployer ~ userData:", userData)
  const { data: departmentData, isLoading: loading } = useDepartmentIdQuery(
    userData?.departamentId
  );

  return (
    <Container>
      <Row>
        <Accordion>
          {userData?.map((data, index) => (
            <Accordion.Item
              eventKey={index}
              key={index}
              className={s.accordionItem}
            >
              <Accordion.Header>
                <div className={s.miniInfo}>
                  <div className={s.infoUser}>
                    Username: {isLoading ? '...isLoading' : data?.userName}
                  </div>
                  <div className={s.nameEmployer}>
                    Department :{loading ? '...isLoading' : departmentData}
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className={s.listEmployer}>
                  <p>Username: {data.userName}</p>
                  <p>Name: {data.firstName}</p>
                  <p>Surname: {data.lastName}</p>
                  <p>Father Name: {data.fatherName}</p>
                  <p>Birth Date: {data.birthdate}</p>
                  <p>Email: {data.email}</p>
                  <p>Phone number 1: {data.phoneNumber1}</p>
                  <p>Phone number 2: {data.phoneNumber2}</p>
                  <p>Department: {departmentData}</p>
                  <p>Position: {data.position}</p>
                  <Col md={4}>
                    <div className={s.position1}>
                      <label htmlFor="">
                        <select name="" id="">
                          <option>Viewer</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                      </label>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className={s.position1}>
                      <label htmlFor="">
                        <select name="" id="">
                          <option>Editor</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                      </label>
                    </div>
                  </Col>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Row>
    </Container>
  );
}

export default ListEmployer;
