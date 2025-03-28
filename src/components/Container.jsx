import React from "react";
import clsx from "clsx";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={clsx(
        "w-full px-4  sm:px-6 lg:px-8 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
