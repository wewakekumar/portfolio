import { ReactElement } from "react";

interface CardProps {
  children: ReactElement;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="rounded p-4 w-36 h-36 bg-lightBackGround text-secondary hover:bg-primary hover:text-tertiary">
      {props.children}
    </div>
  );
};

export default Card;
