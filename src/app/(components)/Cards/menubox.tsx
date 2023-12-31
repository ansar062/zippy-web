import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import RoundBox from "./RoundBox";

const MenuBox = (props: {
  imageSrc: string | undefined;
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  return (
    <RoundBox className="  ">
      <div className=" ml-3  rounded-lg w-[90%]     h-[18vh] shadow  shadow-[#00000030]">
        <img
          src={props.imageSrc}
          className="ml-2 pt-2 w-[150px] h-[120px] "
          alt=""
        />
      </div>{" "}
      <h1 className="pt-1  font-primary text-center font-bold">{props.title}</h1>
    </RoundBox>
  );
};

export default MenuBox;
