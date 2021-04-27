import React, {FC} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useDropdown from 'react-dropdown-hook';

import { CircleMenu} from './DropdownContent/CircleMenu.component';

import Icons from '../common/Icons'; 


import { Wrapper, RightIcons, Logo, Form, Button, Input, DropdownComp, DropdownWrapper, A, DropdownA} from './styles';

import { useLocation } from "react-router";



export const TopNav: FC = () =>{
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
  const UseLocation = useLocation();
  

   const icon = (): string => {
    switch (UseLocation.pathname) {
      case "/":
        return `${Icons.blackHouseIcon}`;
      case "/PublicationsPage":
        return `${Icons.yourPublicationsIcon}`;
      case "/EntitiesPage":
        return `${Icons.entities2Icon}`;
      case "/PeoplePage":
        return `${Icons.peopleIcon}`;
      case "/AdminPage":
        return `${Icons.adminIcon}`;
      default:
        return "";
    }
  };
    const text = (): string => {
    switch (UseLocation.pathname) {
      case "/":
        return "Home";
      case "/PublicationsPage":
        return "Publications";
      case "/EntitiesPage":
        return "Entities";
      case "/PeoplePage":
        return "People";
      case "/AdminPage":
        return "Administration";
      default:
        return "";
    }
  };


  return(
    <Wrapper >
      <Logo imgUrl= {Icons.logoIcon}></Logo>
      
        <DropdownComp>
          <DropdownWrapper ref={wrapperRef}>
          
            <DropdownA beforeImg = {icon()} afterImg = {Icons.arrowDownIcon} onClick={toggleDropdown}>
              {text()}
            </DropdownA>
        
           {dropdownOpen && <CircleMenu />}
          </DropdownWrapper>
        </DropdownComp>
      
      <Form>
        <Input type="text" placeholder = "Search Legalcluster"></Input>
        <Button type="submit"><img alt ="" src={Icons.searchIcon} /></Button>
      </Form>
      <RightIcons>
        <Link to = '/'><A imgUrl = {Icons.homeIcon}></A></Link>
        <A imgUrl = {Icons.commentsIcon} bgColor = '#e8e8e8'><span>7</span></A>
        <A imgUrl = {Icons.bellIcon} bgColor = '#e8e8e8'><span>9</span></A>
      </RightIcons>
    </Wrapper>
   

  );
};