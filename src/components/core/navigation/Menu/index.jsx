import React from 'react';
import { slide as Offcanvas } from 'react-burger-menu';
import { withRouter } from 'react-router-dom';
import styled, { css, createGlobalStyle } from 'styled-components';

import Brand from 'components/common/base/Brand';
import Hyperlink from 'components/common/base/Hyperlink';
import Icon from 'components/common/base/Icon';
import Nav from 'components/common/base/Nav';

import HTML from 'constants/elements/html';
import PATHS from 'constants/routes/paths';

const linkStyles = css`
  display: block;
  padding: 1rem 0 1rem 1rem;
  transition: background-color 0.15s ease-in-out;

  &,
  :hover {
    color: ${({ theme }) => theme.color.base};
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
`;

const Header = styled.div`
  align-items: center;
  border-bottom: #ccc solid 1px;
  display: flex;
  height: 46px;
  margin: 0 1rem;
`;

const Link = styled(Hyperlink)`
  ${linkStyles}
`;

const Meta = styled.div`
  bottom: 1rem;
  display: block;
  left: 1rem;
  position: absolute;
`;

const Navigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: block;
`;

const NavLink = styled(Nav.Link)`
  ${linkStyles}
`;

const Overflow = createGlobalStyle`
  body.menu-open {
    overflow: hidden;
  }
`;

const Text = styled.span`
  margin-left: 1.25rem;
`;

const Version = styled(Hyperlink)`
  color: ${({ theme }) => theme.color.gray};
  font-size: 0.75rem;
`;

const menuStyles = {
  bmMenu: {
    background: '#fff'
  },
  bmItemList: {
    padding: 0,
    position: 'relative'
  },
  bmMenuWrap: {
    maxWidth: '320px',
    top: 0,
    zIndex: 8001
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.8)',
    top: 0
  }
};

const menuOptions = {
  bodyClassName: 'menu-open',
  customBurgerIcon: false,
  customCrossIcon: false,
  id: 'sidebar',
  left: true,
  outerContainerId: HTML.wrapper,
  pageWrapId: HTML.body,
  styles: menuStyles,
  width: '85%'
};

class Menu extends React.Component {
  componentDidUpdate(prevProps) {
    const { onClose, location } = this.props;

    // Close menu if the URL changes
    if (location.pathname !== prevProps.location.pathname) {
      onClose();
    }
  }

  render() {
    const { isOpen, onChange } = this.props;

    return (
      <React.Fragment>
        <Offcanvas {...menuOptions} isOpen={isOpen} onStateChange={onChange}>
          <div>
            <Header>
              <Brand />
            </Header>
            <Navigation>
              <NavItem>
                <NavLink exact to={PATHS.root}>
                  <Icon icon="home" />
                  <Text>Gallery</Text>
                </NavLink>
              </NavItem>
              <NavItem>
                <Link href="https://github.com/rxseven/gyararii">
                  <Icon icon={['fab', 'github-alt']} />
                  <Text>View on GitHub</Text>
                </Link>
              </NavItem>
            </Navigation>
            <Meta>
              <Version href="https://github.com/rxseven/gyararii/releases/tag/v0.1.0">
                Version 0.1.0
              </Version>
            </Meta>
          </div>
        </Offcanvas>
        <Overflow />
      </React.Fragment>
    );
  }
}

export default withRouter(Menu);
