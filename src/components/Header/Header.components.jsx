import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/user/user.slice";
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
  HeartIcon,
  LoginText,
  CategoriesLayout,
  Category,
  Categories,
  AllCategories,
  CartIconRef,
  HeartIconRef,
} from "./Header.styles";

export const Header = ({ data, categories }) => {
  const loggedUser = !!useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
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
        <MainMenuGrid>
          <Wrapper>
            <Link href="/">
              <LogoText>BRUBECK</LogoText>
            </Link>
          </Wrapper>
          <Wrapper>
            <SearchContainer>
              <SearchIcon size="24" />
              <Search type={"text"} />
            </SearchContainer>
          </Wrapper>
          <Wrapper>
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
              <Link href="/">
                <LoginText onClick={() => dispatch(signOut())}>Выйти</LoginText>
              </Link>
            )}
          </Wrapper>
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
