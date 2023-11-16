import OurProducts from "../components/homepage/OurProducts"
import SlideShow from "../components/homepage/SlideShow"
import Subscribe from "../components/homepage/Subscribe"
import WhyShop from "../components/homepage/WhyShop"

const HomePage = () => {
  return `
  ${SlideShow()}
  ${WhyShop()}
  ${OurProducts()}
  ${Subscribe()}
  `
}

export default HomePage