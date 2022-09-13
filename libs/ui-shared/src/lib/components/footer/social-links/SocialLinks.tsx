import { Spacer } from '@chakra-ui/react';
import * as Styled from './SocialLinks.styles';
import {
  Twitter,
  Instagram,
  Facebook,
  YouTube,
  Apple,
  Android,
} from '@mui/icons-material';
import { SocialIconGroup } from './social-icon-group';

const SocialLinks = () => {
  return (
    <Styled.FlexContainer direction='row'>
      <Styled.LRCContainer>
        <Styled.LRCButton aria-label='United States | English | $ USD'>
          <span>United States</span>
          <span>|</span>
          <span>English</span>
          <span>|</span>
          <span>$USD</span>
        </Styled.LRCButton>
      </Styled.LRCContainer>
      <Spacer />

      <SocialIconGroup
        text='Find Us On Social'
        icons={[Twitter, Facebook, Instagram, YouTube]}
      />
      <Spacer />
      <SocialIconGroup text='Download Our App' icons={[Apple, Android]} />
      <Spacer />
      <SocialIconGroup text='Use Assistive Technology' icons={[]} />
      <Spacer />
      <SocialIconGroup text='Proudly Built in Detroit' icons={[]} />
    </Styled.FlexContainer>
  );
};
export default SocialLinks;
