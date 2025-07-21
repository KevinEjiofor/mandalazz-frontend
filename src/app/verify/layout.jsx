import RegNavbar from "../../components/reusables/RegNavBar"
import { ReactNode } from "react";


export default function verifyLayout({ children }) {
  return (
    <>
      <RegNavbar />
      <main>{children}</main>
    </>
  );
}