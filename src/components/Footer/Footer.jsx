import { VscGithubInverted } from 'react-icons/vsc';
import { BsJournalBookmark, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer>
      <Navbar
        className="flipInX "
              style={{ padding: '0rem', backgroundColor: ' var(--appbar-background)' }}
        fixed="bottom"
     
      >
        <Container>
          <Navbar.Brand className="ms-3">
            <BsJournalBookmark size={35} />
          </Navbar.Brand>

          <Nav className="me-3">
            <Nav.Link target={'_blank'} href="https://github.com/yuri69k">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="author link">Author Git</Tooltip>}
              >
                <div>
                  {' '}
                  <VscGithubInverted size={25} />
                </div>
              </OverlayTrigger>
            </Nav.Link>
            <Nav.Link
              target={'_blank'}
              href="https://www.facebook.com//"
            >
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="author link">Author Facebook</Tooltip>}
              >
                <div>
                  {' '}
                  <BsFacebook size={25} />
                </div>
              </OverlayTrigger>
            </Nav.Link>
            <Nav.Link
              target={'_blank'}
              href="https://www.linkedin.com/in/yurii-karmaz/"
            >
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="author link">Author LinkedIn</Tooltip>}
              >
                <div>
                  {' '}
                  <BsLinkedin size={25} />
                </div>
              </OverlayTrigger>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;