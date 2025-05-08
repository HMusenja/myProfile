import React from "react";
import clsx from "clsx";

const Container = ({ children, className = "" }) => {
  return (
    <div
    className={clsx(
      "w-full flex-1 min-h-full flex flex-col",
     // "px-4 sm:px-6 lg:px-8",   // normal content padding
      //"md:pl-20",               // prevent overlap with Sidebar (16 = 4rem)
      className
    )}
  
      style={{
        scrollPaddingTop: "var(--navbar-height)"
      }}
    >
      {children}
    </div>
  );
};

export default Container;

