// import logo from './logo.svg';
import './App.css';
import { ProductCard } from './Components/ProductCard';
import { ProductList } from './Components/ProductList';

function App() {
  const products =[
    {
        imageSrc:'Images/Iphone15.jpg',
        title:"Iphone 15 Pro",
        description: [
          "Dynamic Island stays on top of it all",
          "Durable color-infused glass and aluminium design",
          "A Pro-proven powerhouse",
          "Charging as easy as USM-C",
          "48MP camera. Super-hight-resolution photos. 2x Telephoto",
          "Awesome all day battery life"
        ],
        price:"60,000",
    },
    {
        imageSrc:'Images/Iphone_Charger.jpg',
        title:"Iphone Charger",
        description: [
          "20W Original Charger with Lightning Cable Compatible with iphone",
          "14/14Plus/14Pro/",
          "C94 Connector",
          "USB C Connector",
          "MFi Certified Chip",
        ],
        price:"799",
    },
    {
        imageSrc:'Images/Iwatch.jpg',
        title:"Apple watch",
        description: [
          "Stream music on the go",
          "Measure your daily activity",
          "Track your sleep stages",
          "Get help when you need it",
          "Get health insights day and night",
          "Sport loop, USB-C Magnetic Charging Cable",
          "Call or text without your iphone",
        ],
        price:"29,900",
    },
    {
        imageSrc:'Images/Apple_Airpods.jpg',
        title:"Apple Airpods",
        description: [
          "Touch controls and water resistance IPX4",
          "Charging Case",
          "LED Indicator",
          "wireless charging",
          "Bluetooth/Pariing Button and Power Input",
          "Customise your sound with the marshall app"
        ],
        price:"11,999",
    },
  ];

  return (
    <div className="App">
      <ProductList>
        <ProductCard width="128px" height="128px" background="lightpink" products={products[0]} />
        <ProductCard width="128px" height="128px" products={products[1]} />
        <ProductCard width="128px" height="128px" background="peru" products={products[2]} />
        <ProductCard width="128px" height="128px" background="lightolivegreen" products={products[3]} />
      </ProductList>
    </div>
  );
}

export default App;
