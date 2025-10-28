import React from "react";
import "./Development.css";
import { assets } from "../../assets/assets";

const Development = () => {
  return (
    <div className="dev-page">
      <h1>Welcome to Surya_Dakshin Restaurant ☀</h1>
      <img
        src={assets.slogo}
        alt="Restaurant Breakfast"
        className="dev-image"
      />

      <p>
        At <strong>Surya_Dakshin Restaurant</strong>, we believe that every morning
        deserves a delicious start! Our doors open bright and early to serve
        fresh, healthy, and traditional South Indian breakfasts made with love.
      </p>

      <h2>🍽 Morning Specials</h2>
      <ul>
        <li>🫓 <strong>Idli & Sambar</strong> – Soft steamed rice cakes served with tangy sambar.</li>
        <li>🥞 <strong>Dosa</strong> – Crispy and golden with a variety of fillings like masala, paneer, and cheese.</li>
        <li>🍛 <strong>Pongal</strong> – Comforting dish made from rice and lentils with ghee and cashews.</li>
        <li>🥗 <strong>Upma</strong> – Light and savory semolina porridge with vegetables.</li>
        <li>☕ <strong>Filter Coffee</strong> – Authentic South Indian coffee with a rich aroma.</li>
      </ul>

      <h2>🕒 Opening Hours</h2>
      <p>
        Monday – Sunday: <strong>6:30 AM – 12:00 PM</strong><br />
        Evening Snacks: <strong>5:00 PM – 9:00 PM</strong>
      </p>

      <h2>📍 Visit Us</h2>
      <p>
        Surya_Dakshin Restaurant, Main Road, Latur<br />
        Near Rajiv Gandhi Chauk – Easy to find and impossible to forget!
      </p>

      <p className="dev-quote">
        “Good food, good morning, good mood — that’s our promise!” 🌞
      </p>
    </div>
  );
};

export default Development;