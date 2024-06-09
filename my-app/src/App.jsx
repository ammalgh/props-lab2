import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header />

      <Cards
        imge="https://cdn.pixabay.com/photo/2024/02/08/09/05/mobile-8560599_640.jpg"
        product="name Product"
        descraption="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        price="6000"
      />


<Cards
        imge="https://cdn.pixabay.com/photo/2016/03/27/19/45/camera-1283953_1280.jpg"
        product="Camera"
        descraption="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        price="1000"
      />

<Cards
        imge="https://cdn.pixabay.com/photo/2020/09/23/20/27/headphones-5596987_640.jpg"
        product="Headphones"
        descraption="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        price="1000"
      />



      <Footer />
    </>
  );
}

export default App;
