import styled from 'styled-components'


export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#14CC06' : 'transparent')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 18px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#074D02' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16x')};
  outline: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  border: ${({ border }) => (border ? '3px solid #fff' : 'none')};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#074D02')
  };

/*   color: ${({ dark }) => (dark ? '#fff' : '#074D02')};  */
}
`;