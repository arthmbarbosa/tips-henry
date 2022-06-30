import styled from 'styled-components'
import { FaUserAstronaut } from 'react-icons/fa'

export const SocialProofContainer = styled.section`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width:768px){
    padding: 100px 0;
  }

`
export const SocialProofWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 430px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;  

  @media only screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width:480px){
    height: 100%;
  }
`

export const UserAstronaut = styled(FaUserAstronaut)`
  margin-left: 8px;
  font-size: 50px;
`

export const SocialProof = styled.div`
 width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 32px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;    
  }

`

export const SocialProofCard = styled.div`
background: #074D02;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;  
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  border-radius: 10px;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;    
  }
`

export const SocialProofH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;

`

export const SocialProofP = styled.p`
  font-size: 1rem;
    padding: 8px;
    background-color: white;
    color: #010606;
    border-radius: 10px;
    position: relative;
    align-self: flex-start;
    margin-bottom: 4px;

    &::before{
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      left: 0;
      bottom: 0;
      background-color: white;
      color: white;
    }
`
