import React from "react";
import "./Marketing.css";
import { assets } from "../../assets/assets";

const Marketing = () => {
  return (
    <div className="marketing-page">
      <h1>📢 Restaurant Marketing Strategies</h1>
      

      <p>
        To make <strong>Surya_Dakshin Restaurant</strong> a favorite breakfast spot,
        we use creative marketing ideas that attract food lovers from all over
        the city. Our goal is to connect taste with trust — because great food
        deserves great attention!
      </p>
      <br/>
      <br/>
      <h2>💡 Types of Marketing We Perform</h2>
      <ul>
        <li>
          📱 <strong>Social Media Marketing:</strong>  
          Sharing daily breakfast photos, reels, and customer feedback on Instagram, Facebook, and WhatsApp.
        </li>
        <li>
          🎁 <strong>Offer Campaigns:</strong>  
          “Buy 1 Get 1 Idli Free” or “Weekend Combo Discounts” to attract regular customers.
        </li>
        <li>
          🧾 <strong>Print & Banner Ads:</strong>  
          Posters and banners near schools, offices, and bus stands to reach local people.
        </li>
        <li>
          🌐 <strong>Online Presence:</strong>  
          Our restaurant website with menu, reviews, and online table booking.
        </li>
        <li>
          🤝 <strong>Customer Engagement:</strong>  
          Feedback forms, lucky draws, and “Selfie with Idli” photo contests!
        </li>
      </ul>

      <h2>📸 Follow Us on Instagram</h2>
      <div className="insta-section">
        <img
          src={assets.instagram}
          alt="Instagram Logo"
          className="insta-logo"
        />
        <p>
          Stay updated with our daily breakfast posts, chef reels, and offers!  
          Follow us on Instagram 👉{" "}
          <a
            href="https://www.instagram.com/surya_dakshin_official?igsh=bXlsdnpmNW96amQ4"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-link"
          >
            @Surya_Dakshin
          </a>
        </p>
      </div>

      <h2>📈 Why Marketing Matters</h2>
      <p>
        Effective marketing helps our restaurant reach new audiences, build
        customer loyalty, and create a memorable brand identity.  
        Because in today’s world, <strong>visibility = profitability!</strong>
      </p>

      <p className="marketing-quote">
        “The best marketing strategy is to serve food that speaks for itself.” 🍽
      </p>
    </div>
  );
};

export default Marketing;