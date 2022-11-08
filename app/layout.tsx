import { ReactNode } from "react";
import "../styles/globals.css";
import Header from "./Header";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head></head>

      <body className="">
        <Header/>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
