import React from "react";
import {
  NavContainer,
  NavTitle,
  NavText,
  NavButton,
  Summary,
  Form,
  Input,
  FormButton,
  Anchor
} from "./HomeStyle";
import {SiFacebook} from 'react-icons/si'
import {IoLogoTwitter} from 'react-icons/io'


function Nav() {
  return (
    <>
      <NavContainer>
        <Summary>
          <NavTitle>BLACK IN AI</NavTitle>
          <NavText>
            Short sentence stating the nature of the <br />
            organization e.g tax-exempt, non-profit and <br />
            possibly registration number.
          </NavText>
          <br/>
          <NavButton>DONATE</NavButton>
          <br/>
          <br/>
          <br/>
          <br/>
          <NavText>&copy; 2020 Black in AI</NavText>
        </Summary>
        <Summary>
          <NavTitle>CONTACT US</NavTitle>
          <NavText>
            Physical address, if available
            <br />
            will go right here.
            <br />
            <br />
            abc@blackinai.org
            <br />
            <br />
            <Anchor href="https://www.facebook.com/blackinai/" target="_blank"> 
            <SiFacebook size="2em"/>
            </Anchor>
            {" "}{" "}
            <Anchor href="https://twitter.com/black_in_ai?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"> 
            <IoLogoTwitter size="2em"/>
            </Anchor>
          </NavText>
        </Summary>
        <Summary>
          <NavTitle>LINKS</NavTitle>
          <NavText>
            About us
            <br/>
            <br/>
            Programs
            <br/>
            <br/>
            Membership
            <br/>
            <br/>
            Partnership
          </NavText>
        </Summary>
        <Summary>
          <NavTitle>GET UPDATES</NavTitle>
          <NavText>
            Sign up for our newsletter to get
            <br />
            updates on our work
            <br />
            <br/>
            <Form>
              <Input title="Your email address"/>
              <FormButton>SUBSCRIBE</FormButton>
            </Form>
          </NavText>
        </Summary>
      </NavContainer>
    </>
  );
}

export default Nav;
