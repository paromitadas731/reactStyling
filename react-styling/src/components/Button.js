import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
font: inherit;
padding: 0.5rem 1.5rem;
border: 1px solid #eef;
color: black;
background: #eee;
margin: 10px 5px;
box-shadow: 0 0 4px rbga(0, 0, 0, 0.26);
cursor: pointer;

&:focus{
    outline: none;
}

&:hover,
&:active{
    background: #fff;
    border-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0.26);
}
`;

export default Button;