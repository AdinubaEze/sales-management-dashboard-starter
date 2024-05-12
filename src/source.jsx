import { MdSpaceDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BsChatSquareDots } from "react-icons/bs";
import { FaSitemap } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscSourceControl } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import {profile2,profile3,profile4,profile5,
        profile6,profile7,profile8
} from './assets/images'

export  const sidebar = [
    {
        name:"Dashboard",
        route:"/",
        icon:<MdSpaceDashboard/>,
    },
    {
        name:"Customers",
        route:"",
        icon:<FiUsers/>,
    },
    {
        name:"Chats",
        route:"",
        icon:<BsChatSquareDots/>,
        notificationCount:3,
    },
    {
        name:"Products",
        route:"",
        icon:<FaSitemap/>,
    },
    {
        name:"Orders",
        route:"",
        icon:<HiOutlineShoppingBag/>,
    },
    {
        name:"Sources",
        route:"",
        icon:<VscSourceControl/>,
    },
    {
        name:"Settings",
        route:"",
        icon:<IoSettingsOutline/>,
    },
]
export const userMenus = [
    {name:"Profile", route:"#"},
    {name:"Settings", route:"#"},
    {name:"Logout", route:"#"},
]
export const orders = [
    {
        customerName:"Ngozi Eze",
        customerProfile:profile2,
        customerAddress: "Enugu",
        productName: "Smartwatch",
        purchaseDate: new Date("January 10, 2024"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$10.5",
    },
    {
        customerName:"Sam Onyi",
        customerProfile:profile3,
        customerAddress: "Lagos",
        productName: "Smartphone",
        purchaseDate: new Date("December 15, 2023"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$205",
    },
    {
        customerName:"Amara Praise",
        customerProfile:profile4,
        customerAddress: "Abia Town",
        productName: "Smart Thermostat",
        purchaseDate: new Date("July 20, 2023"),
        status:2,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$9.9",
    },
    {
        customerName:"Emmanuel",
        customerProfile:profile5,
        customerAddress: "FCT Abuja",
        productName: "Robot Vacuum Cleaner",
        purchaseDate: new Date("May 1, 2023"),
        status:0,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$101.9",
    },
    {
        customerName:"Kwame Jow",
        customerProfile:profile6,
        customerAddress: "Accra",
        productName: "Electric Toothbrush",
        purchaseDate: new Date("January 2, 2023"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$11.6",
    },
    {
        customerName:"Eze",
        customerProfile:profile7,
        customerAddress: "Enugu",
        productName: "Portable Printer",
        purchaseDate: new Date("November 11, 2022"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$300.9",
    },
    {
        customerName:"Patrick",
        customerProfile:profile8,
        customerAddress: "Niger",
        productName: "Digital Voice Recorder",
        purchaseDate: new Date("August 16, 2022"),
        status:0,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$8.9",
    },
]

export const trendingProducts = [
    {
      name:"Analog/digital Executive Wrist Watch For Men - Gold in Nigeria",
      image:"https://cartnear.s3.us-east-2.amazonaws.com/ng/076f13eaa74034be19a405f27a5a9c1d.jpg",
      price:"$230",
      discount:"20%",
    },
    {
      name:"Ozeino Gaming Headset PS5 PS4 Headset tare",
      image:"https://m.media-amazon.com/images/I/61tl-Fi6-uL._AC_SL1500_.jpg",
      price:"$60",
      discount:"25%",
    },
    {
      name:"IPhone",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
      price:"$57",
      discount:"15%",
    },
    {
      name:"Unisex Multi Zipper Black Bomber Jacket",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGpSgWsKzhLnMWq494iMgfIAdPDEIEE0JXhqMlHnpow&s",
      price:"$99.9",
      discount:"28%",
    },
    {
      name:"Gold Necklace Set | Gold Ornaments Designs",
      image:"https://www.wamanharipethesons.com/portalrepository/images/productsku/WHPS288755_0_r.jpg",
      price:"$35",
      discount:"35%",
    },
    {
      name:"Best laptop brands in India: Top 10 picks that deliver quality",
      image:"https://www.livemint.com/lm-img/img/2024/02/16/1600x900/10_best_laptop_brands_1708068001197_1708068008163.jpg",
      price:"$68",
      discount:"25%",
    },
    {
      name:"Moto Bike",
      image:"https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/D/P/3516_1599063039.jpg",
      price:"$376",
      discount:"30%",
    },
  ]