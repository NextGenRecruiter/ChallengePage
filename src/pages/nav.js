import React from "react";
import {
  NavContainer,
  NavTitle,
  NavText,
  HeaderButton,
  Summary,
  Form,
  Input,
  FormButton,
} from "./HomeStyle";



function Nav() {
  return (
    <>
      <NavContainer>
        <Summary>
          <NavTitle>BLACK IN AI</NavTitle>
          <br />
          <NavText>
            Short sentence stating the nature of the <br />
            organization e.g tax-exempt, non-profit and <br />
            possibly registration number.
          </NavText>
          <br/>
          <HeaderButton>DONATE</HeaderButton>
          <br/>
          <br/>
          <br/>
          <br/>
          <NavText>&copy; 2020 Black in AI</NavText>
        </Summary>
        <Summary>
          <NavTitle>CONTACT US</NavTitle>
          <br />
          <NavText>
            Physical address, if available
            <br />
            will go right here.
            <br />
            <br />
            abc@blackinai.org
            <br />
          </NavText>
        </Summary>
        <Summary>
          <NavTitle>LINKS</NavTitle>
          <NavText>
            About us
            <br />
            <br />
            Programs
            <br />
            <br />
            Membership
            <br />
            <br />
            Partnership
          </NavText>
        </Summary>
        <Summary>
          <NavTitle>GET UPDATES</NavTitle>
          <br/>
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
