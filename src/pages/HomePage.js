import OurProducts from "../components/homepage/OurProducts"
import SlideShow from "../components/homepage/SlideShow"
import Subscribe from "../components/homepage/Subscribe"
import WhyShop from "../components/homepage/WhyShop"
import Header from "../components/Header"
import Footer from "../components/Footer"


const HomePage = () => {
  return `
  ${Header()}
  ${SlideShow()}
  ${WhyShop()}
  ${OurProducts()}
  ${Subscribe()}
  ${Footer()}
  `
}

export default HomePage