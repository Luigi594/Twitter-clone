import React from 'react';
import styled from 'styled-components';

function SidebarOptions({ active, Icon, text }) {
  return (
    <SidebarOptionContainer className={`${active && 'SidebarActive'}`}>
        {Icon && (
            <Icon />
        )}
        <h2>{text}</h2>
    </SidebarOptionContainer>
  )
}

export default SidebarOptions;

/** adding another attribute named SidebarActive because we want
 * the Home icon be active, so if we passed the active prop to our
 * component SidebarOptions it will apply the class SidebarActive
 */
const SidebarOptionContainer = styled.div.attrs(props => ({
  className: props.className,
}))`

  &.SidebarActive{
    color: var(--twitter-color);
  }

  display: flex;
  align-items: center;
  /* cursor: pointer; */

  > .MuiSvgIcon-root{
    padding: 20px;
  }

  > h2{

    font-weight: 800;
    font-size: 20px;
    margin-right: 20px;
  }

  :hover{

    background-color: #e8f5fe;
    cursor: pointer;
    border-radius: 30px;
    color: var(--twitter-color);
    transition: color 105ms ease-in-out;
  }
`;