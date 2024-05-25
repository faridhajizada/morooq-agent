import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogOut from './../../LogOut/LogOut';
import s from './Header.module.scss';

function Header() {
  return (
    <header>
      <Container fluid>
        <Row>
          <div className={s.header}>
            <div className="imgLogo">
              <Link to={'/'}>
                <img
                  src="https://barattson.feridhacizade.com/back/dist/img/logo-favicon/1697923827_53375_larablog_logo.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className={s.userInfo}>
              <LogOut />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
