const PRODUCTS = [
  {
    // Price-checking key-value pairs:
    //         id: "ZYW3VTp",
    // ! === SKU: "ZYW3VTp",
    //         price: 25,
    // Basic key-value pairs:
    //         id: 1,
    //         name: 'Brown Brim',
    //         imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    //         price: 25,
    // Full ProductPage key-value pairs:
    title: "ZYW3VTp",
    id: "ZYW3VTp",
    SKU: "ZYW3VTp",
    name: "Brown Brim",
    desc: `Brown Brim Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 25,
    oldPrice: 35,
    type: "design-shop",
    brand: "Cowboy",
    colors: "brown",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Hats"],
  },
  {
    title: "ypkgK0X",
    id: "ypkgK0X",
    SKU: "ypkgK0X",
    name: "Blue Beanie",
    desc: `Blu Beanie... Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    img2: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    price: 18,
    oldPrice: 20,
    type: "featured-in-shop",
    brand: "Cowboy",
    colors: "brown",
    isAvailable: "In Stock",
    isAvailableNumber: 3,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Hats"],
  },
  {
    title: "QdJwgmp",
    id: "QdJwgmp",
    SKU: "QdJwgmp",
    name: "Brown Cowboy",
    desc: `Cowoys' favourite wear... Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    img2: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    price: 35,
    oldPrice: 35,
    type: "featured-in-shop",
    brand: "Cowboy",
    colors: "brown",
    isAvailable: "In Stock",
    isAvailableNumber: 3,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Hats"],
  },
  {
    title: "XzcwL5s",
    id: "XzcwL5s",
    SKU: "XzcwL5s",
    name: "Black Jean Shearling",
    desc: `Blak Jean Shearling... Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    img2: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw8777dfa7/1_front_750/00470387-03.jpg?sw=1000&sh=1500",
    price: 125,
    oldPrice: 155,
    type: "featured-in-shop",
    brand: "Jeans",
    colors: "black",
    isAvailable: "In Stock",
    isAvailableNumber: 3,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Jackets"],
  },
];

// SHAPE (with types):
// SKU;
// "XzcwL5s"(string);

// brand;
// "Jeans"(string);

// categories(array);
// 0;
// "Design SHOP Clothes"(string);

// colors;
// "black"(string);

// desc;
// "Black Jean Shearling"(string);

// img;
// "https://i.ibb.co/XzcwL5s/black-shearling.png"(string);

// img2;
// "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw8777dfa7/1_front_750/00470387-03.jpg?sw=1000&sh=1500"(
//   string
// );

// isAvailable;
// "In Stock"(string);

// isAvailableNumber;
// 3(number);

// isNew;
// false(boolean);

// isSale;
// true(boolean);

// name;
// "Black Jean Shearling"(string);

// oldPrice;
// 155(number);

// price;
// "125"(string);

// sub_category(array);

// 0;
// "Jackets"(string);

// type;
// ("featured-in-shop");

const SHOP_PRODUCTS = [
  {
    title: "ZYW3VTp",
    id: "ZYW3VTp",
    SKU: "ZYW3VTp",
    name: "Brown Brim",
    desc: `Brown Brim Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 25,
    oldPrice: 25,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Hats"],
  },
  {
    title: "ypkgK0X",
    id: "ypkgK0X",
    SKU: "ypkgK0X",
    name: "Blue Beanie",
    desc: `Blue Beanie Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 18,
    oldPrice: 18,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Hats"],
  },
  {
    title: "QdJwgmp",
    id: "QdJwgmp",
    SKU: "QdJwgmp",
    name: "Brown Cowboy",
    desc: `Brown Cowboy Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 35,
    oldPrice: 35,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Hats"],
  },
  {
    title: "RjBLWxB",
    id: "RjBLWxB",
    SKU: "RjBLWxB",
    name: "Grey Brim",
    desc: `Grey Brim Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/RjBLWxB/grey-brim.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 25,
    oldPrice: 25,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Hats"],
  },
  {
    title: "YTjW3vF",
    id: "YTjW3vF",
    SKU: "YTjW3vF",
    name: "Green Beanie",
    desc: `Green Beanie Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/YTjW3vF/green-beanie.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 18,
    oldPrice: 18,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Hats"],
  },
  {
    title: "rKBDvJX",
    id: "rKBDvJX",
    SKU: "rKBDvJX",
    name: "Palm Tree Cap",
    desc: `Palm Tree Cap Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 14,
    oldPrice: 14,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Hats"],
  },
  {
    title: "bLB646Z",
    id: "bLB646Z",
    SKU: "bLB646Z",
    name: "Red Beanie",
    desc: `Red Beanie Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/bLB646Z/red-beanie.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 18,
    oldPrice: 18,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Hats"],
  },
  {
    title: "1f2nWMM",
    id: "1f2nWMM",
    SKU: "1f2nWMM",
    name: "Wolf Cap",
    desc: `Wolf Cap Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 14,
    oldPrice: 14,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Hats"],
  },
  {
    title: "X2VJP2W",
    id: "X2VJP2W",
    SKU: "X2VJP2W",
    name: "Blue Snapback",
    desc: `Blue Snapback Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 16,
    oldPrice: 16,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Hats"],
  },
  {
    title: "0s3pdnc",
    id: "0s3pdnc",
    SKU: "0s3pdnc",
    name: "Adidas NMD",
    desc: `Adidas NMD Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
    img2: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 220,
    oldPrice: 220,
    type: "design-shop",
    brand: "Adidas-Nike",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Sneakers"],
  },
  {
    title: "dJbG1cT",
    id: "dJbG1cT",
    SKU: "dJbG1cT",
    name: "Adidas Yeezy",
    desc: `Adidas Yeezy Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/dJbG1cT/yeezy.png",
    img2: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 280,
    oldPrice: 280,
    type: "design-shop",
    brand: "Adidas-Nike",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Sneakers"],
  },
  {
    title: "bPmVXyP",
    id: "bPmVXyP",
    SKU: "bPmVXyP",
    name: "Black Converse",
    desc: `Black Converse Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/bPmVXyP/black-converse.png",
    img2: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 110,
    oldPrice: 110,
    type: "design-shop",
    brand: "Adidas-Nike",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Sneakers"],
  },
  {
    title: "1RcFPk0",
    id: "1RcFPk0",
    SKU: "1RcFPk0",
    name: "Nike White AirForce",
    desc: `Nike White AirForce Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
    img2: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 160,
    oldPrice: 160,
    type: "design-shop",
    brand: "Adidas-Nike",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Sneakers"],
  },
  {
    title: "QcvzydB",
    id: "QcvzydB",
    SKU: "QcvzydB",
    name: "Nike Red High Tops",
    desc: `Nike Red High Tops Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/QcvzydB/nikes-red.png",
    img2: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 160,
    oldPrice: 160,
    type: "design-shop",
    brand: "Adidas-Nike",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Sneakers"],
  },
  {
    title: "fMTV342",
    id: "fMTV342",
    SKU: "fMTV342",
    name: "Nike Brown High Tops",
    desc: `Nike Brown High Tops Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/fMTV342/nike-brown.png",
    img2: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 160,
    oldPrice: 160,
    type: "design-shop",
    brand: "Adidas-Nike",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Sneakers"],
  },
  {
    title: "w4k6Ws9",
    id: "w4k6Ws9",
    SKU: "w4k6Ws9",
    name: "Air Jordan Limited",
    desc: `Air Jordan Limited Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
    img2: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 190,
    oldPrice: 190,
    type: "design-shop",
    brand: "Adidas-Nike",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Sneakers"],
  },
  {
    title: "Mhh6wBg",
    id: "Mhh6wBg",
    SKU: "Mhh6wBg",
    name: "Timberlands",
    desc: `Timberlands Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/Mhh6wBg/timberlands.png",
    img2: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 200,
    oldPrice: 200,
    type: "design-shop",
    brand: "Adidas-Nike",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Accessories"],
    sub_category: ["Sneakers"],
  },
  {
    title: "XzcwL5s",
    id: "XzcwL5s",
    SKU: "XzcwL5s",
    name: "Black Jean Shearling",
    desc: `Black Jean Shearling Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 125,
    oldPrice: 125,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Jackets"],
  },
  {
    title: "mJS6vz0",
    id: "mJS6vz0",
    SKU: "mJS6vz0",
    name: "Blue Jean Jacket",
    desc: `Blue Jean Jacket Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 90,
    oldPrice: 90,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Jackets"],
  },
  {
    title: "N71k1ML",
    id: "N71k1ML",
    SKU: "N71k1ML",
    name: "Grey Jean Jacket",
    desc: `Grey Jean Jacket Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 90,
    oldPrice: 90,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Jackets"],
  },
  {
    title: "s96FpdP",
    id: "s96FpdP",
    SKU: "s96FpdP",
    name: "Brown Shearling",
    desc: `Brown Shearling Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/s96FpdP/brown-shearling.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 165,
    oldPrice: 165,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Jackets"],
  },
  {
    title: "M6hHc3F",
    id: "M6hHc3F",
    SKU: "M6hHc3F",
    name: "Tan Trench",
    desc: `Tan Trench Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/M6hHc3F/brown-trench.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 185,
    oldPrice: 185,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Jackets"],
  },
  {
    title: "7CQVJNm",
    id: "7CQVJNm",
    SKU: "7CQVJNm",
    name: "Blue Tanktop",
    desc: `Blue Tanktop Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/7CQVJNm/blue-tank.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 25,
    oldPrice: 25,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Women"],
  },
  {
    title: "4W2DGKm",
    id: "4W2DGKm",
    SKU: "4W2DGKm",
    name: "Floral Blouse",
    desc: `Floral Blouse Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 20,
    oldPrice: 20,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Women"],
  },
  {
    title: "KV18Ysr",
    id: "KV18Ysr",
    SKU: "KV18Ysr",
    name: "Floral Dress",
    desc: `Floral Dress Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 80,
    oldPrice: 80,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Women"],
  },
  {
    title: "N3BN1bh",
    id: "N3BN1bh",
    SKU: "N3BN1bh",
    name: "Red Dots Dress",
    desc: `Red Dots Dress Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 80,
    oldPrice: 80,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Women"],
  },
  {
    title: "KmSkMbH",
    id: "KmSkMbH",
    SKU: "KmSkMbH",
    name: "Striped Sweater",
    desc: `Striped Sweater Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 45,
    oldPrice: 45,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Women"],
  },
  {
    title: "v1cvwNf",
    id: "v1cvwNf",
    SKU: "v1cvwNf",
    name: "Yellow Track Suit",
    desc: `Yellow Track Suit Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 135,
    oldPrice: 135,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Women"],
  },
  {
    title: "qBcrsJg",
    id: "qBcrsJg",
    SKU: "qBcrsJg",
    name: "White Blouse",
    desc: `White Blouse Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/qBcrsJg/white-vest.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 20,
    oldPrice: 20,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Women"],
  },
  {
    title: "xJS0T3Y",
    id: "xJS0T3Y",
    SKU: "xJS0T3Y",
    name: "Camo Down Vest",
    desc: `Camo Down Vest Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 325,
    oldPrice: 325,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Men"],
  },
  {
    title: "qMQ75QZ",
    id: "qMQ75QZ",
    SKU: "qMQ75QZ",
    name: "Floral T-shirt",
    desc: `Floral T-shirt Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 20,
    oldPrice: 20,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Men"],
  },
  {
    title: "55z32tw",
    id: "55z32tw",
    SKU: "55z32tw",
    name: "Black & White Longsleeve",
    desc: `Black & White Longsleeve Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/55z32tw/long-sleeve.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 25,
    oldPrice: 25,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Men"],
  },
  {
    title: "RvwnBL8",
    id: "RvwnBL8",
    SKU: "RvwnBL8",
    name: "Pink T-shirt",
    desc: `Pink T-shirt Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 25,
    oldPrice: 25,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Men"],
  },
  {
    title: "VpW4x5t",
    id: "VpW4x5t",
    SKU: "VpW4x5t",
    name: "Jean Long Sleeve",
    desc: `Jean Long Sleeve Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 40,
    oldPrice: 40,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Men"],
  },
  {
    title: "mh3VM1f",
    id: "mh3VM1f",
    SKU: "mh3VM1f",
    name: "Burgundy T-shirt",
    desc: `Burgundy T-shirt Solid Slim Fit Single Breasted Formal Blazer, has long sleeves, notched lapel collar and button closure
    Blue Solid Slim Fit Trousers, has 2 pockets and secured with hook and bar closure`,
    img: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
    img2: "https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 25,
    oldPrice: 25,
    type: "design-shop",
    brand: "Zara",
    colors: "all",
    isAvailable: "In Stock",
    isAvailableNumber: 5,
    isNew: false,
    isSale: true,
    categories: ["Design SHOP Clothes"],
    sub_category: ["Men"],
  },
];

export default SHOP_PRODUCTS;
