import React from "react";
import Global from "./styles/global";
import Home from "./pages/Home";
import imageOne from "./images/imageOne.png"
import imageTwo from "./images/imageTwo.png"
import imageThree from "./images/imageThree.png"



const Mentorship =
  "Black in AI has a graduate school mentorship program pairing those applying to graduate schools with mentors who provide feedback, present information sessions, and guide mentees, throughout their application process";
const Financial =
  "Black in AI awards need-based travel grants to attend our annual workshop and the NeurIPS conference. Our grants cover flights, accommodation, daily per diems, vis fees, and registration for the NeurIPS conference. In 2018, 188 works from 28 countries were presented at BAI with a total of $375k given out in travel grants supporting 284 people.";
const advocacy = 
  "Our advocacy on barriers faced by our members ranging from visa issues while attending major AI conferences, to the lack of a presence by international companies on the African continent has resulted in new processes by conferences such as NeurIPS to mitigate barriers faced by our members, a major international AI conference (ICLR) to be held in Ethiopia (the first such a conference is held in Africa), and the first Google AI center in Africa (Accra, Ghana)."
  const data = [
  {
    id: Math.random(),
    image:imageOne,
    imageDesription:"A woman and a man standing near table conversating",
    title: "Mentorship",
    text: Mentorship,
  },
  {
    id: Math.random(),
    image:imageTwo,
    imageDesription:"A woman giving lecture",
    title: "Financial Support",
    text: Financial,
  },
  {
    id: Math.random(),
    image:imageThree,
    imageDesription:"A man on stage giving a tech talk",
    title: "Advocacy",
    text: advocacy,
  }
];

function App() {
  return (
    <>
      <Global />
      <Home boxData={data} />
    </>
  );
}

export default App;