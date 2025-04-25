import React from "react";
import clsx from "clsx";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={clsx(
        "w-full flex-1 px-4 sm:px-6 lg:px-8 min-h-full flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;

