
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import {render,router} from "./utilities";

const app = document.getElementById("app");

router.navigate('/')
router.on('/', () => render(app,HomePage))
router.on('/contact', () => render(app,Contact))
router.on('/products', () => render(app,Products))
router.notFound( () => render(app,NotFound))
router.resolve()
