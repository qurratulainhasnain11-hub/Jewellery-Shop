import "../Styling/homepage.css";
import FeaturedProducts from "./FeaturedProducts";
import bannerImg from "../assets/banner.jpg";
function Home() {
  return (
    <main className="home">
      {/* Banner */}
      <section
        className="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bannerImg})`,
        }}
      >
        <h1>Jewellery Shop</h1>
        <p>Elegant and timeless jewellery for every occasion.</p>
      </section>

      {/* Featured */}
      <section>
        <h2>Featured Products</h2>
        <FeaturedProducts />
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Jewellery Shop</p>
      </footer>
    </main>
  );
}

export default Home;
