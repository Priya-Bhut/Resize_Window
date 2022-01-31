import React, { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}
function ResizeWindow(props) {
  const [height, width] = useWindowSize();
  return (
    <>
      height:{height}
      <br />
      width:{width}
    </>
  );
}

export default ResizeWindow;
