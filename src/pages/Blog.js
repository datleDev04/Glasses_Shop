import Header from "../components/Header"
import Footer2 from "../components/Footer2"
import WhyShop from "../components/homepage/WhyShop"
import BlogTitle from "../components/Blog/BlogTitle"

const Blog = () => {
  return `
  ${Header()}
  ${BlogTitle()}
  ${WhyShop()}
  ${Footer2()}

  `
}

export default Blog