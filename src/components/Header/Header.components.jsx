import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser, emptyCart } from "../../redux/user/user.slice";
import {
  AddressIcon,
  LogoText,
  MainMenuGrid,
  MainMenuLayout,
  PhoneIcon,
  Search,
  SearchContainer,
  SearchIcon,
  Text,
  TopBarGrid,
  TopBarLayout,
  Wrapper,
  LoginText,
  CategoriesLayout,
  Category,
  Categories,
  AllCategories,
  CartIconRef,
  HeartIconRef,
  UserIconRef,
  MobileMenuGrid,
  LogoWrapper,
  CartWrapper,
  SearchWrapper,
} from "./Header.styles";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Header = ({ data, categories }) => {
  const loggedUser = !!useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOutUser());
  };

  const expand = "lg";
  return (
    <header>
      <TopBarLayout>
        <TopBarGrid>
          <Wrapper>
            <PhoneIcon size="16" />
            <Text>{data.header_first_tel_number}</Text>
          </Wrapper>
          <Wrapper>
            <AddressIcon size="16" />
            <Text>{data.header_address}</Text>
          </Wrapper>
        </TopBarGrid>
      </TopBarLayout>
      <MainMenuLayout>
        <MobileMenuGrid>
          <Link href="/">
            <LogoText>BRUBECK</LogoText>
          </Link>
          <Navbar bg="white" expand={expand}>
            {/* <Container fluid> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Меню
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link href="/">Главная</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link href="/favorites">Понравившийся товары</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link href="/shop">Магазин</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link href="/cart">Корзина</Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {/* </Container> */}
          </Navbar>
        </MobileMenuGrid>
        <MainMenuGrid>
          <LogoWrapper>
            <Link href="/">
              <LogoText>BRUBECK</LogoText>
            </Link>
          </LogoWrapper>
          <SearchWrapper>
            <SearchContainer>
              <SearchIcon size="24" />
              <Search type={"text"} />
            </SearchContainer>
          </SearchWrapper>
          <CartWrapper>
            {/* <Link href="/cart" passHref>
              <CartIcon size="24" />
            </Link> */}
            <Link href="/cart" passHref>
              <CartIconRef size="24" />
            </Link>
            <Link href="/favorites" passHref>
              <HeartIconRef size="24" />
            </Link>
            {!loggedUser ? (
              <Link href="/login">
                <LoginText>Войти</LoginText>
              </Link>
            ) : (
              <>
                <Link href="/dashboard" passHref>
                  <UserIconRef size="24" />
                </Link>
                <Link href="/login">
                  <LoginText marginleft onClick={handleSignOut}>
                    Выйти
                  </LoginText>
                </Link>
              </>
            )}
          </CartWrapper>
        </MainMenuGrid>
      </MainMenuLayout>
      <CategoriesLayout>
        <Categories>
          {categories &&
            Object.values(categories).map((item, key) => (
              <Link href={item.link} key={key}>
                <Category>{item.category_name}</Category>
              </Link>
            ))}
          <Link href={"/categories"}>
            <AllCategories>Всё</AllCategories>
          </Link>
        </Categories>
      </CategoriesLayout>
    </header>
  );
};
