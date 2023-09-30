import '../../estilos/cabecalho.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PaginaHome, PaginaProduto, PaginaEvento, PaginaEscoteiro, PaginaRealizarInscricao, PaginaInscritos, PaginaReceberMensalidades, PaginaCaixa, Pagina404 } from '../../ui/Paginas'


export function Cabecalho(props) {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#" className='titulonav'>Escoteiros</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" element={<PaginaHome />}>Home</Nav.Link>
                        <NavDropdown title="Funcionalidades" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/produtos" element={<PaginaProduto />}>Produtos</NavDropdown.Item>
                            <NavDropdown.Item href="/eventos">Eventos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Escoteiros</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Inscritos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Receber Mensalidades</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
