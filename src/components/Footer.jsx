import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-emerald-950">
     <div className="border-t border-emerald-950 pt-4 pb-4 text-center text-xs ">
          <p>&copy; 2025 My Portfolio. All rights reserved.</p>
          <div className="flex justify-center space-x-4 text-xs">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookie Settings
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
