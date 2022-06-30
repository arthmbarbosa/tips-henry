import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from "./HeroElements"
import { Button } from '../ButtonElement'
import Video from "../../videos/video.mp4"
import ReactPixel from 'react-facebook-pixel';

const advancedMatching = { em: 'contatotipshenry@gmail.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init('752188229529433', advancedMatching, options);

ReactPixel.init('1364979310594678', advancedMatching, options);


/* const enterOnGroupEvent = () => {
  fbq('track', 'EnterOnGroup');
} */

ReactPixel.pageView(); // For tracking page view

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Conquiste uma renda consistente. 💰</HeroH1>
        <HeroP>Faça parte do nosso grupo no Telegram e aprenda estratégias que realmente funcionam no mundo das apostas esportivas.</HeroP>
        <HeroBtnWrapper>
          <Button
            href="https://t.me/henrytips" target="_blank"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
/*             onClick={enterOnGroupEvent()}
 */          >
            Entrar no grupo! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>

  )
}
export default HeroSection;