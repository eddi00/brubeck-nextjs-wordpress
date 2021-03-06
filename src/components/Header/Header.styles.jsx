import styled from "styled-components";
import React from "react";
import { MdPhone, MdDomain, MdSearch, MdShoppingCart } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

export const TopBarLayout = styled.div`
  margin: 0 auto;
  width: 1168px;
  padding: 0 1rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const TopBarGrid = styled.div`
  height: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-column-gap: 1rem;
  /* align-items: center; */
  /* padding: 0 1rem; */

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 4rem;
    justify-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }
`;

export const PhoneIcon = styled(MdPhone)`
  color: ${props => props.theme.black_1};
  margin-right: 0.5rem;
`;

export const AddressIcon = styled(MdDomain)`
  color: ${props => props.theme.black_1};
  margin-right: 0.5rem;
`;

export const Text = styled.span`
  font-size: 0.75rem;
  font-family: "Open Sans";
  line-height: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const MainMenuLayout = styled.div`
  margin: 0 auto;
  width: 1400px;
  border-bottom: 1px solid ${props => props.theme.black_4};
  border-top: 1px solid ${props => props.theme.black_4};

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const MainMenuGrid = styled.div`
  margin: 0 auto;
  width: 1168px;
  padding: 0 1rem;
  height: 5rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-column-gap: 1rem;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    margin-top: -1rem;
    display: flex;
    align-items: center;
  }
`;

export const MobileMenuGrid = styled.div`
  width: 100%;
  padding: 0 1rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    flex: 1;
  }
`;

export const LogoText = styled.span`
  font-family: "Murecho";
  font-style: normal;
  font-weight: 200;
  font-size: 2rem;
  line-height: 46px;
  color: ${props => props.theme.primary_color_1};
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  border: 1px solid ${props => props.theme.black_3};
  border-radius: 5px;
  width: 100%;
  box-sizing: content-box;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
`;

export const Search = styled.input`
  width: 100%;
  height: 2rem;
  border: none;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: ${props => props.theme.black_2};

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(MdSearch)`
  color: ${props => props.theme.black_1};
  margin-right: 0.5rem;
`;

export const CartIcon = styled(MdShoppingCart)`
  color: ${props => props.theme.primary_color_2};
  margin-right: 1rem;
  margin-left: 1rem;
  cursor: pointer;
`;
export const CartIconRef = React.forwardRef(({ onClick, href, size }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <CartIcon size={size} />
    </a>
  );
});
CartIconRef.displayName = "CartIconRef";

export const HeartIcon = styled(IoMdHeart)`
  color: ${props => props.theme.primary_color_2};
  margin-right: 1rem;
  cursor: pointer;
`;
export const HeartIconRef = React.forwardRef(({ onClick, href, size }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <HeartIcon size={size} />
    </a>
  );
});
HeartIconRef.displayName = "HeartIconRef";

export const UserIcon = styled(FaUser)`
  color: ${props => props.theme.primary_color_2};
  margin-right: 1rem;
  cursor: pointer;
`;
export const UserIconRef = React.forwardRef(({ onClick, href, size }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <UserIcon size={size} />
    </a>
  );
});
UserIconRef.displayName = "UserIconRef";

export const LoginText = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: ${props => props.theme.primary_color_2};
  cursor: pointer;
  margin-left: ${props => (props.marginleft ? "1rem" : "0")};
`;

export const CategoriesLayout = styled.div`
  margin: 0 auto;
  width: 1400px;
  height: 40px;
  border-bottom: 1px solid ${props => props.theme.black_4};

  @media (max-width: 1400px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Categories = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const Category = styled.span`
  text-decoration: none;
  color: ${props => props.theme.black_1};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
`;

export const AllCategories = styled(Category)`
  font-weight: 600;
`;
