import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Head = styled.div`

`;
export const LogoImage = styled.img`
@media (min-width: 768px) {
  width: ${px2vw(20, 768)};
  min-height: ${px2vw(10, 68)};
  height: 10%;
}

@media (min-width: 1024px) {
  width: ${px2vw(200)};
  min-height: ${px2vw(80)};
}

`;
export const LogoText = styled.h3`
color: #333;
font-size: 1rem;
@media (min-width: 1024px) {
  font-size: .9rem;
  margin: 10px
  padding-right:50px;
  position:bottom;
}
`;
export const HeaderButtonTitle = styled.button`
border: none;
color: black;
padding: 0.50em 1em;
font-size: 13px;
cursor: pointer;
float:right;
margin:5px;
background-color: inherit;
outline: none;
&:hover {
  color: #1e79b6;
}
`;
export const HeaderText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 0.6rem;
  @media (min-width: 1024px) {
    font-size: 1.25rem;
    line-height: 1.8;

  }
`;
export const HeaderContent = styled.div`
display: flex;
justify-content: space-evenly;
padding:4em;

 `;
 export const HeaderContentImage = styled.img`
float:right;
 `;

export const HeaderButton = styled.button`
  background: orange;
  border: none;
  border-radius: 25px;
  color: white;
  padding: 0.50em 1.5em;
  font-size: 10px;
  cursor: pointer;
  outline: none;
  float:right;
  margin:5px;

}
`;
export const AttendButton = styled.button`
  background: #232323;
  border: none;
  border-radius: 25px;
  color: white;
  padding: 0.80em 2em;
  font-size: 10px;
  margin:5px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: white;
  };
  
}
`;
export const ViewHighButton = styled.button`
  background: transparent;
  border: .1rem solid;
  border-radius: 25px;
  color: white;
  padding: 0.25em 1em;
  font-size: 12px;
  margin:5px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: white;
  };

}
`;
export const BodyContainer = styled.div`
background:#006994;
padding: 3em 2em;

`;
export const BodyTitle = styled.h3`
color: white;
font-size: 2rem;
text-align:center;
`;
export const BodyTextContainer = styled.div`
column-count: 2;
column-gap: 6em;

;

`;
export const Conferences = styled.div`
color:white;
position:relative;
top:0;
border-bottom-style: solid;
border-bottom-width: thin;
border-bottom-color: white;


`;
export const BodyText = styled.p`
color: white;
text-align: left;
margin-top: ${px2vw(20)};
font-size: 1.5rem;
word-wrap: break-word;

@media (min-width: 1024px) {
  font-size: 1rem;
  line-height: 1.8;

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
    line-height: 1.8;

  }
`;
export const NavContainer = styled.div`
background:#232323;
padding: 2em 0.50em;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: flex-start;
`;
export const Summary = styled.div`
color:white;
padding: 1em 1em;
margin-top:0px;
`;
export const Table = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0.10em 0.25em;
line-height: 4;
`;
export const Horizontal = styled.div`
border-bottom-style: solid;
border-bottom-width: thin;
border-bottom-color: white;
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
  padding: 20px;
  line-height: 1.8;
}
`;
export const NavButton = styled.button`
  background: orange;
  border: none;
  border-radius: 25px;
  color: white;
  padding: 0.50em 1.5em;
  font-size: 10px;
  cursor: pointer;
  outline: none;
  margin:5px;

}
`;
export const Form = styled.form`
display:flex;
background:white;
flex-direction:row;
border: none;
border-radius: 25px;
border:1px solid grey;

padding:5px;
`;
export const Input = styled.input`
padding: 0.50em 1em;
border: none;
type:text,
border-radius: 25px;
color:black;
&:focus {
  outline: none;
  box-shadow: 0px 0px 2px white;
}
`;
export const FormButton = styled.button`
border:1px solid blue;
background:#232323;
color:white;
border: none;
border-radius: 25px;
padding: 0.25em 1.5em;
cursor: pointer;
&:hover {
  color: white;
}
&:focus {
  outline: none;
  box-shadow: 0px 0px 2px white;
};
`;
export const Span = styled.span`
padding-right: 0.5em;
float: right;

`;
export const HeaderImage = styled.div`
margin: 0.25em; 
display: flex;
padding:5px;
`;
export const Anchor = styled.a`
color: inherit; 
 `;




