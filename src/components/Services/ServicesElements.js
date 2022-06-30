import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 800px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010606;

  @media only screen and (max-width: 768px) {
    height: 100%;
    padding-bottom: 48px;

  }

  @media screen and (max-width:480px){
    height: 100%;
    padding-bottom: 48px;
  }
`
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;    
  }
`

export const ServicesCard = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;  
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  border-radius: 10px;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;    
  }
`

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;

`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
