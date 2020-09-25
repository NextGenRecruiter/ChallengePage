import React from "react";
import {Head, HeaderButtonTitle, LogoImage, LogoText, HeaderButton} from "./HomeStyle";
import Logo from '../images/BAI_Logo.png';


const programs =
  "It has been placed here solely to demonstrate the look and fell of finished, typeset text and its only for show so she who searches for meaning here will be solely disappointed";
const about =
"coming soon...";
const membership =
"coming soon...";
const Partnership =
"coming soon...";

const header=[
    {
    id:1,
    title: "ABOUT",
    text:about,
    },
    {
    id:2,
    title: "PROGRAMS",
    text: programs,
    },
    {
    id:3,
    title: "MEMBERSHIP",
    text: membership,
    },
    {
    id:4,
    title:"PARTNERSHIP",
    text:Partnership
    }
];
function Header() {
  
  return (
    <>
    <LogoImage src={Logo} alt="Logo of Black in AI"/>
      <LogoText>BLACK IN AI</LogoText>
    <Head>
    <HeaderButton>DONATE</HeaderButton>
    <HeaderButtonTitle>PARTNERSHIP</HeaderButtonTitle>
    <HeaderButtonTitle>MEMBERSHIP</HeaderButtonTitle>
    <HeaderButtonTitle>PROGRAMS</HeaderButtonTitle>
    <HeaderButtonTitle>ABOUT</HeaderButtonTitle>
    </Head>
    </>
  );
}

export default Header;