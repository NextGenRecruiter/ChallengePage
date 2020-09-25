import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Head = styled.div`
margin: 5px; 
display: flex;
flex-direction: row-reverse;
`;
export const LogoImage = styled.img`
@media (min-width: 768px) {
  width: ${px2vw(20, 768)};
  min-height: ${px2vw(10, 68)};
  height: 20%;
}

@media (min-width: 1024px) {
  width: ${px2vw(70)};
  min-height: ${px2vw(70)};
}

`;
export const LogoText = styled.h3`
color: #333;
font-size: 1rem;
@media (min-width: 1024px) {
  font-size: .9rem;
  margin: 5px
  padding-right:50px;
}
`;
export const HeaderButtonTitle = styled.button`
border: none;
color: black;
padding: 0.50em 1em;
font-size: 16px;
cursor: pointer;
background-color: inherit;
outline: none;
&:hover {
  color: #1e79b6;
}
`;
export const HeaderText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: .5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
    margin: 5px
  }
`;
export const HeaderButton = styled.button`
  background: orange;
  border: none;
  border-radius: 25px;
  color: white;
  padding: 1em 1.5em;
  font-size: 12px;
  cursor: pointer;
  outline: none;
}
`;
export const AttendButton = styled.button`
  background: black;
  border: none;
  border-radius: 25px;
  color: white;
  padding: 0.80em 2em;
  font-size: 10px;
  margin:5px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #1e79b6;
  };
  
}
`;
export const ViewHighButton = styled.button`
  background: transparent;
  border: .1rem solid;
  border-radius: 25px;
  color: white;
  padding: 0.25em 1em;
  font-size: 16px;
  margin:10px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #1e79b6;
  };

}
`;
export const BodyContainer = styled.div`
background: #1e79b6;
padding: 5em 1em;

`;
export const BodyTitle = styled.h3`
color: white;
font-size: 2rem;
text-align:center;
`;
export const BodyTextContainer = styled.div`
column-count: 2;
column-gap: 8em;
;

`;
export const Conferences = styled.div`
color:white;

`;
export const BodyText = styled.p`
color: white;
text-align: left;
margin-top: ${px2vw(20)};
font-size: 1.5rem;
word-wrap: break-word;


@media (min-width: 1024px) {
  font-size: 1rem;
}
`;
export const SponsorButton = styled.button`
  background: white;
  border: none;
  border-radius: 25px;
  color: black;
  padding: 0.80em 1em;
  font-size: 10px;
  margin:10px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #1e79b6;
  };
}
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(100)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;
export const BoxImage = styled.img`
@media (min-width: 768px) {
  width: ${px2vw(320, 768)};
  min-height: ${px2vw(100, 168)};
  height: 90%;
}

@media (min-width: 1024px) {
  width: ${px2vw(400)};
  min-height: ${px2vw(100)};
  height: 90%;
}

`;
export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: left;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
export const NavContainer = styled.div`
background:#232323;
padding: 5em 1em;
`;
export const Table = styled.table`
border-collapse: separate;

`;

export const TableRow = styled.tr`
  padding: 20px;

`;
export const TableData = styled.td`
  padding: 20px;
  border-bottom: .5px solid #ddd;
  position:right;
`;
export const NavTitle = styled.h4`
color: white;
font-size: 1rem;

@media (min-width: 1024px) {
  font-size: .8rem;
  margin: 5px
}
`;
export const NavText = styled.p`
color: white;
font-size: 1rem;

@media (min-width: 1024px) {
  font-size: .8rem;
  margin: 5px
}
`;
export const Form = styled.form`
display:flex;
flex-direction:row;

border:1px solid grey;

padding:2px;
`;


