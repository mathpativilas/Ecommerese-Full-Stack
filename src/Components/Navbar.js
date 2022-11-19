import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Container = styled.div`
  height: 60px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItems = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>VILAS.</Logo>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Signin</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
