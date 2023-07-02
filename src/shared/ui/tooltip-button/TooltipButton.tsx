
import React from "react";
import './TooltipButton.scss';

interface TooltipButtonProps {
  info: string;
  style?: React.CSSProperties;
}

export const TooltipButton = ({ info, style }: TooltipButtonProps) => {
  return (
    <button
      data-clue={info}
      className="more-info clue"
      style={style}
    >
      ?
    </button>
  );
};






// import React from "react";

// import './TooltipButton.scss';

// interface TooltipButtonProps {
//   info: string;
//   style?: React.CSSProperties;
// }

// export const TooltipButton= ({ props, style }: TooltipButtonProps ) => {
//   return (
//     <button
//       data-clue={props.info}
//       className={'more-info clue'}
//       style={style}
//     >?</button>
//   );
// };
