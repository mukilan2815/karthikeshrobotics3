import Aboutus from "./Pages/Aboutus";
import Community from "./Pages/Community";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Whatwedo from "./Pages/Whatwedo";
import Workshop from "./Pages/Workshop";

export default function Page() {
  return (
    <div>
      <Home />
      <Whatwedo />
      <Aboutus />
      <Workshop />
      <Shop />
      <Community />
      <Footer />
    </div>
  );
}
