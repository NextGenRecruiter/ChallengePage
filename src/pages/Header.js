import React, { useState } from 'react'
import {BoxTitle, Head, HeaderButtonTitle, HeaderContentImage, HeaderContent, HeaderText, LogoImage, HeaderButton} from "./HomeStyle";
import Logo from '../images/BAI_Logo.png';
import gathering from '../images/gathering.png'

const ProgramTitle = "An intro sentence about programs.";
const AboutTitle = "An intro sentence about ABOUT programs.";
// const memberShipTitle = "An intro sentence about Membership.";

function Header() {
  const [ open, setOpen ] = useState(false);

  function About() {
    setOpen(true);
  }
  function programs() {
    setOpen(true);
  }
  // function MemberShip() {
  //   setOpen(true);
  // }
  

  return (
    <>
    <LogoImage src={Logo} alt="Logo of Black in AI"/>
    <HeaderButton>DONATE</HeaderButton>
    <HeaderButtonTitle>PARTNERSHIP</HeaderButtonTitle>
    <HeaderButtonTitle>MEMBERSHIP</HeaderButtonTitle>
    <HeaderButtonTitle onClick={programs}>PROGRAMS</HeaderButtonTitle>
    <HeaderButtonTitle onClick={About}>ABOUT</HeaderButtonTitle>
    {open ? <HeaderContent><HeaderText><BoxTitle>{AboutTitle}</BoxTitle><br/>It has been placed here solely to demonstrate the look and feel<br/> of finished, typeset text and its only for show so she who <br/>searches for meaning here will be solely disappointed.</HeaderText></HeaderContent>: null}
    {open === false ? <HeaderContent><HeaderText><BoxTitle>{ProgramTitle}</BoxTitle><br/>It has been placed here solely to demonstrate the look and feel<br/> of finished, typeset text and its only for show so she who <br/>searches for meaning here will be solely disappointed.</HeaderText><HeaderContentImage src={gathering} alt="Logo of Black in AI"/></HeaderContent>: null}

    </>
  );
}

export default Header;