const db = require('../config/connection');
const { Product, Category } = require('../models/');
const cleanDb = require('./cleanDB')
db.once('open', async ()=> {
    await cleanDb("Product","products");
    await cleanDb("Category","categories" );
    const categories = await Category.insertMany([
        { "name": "TVs" },
        { "name": "Tablets" },
        { "name": "Computer" },
        { "name": "Graphics Card" },
        { "name": "Mouses/Mice" }
      ]
      );
    await Product.insertMany([
        {
           "productName": "Amazon Fire TV 50 inch 4-Series 4K UHD smart TV, stream live TV without cable",
           "quantity": 250,
           "price":298.99,
           "description":"Display Size:50 inches Refresh Rate:60 hertz Resolution:4K  Model Year:2021",
           "image":"https://m.media-amazon.com/images/I/51QBHKpw5dL._AC_UY218_.jpg",
           "productId":"1",
           "category": categories[0]._id
        },
        {
            "productName": "SAMSUNG Galaxy Tab A8 10.5”",
            "quantity":1000,
            "price":159.99,
            "description":" 64GB Android Tablet, LCD Screen, Kids Content, Smart Switch, US Version, 2022, Pink Gold",
            "image":"https://m.media-amazon.com/images/I/71nSf8TQyHL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
            "productId":"2",
            "category": categories[1]._id
        },
        {
            "productName": "MSI - NVIDIA GeForce RTX 3060 Ventus 3X ",
            "quantity":450,
            "price":299.99,
            "description":"12G OC - 12GB GDDR6 - PCI Express 4.0 - Graphics Card - Black",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452940_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"3",
            "category": categories[2]._id
        },
        {
          "productName":  "Microsoft Surface Go 2 (TGF-00001) | 10.5in (1920 x 1280) ",
          "quantity":250,
          "price":279.00,
          "description":" Touch-Screen | Intel Pentium 4425Y Processor | 4GB RAM | 64GB eMMC Storage | Windows 10 Pro | Platinum",
          "image":"https://m.media-amazon.com/images/I/51R81nqk-OL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
          "productId":"4",
          "category": categories[1]._id
        },
        {
            "productName":  "CyberPowerPC - Gamer Master Gaming Desktop - AMD Ryzen 5 7600",
            "quantity":40,
            "price":899.99,
            "description":" 16GB Memory - NVIDIA GeForce RTX 4060 8GB - 2TB SSD - White",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6553/6553002_rd.jpg;maxHeight=640;maxWidth=550",
            "productId":"5",
            "category": categories[2]._id
        },
        {
            "productName": "test mouse",
            "quantity":100,
            "price":25.00,
            "description":"basic black mouse without any extra buttons",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQwNLo9eimG4WW924fnZEOMvu7dBP0FiXXMqs7XrfcnMzW7aYNIbdDTzUXSdIu7dBXI2A&usqp=CAU",
            "productId":"6",
            "category": categories[4]._id
        },
        {
            "productName": "Amazon - Fire HD 10 - 10.1 Tablet  - 32GB - Black",
            "quantity":75,
            "price":80.00,
            "description":"Clearer, sharper images and graphics, Ideal for movies and most games",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6562/6562284_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"7",
            "category": categories[1]._id
        },
        {
            "productName": "PNY - NVIDIA GeForce GT 710 2GB PCI Express 2.0 Graphics Card",
            "quantity":50,
            "price":54.99,
            "description":"WITH GPU Base Clock Frequency0.954 gigahertz",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5092/5092306_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"8",
            "category": categories[3]._id
        },
        {
            "productName": "Lenovo - Tab M10 Plus ",
            "quantity":50,
            "price":209,
            "description":"(3rd Gen) - 10.61inch - Tablet - 64GB - Storm Grey",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502010_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"9",
            "category": categories[1]._id
        },
        {
            "productName": "Amazon Fire Max 11 tablet ",
            "quantity":50,
            "price":199,
            "description":"all-in-one for streaming, reading, and gaming, 14-hour battery life, optional stylus and keyboard, 128 GB, Gray, without lockscreen ads",
            "image":"https://m.media-amazon.com/images/I/51gj5oQXbnL._AC_SX569_.jpg",
            "productId":"10",
            "category": categories[1]._id
        },
        {
            "productName": "Samsung - Galaxy Tab S7  ",
            "quantity":100,
            "price":399,
            "description":"64GB - Wi-Fi - with S-Pen - Mystic Black",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464698cv11d.jpg;maxHeight=640;maxWidth=550",
            "productId":"11",
            "category": categories[1]._id
        },
        {
            "productName": "Samsung 43inch 4K UHD TV  ",
            "quantity":100,
            "price":749.00,
            "description":"it includes Xbox One S 500GB Console Bundle",
            "image":"https://scene7.samsclub.com/is/image/samsclub/0040980066999_A?$DT_Thumbnail_BB$",
            "productId":"12",
            "category": categories[0]._id
        },
        {
            "productName": "TCL - 32inch  ",
            "quantity":100,
            "price":129.99,
            "description":"Class S3 S-Class 1080p FHD HDR LED Smart TV with Google TV",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6538/6538121_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"13",
            "category": categories[0]._id
        },
        {
            "productName": "Hisense - 32inch  ",
            "quantity":550,
            "price":89.99,
            "description":"Class A4 Series LED HD Smart Vidaa TV",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6542/6542601_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"14",
            "category": categories[1]._id
        },
        {
            "productName": "Sony QD-OLED 65 inch  ",
            "quantity":50,
            "price":3298.00,
            "description":"BRAVIA XR A95L Series 4K Ultra HD TV: Smart Google TV with Dolby Vision HDR",
            "image":"https://m.media-amazon.com/images/I/91FLVbv6qhL._AC_SX679_.jpg",
            "productId":"15",
            "category": categories[1]._id
        },
        {
            "productName": "Toshiba - 32inches   ",
            "quantity":300,
            "price":89.99,
            "description":"Class V35 Series LED HD Smart VIDAA TV",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6544/6544757_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"16",
            "category": categories[1]._id
        },
        {
            "productName": "Samsung - 43inches  ",
            "quantity":300,
            "price":259.99,
            "description":"Class CU7000 Crystal UHD 4K Smart Tizen TV",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6537/6537422_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"17",
            "category": categories[1]._id
        },
        {
            "productName": "PNY - NVIDIA GeForce GTX 1650 4GB GDDR6 PCI Express 3.0 Graphics Card  ",
            "quantity":300,
            "price":189.99,
            "description":"with Dual Fan - Black",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502683_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"18",
            "category": categories[3]._id
        },
        {
            "productName": "XFX - AMD Radeon RX 580 GTS XXX  ",
            "quantity":120,
            "price":139.99,
            "description":"8GB GDDR5 PCI Express 3.0 Graphics Card - Black",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6136/6136515_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"19",
            "category": categories[3]._id
        },
        {
            "productName": "GIGABYTE - NVIDIA GeForce RTX 3060 12GB GDDR6 PCI Express 4.0 Graphics Card  ",
            "quantity":200,
            "price":289.99,
            "description":"Color-Black",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6468/6468931_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"20",
            "category": categories[3]._id
        },
        {
            "productName": "Logitech - Lift Vertical Wireless Ergonomic Mouse with 4 Customizable Buttons  ",
            "quantity":1000,
            "price":66.99,
            "description":"Color- Graphite",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501169_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"21",
            "category": categories[4]._id
        },
        {
            "productName": "Dell Mobile Wireless Mouse – MS3320W  ",
            "quantity":1000,
            "price":23.00,
            "description":"Color- Grey",
            "image":"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/input-devices/dell/mouse/ms3320w/global-spi/dell-wireless-mouse-gray-ms3320w-details-hero-500-ng.psd?hei=402&qtl=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto",
            "productId":"22",
            "category": categories[4]._id
        },
        {
            "productName": "Logitech - M100 Wired Optical Ambidextrous PC Mouse with 1000 DPI Optical Tracking   ",
            "quantity":1000,
            "price":9.99,
            "description":"Color- Gray",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1147/1147528_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"23",
            "category": categories[4]._id
        },
        {
            "productName": "CORSAIR - Scimitar RGB Elite Wired Optical Gaming Mouse",
            "quantity":1000,
            "price":60.99,
            "description":"with 17 Programmable Buttons - Black",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6393/6393997_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"24",
            "category": categories[4]._id
        },
        {
            "productName": "Microsoft - Surface Arc Wireless BlueTrack Ambidextrous Mouse",
            "quantity":1000,
            "price":79.99,
            "description":"Color - Grey",
            "image":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5859/5859104_sd.jpg;maxHeight=640;maxWidth=550",
            "productId":"25",
            "category": categories[4]._id
        }
    ]);
    console.log('Products seeded')
    console.log('Categories seeded')
    process.exit(0);
})