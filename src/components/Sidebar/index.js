import React from 'react';
import {
  Icon, SidebarContainer, CloseIcon,
  SidebarMenu,
  SidebarWrapper, SidebarLink
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="about">
            Sobre nós
          </SidebarLink>
          <SidebarLink onClick={toggle} to="services">
            Serviços
          </SidebarLink>

        </SidebarMenu>
        {/*     <SideBtnWrap>
          <SidebarRoute to="/">Sign In</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;