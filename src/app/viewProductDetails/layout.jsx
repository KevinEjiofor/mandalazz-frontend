import Navbar from '../../components/reusables/Navbar';
import Categories from '../../components/reusables/Categories';

export default function ViewLayout({ children }) {
  return (
    <>
      <Navbar />
      {/* <Categories /> */}
      <main>{children}</main>
    </>
  );
}
