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
      description:
        "Fragrant Basmati rice and tender chicken, slow-cooked (dum-pukht) with aromatic spices. Served with a side of cooling mint raita.",
    },
    {
      name: "Chole Bhature",
      price: 8,
      imageSource: choleBhatureImg,
      description:
        "Experience Delhi's favourite street food! A delicious, spicy chickpea curry served with two freshly fried, pillowy bhature. It's the ultimate comfort food that's bursting with flavour.",
    },
    {
      name: "Naan",
      price: 7,
      imageSource: naanImg,
      description:
        "Our classic soft naan, baked fresh in the tandoor and generously brushed with melted butter.",
    },
    {
      name: "Pizza",
      price: 5,
      imageSource: pizzaImg,
      description:
        "Freshly baked with a hand-tossed crust, tangy tomato sauce, and gooey mozzarella cheese. Customise with your choice of toppings.",
    },
    {
      name: "Lassi",
      price: 3,
      imageSource: lassiImg,
      description:
        "A traditional, refreshing yogurt drink. Choose from classic Sweet Lassi or a savoury, spiced Masala Chaas.",
    },
    {
      name: "Butter Paneer",
      price: 10,
      imageSource: paneerImg,
      description:
        "Soft paneer cubes simmered in our signature rich and creamy tomato gravy. A smooth, velvety, and irresistible classic.",
    },
  ];
  let menuItemsHtml = document.createElement("div");
  menuItemsHtml.classList.add("menu-items-wrapper", "container");
  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
    <div class="item-img-wrapper"></div>
    <div class="menu-item-price">$${item.price}</div>
    <div class="menu-item-main">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    </div>`;
    menuItem.children[0].style.backgroundImage = `url(${item.imageSource})`;
    menuItemsHtml.appendChild(menuItem);
  });
  let menuSectionHtml = `
    <div class="menu">
        <div class="img-banner">
            <div class="container">
                <h3>Our Menu</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, placeat odit iusto, mollitia repudiandae laboriosam officia animi hic eligendi ad molestias obcaecati illo sit. Dolorem.</p>
            </div>
        </div>
       ${menuItemsHtml.outerHTML}
    </div>
  `;
  return menuSectionHtml;
}
export default menu;
