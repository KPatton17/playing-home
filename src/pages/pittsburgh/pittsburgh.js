import React from 'react';
import './pittsburgh.scss';
import CityHero from "../../components/cityHero/cityHero";
import SideNav from "../../components/sideNav/sideNav";  

function App() {
  return (
    <div className="pittsburgh-container">
        <CityHero city="Pittsburgh" image="./img/pittsburgh.jpg"></CityHero>
        <div className="d-flex content-conter"> 
        <SideNav></SideNav>
        <div className="pittsburgh-blurb mb-3">
            <h3 className="mb-3"> Overview</h3>
              <p>Pittsburgh is eclectic. That’s the one word I would use if I could only use one word. I spent most of my five years there living in Oakland, or the rundown college town surrounding the University of Pittsburgh. This meant that I spent a lot of time trying to get out of Oakland and explore other areas. </p> 
              <p>The issue with Pittsburgh is that there is an abundance of hills and rivers, which divide the city into little sections that make it beautiful, but also hard to get around. The roads are weird and often don’t make sense. The downtown is surrounded by water on many sides and there are hundreds of bridges (literally). </p> 
              <p>Again, this all makes it a beautiful city to explore, but you have to get creative in order to do the exploring. Public transportation is spotty, so I would recommend tackling Pittsburgh area by area, planning walks or bikes in each area, and ubering in between. Pittsburgh is the home of many Ubers. </p>
              <p>The culture always felt very old-school to me. You have a strong Polish population of mostly older adults, who were born and raised in the city… and also make awesome perogies and the donuts.</p>
              <p>The multiple universities (Pitt, Duquesne, Carnegie Mellon, Chattam, etc) bring a crowd of young adults and a diverse population. Pittsburgh almost has a midwest feel mixed in with a lot of youth and new technology startups. </p> 
              <p>For those wanting to visit, either just for a weekend, or for a potential new home, Pittsburgh offers many things. Old, authentic culture is a big one. There are some amazing neighborhoods, discussed below, that bring you back in time. Food is another; discussed below. Health and fitness have made their way into the city and it now offers everything from boutique studios to outdoor community programs. And, of course, the sports teams. </p> 
              <p>The city feels alive in a whole new way when there’s a game going on at Heinz Field, PNC Park, or PPG Paints Arena. This city is a fun and unique place to escape to for a quick weekend and can also be a really cute, family-oriented  place to set down roots. Either way, make sure Mt. Washington is on the top of your list to check out first. I expand on each of these below. </p>
            <h3 id="neighborhood" className="mt-3">Neighborhoods</h3>
            <h3 className="mt-3">Food & Drink</h3>
            <h3 className="mt-3">Activities</h3>
            <h3 className="mt-3">Health & Wellness</h3>
            <h3 className="mt-3">Lodging</h3>
            <h3 id ="transportation" className="mt-3">Transportation</h3>
        </div>
        </div>
    </div>
  );
}

export default App;
