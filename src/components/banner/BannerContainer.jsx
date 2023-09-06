/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {BannerPresentacional} from "./BannerPresentacional"

export const BannerContainer = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate =  ["Web Developer", "Web Designer", "UI/UX Designer" ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect (() => {
    let ticker = setInterval(() => {
      tick();
    }, delta )

    return() => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);

    }else if(isDeleting && updatedText === ""){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }


  return (  

    <BannerPresentacional 
      text={text}
      />

  )
  
  
};

