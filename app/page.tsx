import Header from "./src/Components/Header";
import Hero from "./src/Components/Hero";
import HomeClient from "./HomeClient";
import Footer from "./src/Components/Footer";
import LinkArea from "./src/Components/LinkArea";

export default function Page() {
  return (
    <div>
      <Header />
      <HomeClient />
      <LinkArea />
      <Footer />
    </div>
  );
}
