import React from 'react';
import styled from 'styled-components';

function SidebarOptions({ Icon, text }) {
  return (
    <SidebarOptionContainer>
        {Icon && (
            <Icon />
        )}
        <h2>{text}</h2>
    </SidebarOptionContainer>
  )
}

export default SidebarOptions;

const SidebarOptionContainer = styled.div`


`;