import React from "react";
import { Helmet } from "react-helmet";
//import twitter_card from "../../src/twitter_card.png";

function SEO() {
  return (
    <Helmet>
      <title>Configable Reader</title>
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
}

export default SEO;
