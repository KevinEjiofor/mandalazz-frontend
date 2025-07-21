import RegNavbar from "../../components/reusables/RegNavBar"
import { ReactNode } from "react";

export default function UserLayout({ children }) {
  return (
    <div>
      <RegNavbar />
      <main>{children}</main>
    </div>
  );
}




  
