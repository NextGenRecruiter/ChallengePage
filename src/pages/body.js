import React from "react";
import {BodyContainer, BodyTitle, BodyTextContainer, BodyText, Conferences, AttendButton, ViewHighButton, SponsorButton, Table, TableRow, TableData} from "./HomeStyle";

const text = "Our annual Black in AI (BAI) workshop co-located with NeurIPS, as well as our satellite gathering in other AI conferences (e.g AAAI, CVPR, ICML, FAT)allow members of the BAI community to attend NeurIPS without feeling isolated. This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and fell of finished, typeset text and its only for show so she who searches for meaning here will be solely disappointed";
const conti = "This is dummy copy. It has been placed here solely to demonstrate the look and fell of finished, typeset text and its only for show so she who searches for meaning here will be solely disappointed.";
function Body() {
  return (
    <>
    <BodyContainer>
    <BodyTitle>Conferences & Workshops</BodyTitle>
        <br/>
      <BodyTextContainer>
<Table>
<TableRow>
 <td><BodyText>{text}</BodyText></td>
  </TableRow>
  <TableRow>
    <td><BodyText>{conti}<br/><span><SponsorButton>SPONSOR</SponsorButton></span></BodyText></td>
  </TableRow>
  </Table>
  <Table> 
    <TableRow><TableData></TableData></TableRow>
  <TableRow>
  <TableData><Conferences>BAI 2020 <span><AttendButton>ATTEND</AttendButton></span></Conferences></TableData>
  </TableRow> 
  <TableRow>
  <TableData><Conferences>BAI 2019 <span><ViewHighButton>VIEW HIGHLIGHTS</ViewHighButton></span></Conferences></TableData>
  </TableRow>
  <TableRow>
  <TableData><Conferences>BAI 2018 <span><ViewHighButton>VIEW HIGHLIGHTS</ViewHighButton></span></Conferences></TableData>
  </TableRow>
  <TableRow>
  <td><BodyText>View more conferences</BodyText></td>
  </TableRow>
  </Table>
  </BodyTextContainer>
    </BodyContainer>
    </>
  );
}

export default Body;