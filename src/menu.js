import "./css/menu.css";
import chickenBiryaniImg from "./images/biryani.jpg";
import choleBhatureImg from "./images/cholebhature.jpg";
import naanImg from "./images/naan.jpg";
import pizzaImg from "./images/home-pizza.jpg";
import lassiImg from "./images/lassi.jpg";
import paneerImg from "./images/paneer.jpeg";
function menu() {
  let menuItems = [
    {
      name: "Chicken Biryani",
      price: 10,
      imageSource: chickenBiryaniImg,
    },
    {
      name: "Chole Bhature",
      price: 8,
      imageSource: choleBhatureImg,
    },
    {
      name: "Naan",
      price: 7,
      imageSource: naanImg,
    },
    {
      name: "Pizza",
      price: 5,
      imageSource: pizzaImg,
    },
    {
      name: "Lassi",
      price: 3,
      imageSource: lassiImg,
    },
    {
      name: "Butter Paneer",
      price: 10,
      imageSource: paneerImg,
    },
  ];
  let menuItemsHtml = document.createElement("div");
  menuItemsHtml.classList.add("menu-items-wrapper", "container");
  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.style.backgroundImage = `url(${item.imageSource})`;
    menuItem.innerHTML = `
            <div class="menu-item-price">$${item.price}</div>
            <div class="menu-item-main">
                <h3>${item.name}</h3>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime eaque eum id non, molestias rerum rem minus? Iure sapiente nemo consequatur fugiat aperiam sequi!</p>
            </div>`;
    menuItemsHtml.appendChild(menuItem);
  });
  let menuSectionHtml = `
    <div class="menu">
       ${menuItemsHtml.outerHTML}
    </div>
  `;
  return menuSectionHtml;
}
export default menu;
