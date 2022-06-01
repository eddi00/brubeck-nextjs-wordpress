import Link from "next/link";
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
  CartIcon,
  LoginText,
  CategoriesLayout,
  Category,
  Categories,
  AllCategories,
} from "./Header.styles";

export const Header = ({ data, categories }) => {
  return (
    <header>
      <TopBarLayout>
        <TopBarGrid>
          <Wrapper>
            <PhoneIcon size="1rem" />
            <Text>{data.header_first_tel_number}</Text>
          </Wrapper>
          <Wrapper>
            <AddressIcon size="1rem" />
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
              <SearchIcon size="1.5rem" />
              <Search type={"text"} />
            </SearchContainer>
          </Wrapper>
          <Wrapper>
            <Link href="/cart">
              <CartIcon size="1.5rem" />
            </Link>
            <HeartIcon size="1.5rem" />
            <LoginText>Войти</LoginText>
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
