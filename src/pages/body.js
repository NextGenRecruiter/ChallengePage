import React from "react";
import {BodyContainer, BodyTitle, BodyTextContainer, BodyText, Conferences, AttendButton, ViewHighButton, SponsorButton} from "./HomeStyle";

const text = "Our annual Black in AI (BAI) workshop co-located with NeurIPS, as well as our satellite gathering in other AI conferences (e.g AAAI, CVPR, ICML, FAT)allow members of the BAI community to attend NeurIPS without feeling isolated. This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and fell of finished, typeset text and its only for show so she who searches for meaning here will be solely disappointed";
const conti = "This is dummy copy. It has been placed here solely to demonstrate the look and fell of finished, typeset text and its only for show so she who searches for meaning here will be solely disappointed.";
function Body() {
  return (
    <>
    <BodyContainer>
        <BodyTitle>Conferences & Workshops</BodyTitle>
        <br/>
    <BodyTextContainer>
  <BodyText>{text}</BodyText>
  <br/>
  <BodyText>{conti}</BodyText>
  <SponsorButton>SPONSOR</SponsorButton>
  <Conferences>BAI 2020 <span><AttendButton>ATTEND</AttendButton></span></Conferences>
  <Conferences>BAI 2019 <span><ViewHighButton>VIEW HIGHLIGHTS</ViewHighButton></span></Conferences>
  <Conferences>BAI 2018 <span><ViewHighButton>VIEW HIGHLIGHTS</ViewHighButton></span></Conferences>
  <BodyText>View more conferences</BodyText>
  </BodyTextContainer>
    </BodyContainer>
    </>
  );
}

export default Body;