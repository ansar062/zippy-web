import React from "react";
import ReactDOM from "react-dom";

const Portal = ( props:any ) => {
  const [isMounted, setIsMounted] = React.useState(false);

  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      ReactDOM.render(props.children, ref.current);
      setIsMounted(true);
    }
  }, [ref, props.children]);

  return (
    <div ref={ref} style={{ display: isMounted ? "block" : "none" }} />
  );
};

export default Portal;
