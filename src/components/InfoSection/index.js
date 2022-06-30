import React from 'react'
import { Button } from '../ButtonElement'
import Image from '../../images/svg-5.svg'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements'
import { animateScroll as scroll } from 'react-scroll'



const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, darkText, headLine, description, buttonLabel, alt }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={false}
                    dark={false}
                    border={true}
                    onClick={toggleHome}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Image} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>

  );
}

export default InfoSection;