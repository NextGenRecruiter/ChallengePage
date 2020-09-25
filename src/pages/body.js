import React from "react";
import {BodyContainer, BodyTitle, Span, Line, BodyTextContainer, Summary, BodyText, Conferences, AttendButton, ViewHighButton, SponsorButton, Table, TableRow, TableData} from "./HomeStyle";

const text = "Our annual Black in AI (BAI) workshop co-located with NeurIPS, as well as our satellite gathering in other AI conferences (e.g AAAI, CVPR, ICML, FAT)allow members of the BAI community to attend NeurIPS without feeling isolated. This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and fell of finished, typeset text and its only for show so she who searches for meaning here will be solely disappointed";
const conti = "This is dummy copy. It has been placed here solely to demonstrate the look and fell of finished, typeset text and its only for show so she who searches for meaning here will be solely disappointed.";
function Body() {
  return (
    <>
    <BodyContainer>
    <BodyTitle>Conferences & Workshops</BodyTitle>
        <br/>
      <BodyTextContainer>
  <Summary>
  <BodyText>{text}</BodyText>
    <BodyText>{conti}<br/><span><SponsorButton>SPONSOR</SponsorButton></span></BodyText>
    </Summary>
  <Summary>
  <Table> 
  <Conferences>BAI 2020<Span><AttendButton>ATTEND</AttendButton></Span></Conferences>
  <Conferences>BAI 2019 <Span><ViewHighButton>VIEW HIGHLIGHTS</ViewHighButton></Span></Conferences>

  <Conferences>BAI 2018 <Span><ViewHighButton>VIEW HIGHLIGHTS</ViewHighButton></Span></Conferences>
 
<BodyText>View more conferences</BodyText>

  </Table>
  </Summary>
  </BodyTextContainer>
    </BodyContainer>
    </>
  );
}

export default Body;