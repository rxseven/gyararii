import React from 'react';
import styled, { css } from 'styled-components';

import Grid from 'components/common/base/Grid';
import Hyperlink from 'components/common/base/Hyperlink';
import Nav from 'components/common/base/Nav';
import PATHS from 'constants/routes/paths';

const linkStyles = css`
  color: #999;
  transition: color 0.2s ease-in-out;

  :hover {
    color: #fff;
  }
`;

const Frame = styled.footer`
  background-color: #343a40;
  color: #999;
  flex-shrink: 0;
  padding: 1.5rem 0;
`;

const Info = styled.div`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    text-align: left;
  }
`;

const Navigation = styled.ul`
  list-style: none;
  margin: 0 0 1.25rem 0;
  padding: 0;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    text-align: left;
  }
`;

const NavItem = styled.li`
  display: inline;
  font-size: 0.75rem;

  & + & {
    margin-left: 1rem;
  }
`;

const NavLink = styled(Nav.Link).attrs({ light: true })`
  ${linkStyles}
`;

const Link = styled(Hyperlink)`
  :hover {
    text-decoration: none;
  }

  ${linkStyles}
`;

const Text = styled.p`
  font-size: 0.75rem;
  margin-bottom: 0.25rem;

  :last-child {
    margin-bottom: 0;
  }
`;

function Footer() {
  return (
    <Frame>
      <Grid.Container>
        <Grid.Row>
          <Grid.Column>
            <Navigation>
              <NavItem>
                <NavLink exact to={PATHS.root}>
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <Link href="https://github.com/rxseven/gyararii">GitHub</Link>
              </NavItem>
            </Navigation>
            <Info>
              <Text>Designed &amp; built with all the love in React.</Text>
              <Text>Copyright © 2019 Theerawat Pongsupawat.</Text>
            </Info>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </Frame>
  );
}

export default Footer;
