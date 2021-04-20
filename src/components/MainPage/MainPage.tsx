import React, {FC} from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Aside } from '../Aside/Aside.component';
import { TopNav } from '../TopNav/TopNav.component';
import { PublicationsPage} from '../PublicationsPage/PublicationsPage.component';
import { EntitiesPage} from '../EntitiesPage/EntitiesPage.component';
import { EcosystemPage} from '../EcosystemPage/EcosystemPage.component';
import { HomePage } from '../HomePage/HomePage.component'
const Wrapper = styled.div`


`
const Content = styled.div`
 max-width: 900;
 display: flex;
 padding: 18px;
 background-color: #f5f7f9;

`;

const MainPage: FC = () =>{
  return(
    <Router>
      <Wrapper>
        <TopNav></TopNav>
       <Content>
           <Aside/>
           
           <Switch>
              <Route path="/PublicationsPage">
                <PublicationsPage/>
              </Route>
              <Route path="/EntitiesPage">
                <EntitiesPage/>
              </Route>
              <Route path="/EcosystemPage">
                <EcosystemPage/>
              </Route>
              <Route path="/">
                <HomePage/>
              </Route>
            </Switch>
             
        </Content>
      </Wrapper>

    </Router>
  );
};
export default MainPage;
