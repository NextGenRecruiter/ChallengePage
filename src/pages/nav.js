import React from "react";
import {NavContainer, NavTitle, NavText, HeaderButton, Table, TableRow} from "./HomeStyle";

function Nav() {
  return (
    <>
     <NavContainer>
    <Table>
  <TableRow>
    <td><NavTitle>BLACK IN AI</NavTitle></td>
    <td><NavTitle>CONTACT US</NavTitle></td>
    <td><NavTitle>LINKS</NavTitle></td>
    <td><NavTitle>GET UPDATES</NavTitle></td>
  </TableRow>
  <tr>
    <td>  <NavText>Short sentence stating the nature of the <br/>organization e.g tax-exempt, non-profit and <br/>possibly registration number.</NavText>
</td>
    <td><NavText>Physical address, if available<br/>will go right here.<br/><br/>abc@blackinai.org<br/></NavText></td>
    <td><NavText>About us<br/><br/>Programs<br/><br/>Membership<br/><br/>Partnership</NavText></td>
    <td><NavText>Sign up for our newsletter to get<br/>updates on our work</NavText></td>
  </tr>
</Table>
  <br/>
  <HeaderButton>DONATE</HeaderButton>
        </NavContainer>
    </>
  );
}

export default Nav;