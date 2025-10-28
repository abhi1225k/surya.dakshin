import React from "react";
import "./Design.css"; // (optional if you want custom styling)
import { assets } from "../../assets/assets";

const Design = () => {
  return (
    <div className="design-page">
      <h1>Idli – A South Indian Classic</h1>
      <img
        src={assets.sidli}
        alt="Idli"
        className="idli-image"
      />
      <p>
        Idli is a soft, fluffy steamed rice cake that is one of the most popular
        breakfast dishes in South India. Made from fermented rice and lentil
        batter, idlis are not only delicious but also light and healthy.
      </p>

      <h2>Ingredients</h2>
      <ul>
        <li>1 cup parboiled rice</li>
        <li>½ cup urad dal (split black gram)</li>
        <li>Salt to taste</li>
        <li>Water for soaking and grinding</li>
      </ul>

      <h2>How It’s Made</h2>
      <ol>
        <li>Soak rice and dal separately for 4–6 hours.</li>
        <li>Grind both into a smooth batter and let it ferment overnight.</li>
        <li>Pour batter into idli molds and steam for 10–12 minutes.</li>
        <li>Serve hot with sambar and coconut chutney!</li>
      </ol>

      <p className="fun-fact">
        🍽 Fun Fact: Idli is considered one of the healthiest breakfasts in the world!
      </p>
    </div>
  );
};

export default Design;