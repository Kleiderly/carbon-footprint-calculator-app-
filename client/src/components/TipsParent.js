import Tips from './Tips';
import React from 'react';
import TipsChild from './TipsChild';

const TipsParent = () => {
   const materialCard = {
      image: '../img/items-images/t-shirtW.png',
      text: 'Every year, global emissions from textile production are equivalent to 1.2 billion tonnes of CO2, a figure that outweighs the carbon footprint of international flights and shipping combined',
   };

   const fasteningCard = {
      image: '../img/items-images/t-shirtW.png',
      text: 'European Countries Are Among the World’s Highest Carbon Emitters',
   };
   const logisticsCard = {
      image: '../img/items-images/t-shirtW.png',
      text: 'Clothes, footwear and household textiles are responsible for water pollution, greenhouse gas emissions and landfill',
   };
   return (
      <div>
         <TipsChild item1={materialCard.text} />
         <Tips item1={materialCard.text} />
      </div>
   );
};

export default TipsParent;
