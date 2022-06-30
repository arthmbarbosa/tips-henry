import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements'

import { FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa'

const toggleHome = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        {/*  <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
            <FooterLinkTitle>Sobre nós
            </FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Tips-Henry</SocialLogo>
            <WebsiteRights>Tips-Henri © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.instagram.com/tips.henry/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://www.youtube.com/channel/UC56nyH8bnbt5gjkyAjKMcnA" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="https://t.me/henrytips" target="_blank" aria-label="Telegram">
                <FaTelegram />
              </SocialIconLink>

            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;