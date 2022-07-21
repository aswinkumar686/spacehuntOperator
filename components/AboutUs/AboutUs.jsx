import React from 'react';

// import "https://fonts.googleapis.com";
// import "https://fonts.gstatic.com";
// import "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" ;
// import "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer";
// import "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer";

import '../../assets/css/header.css';
import '../../assets/css/banner.css';
import '../../assets/css/home-page.css';
import '../../assets/css/about.css';
import '../../assets/css/campaign.css';
import '../../assets/css/footer.css';

import Decrowd from './components/Decrowd';
import Difference from './components/Difference';
import Fund from './components/FundRaising';
import OurTeam from './components/OurTeam';
import Testimonials from './components/Testimonials';
import NewCampaign from './components/NewCampaign';
import Services from './components/Services';
import '../../assets/css/about.css';

export default function AboutUs() {
  return (
    <>
      <Decrowd />
      <Difference />
      <Services />
      <Fund />
      <OurTeam />
      <Testimonials />
      <NewCampaign />
    </>
  );
}
