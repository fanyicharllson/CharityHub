import type { ReactNode } from "react";

interface Cardprops {
  heading: string;
  text: string;
  icon: ReactNode; // can be any React component or text string
 // other props... // For example, you could pass a background color, border radius, etc. here.
}


const CardComponent = ({heading, text, icon}: Cardprops) => {
  return (
    <div className="card text-center flex justify-center flex-col items-center">
      <div>{icon}</div>
      <h2 className="font-semibold py-3">{heading}</h2>
      <div>{text}</div>
    </div>
  );
};


export default CardComponent;

