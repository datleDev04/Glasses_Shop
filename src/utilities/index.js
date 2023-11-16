import Navigo from "navigo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SlideShow from "../components/homepage/SlideShow";

const router = new Navigo("/",{linksSelector:"a", hash:true})

const render =  (target, content) =>{
    target.innerHTML = Header()  + content() + Footer() ;

}

export  {render,router}