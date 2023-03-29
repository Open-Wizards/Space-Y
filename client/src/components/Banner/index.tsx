import { Star } from 'tabler-icons-react';
import StarShip from '../../assets/spaceShip.png';




const data = [{
  title: "The Largest Planet in Our Solar System",
   description: "Jupiter is the largest planet in our solar system, with a diameter of 86,881 miles (139,822 kilometers) and a mass that is more than twice the mass of all the other planets in our solar system combined.",
    dates: null, 
    tags: ["Solar System", "Jupiter", "Planets", "Astronomy", "Space Facts"],
  source: "NASA"
},
{
  title: "The First Object Launched Into Space",
  description: "The first object launched into space was the Soviet Union's Sputnik 1, on October 4, 1957. It was a 23-inch (58 cm) diameter sphere that weighed about 183 pounds (83 kg) and orbited Earth for three months.",
  dates: "October 4, 1957",
  tags: ["Sputnik", "Soviet Union", "Space Race", "History", "Satellites"],
  source: "NASA"
},
{
  title: "The Brightest Star in Our Sky",
  description: "Sirius is the brightest star in Earth's night sky, with an apparent magnitude of -1.46. It is located in the constellation Canis Major and is about 8.6 light-years away from Earth.",
  dates: null,
  tags: ["Stars", "Astronomy", "Constellations", "Sirius", "Night Sky"],
  source: "NASA"
},
{
  title: "The Farthest Object Humans Have Sent Into Space",
  description: "The Voyager 1 spacecraft is currently the farthest object humans have sent into space. It was launched on September 5, 1977, and is now more than 14 billion miles (22.5 billion kilometers) from Earth, traveling in interstellar space.",
  dates: "September 5, 1977",
  tags: ["Voyager 1", "Spacecraft", "Interstellar Space", "NASA", "Exploration"],
  source: "NASA"
},
{
  title: "The Most Common Type of Star in the Milky Way",
  description: "Red dwarf stars are the most common type of star in the Milky Way galaxy. They are smaller and cooler than our sun, and can have lifetimes of trillions of years.",
  dates: null,
  tags: ["Milky Way", "Stars", "Red Dwarfs", "Astronomy", "Space Facts"],
  source: "NASA"
}
]


const Banner = () => {
  return ( 
    <div 
    className="w-full h-[80vh]
    shadow  grid place-items-center bg-cover bg-no-repeat
    bg-center 
    relative
    overflow-hidden ">
      <div 
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)`,
          filter: " blur(10px) saturate(0.9) contrast(1.2) brightness(0.7)",
      
        }}
      	className="w-full  absolute scale-105  m-auto z-0 h-[80vh] bg-fixed bg-no-repeat  bg-cover  "></div>
      <div className="container z-10 m-auto flex bg-dark-100 shadow-md h-[70vh]  rounded-xl p-5 flex-wrap">
    
    {data.map((item, index) => {
      return <div>
       {item.title}

      </div>
    })}
      </div>
    </div>
  );
}
 
export default Banner;
function RenderTags (props: { children: React.ReactNode }) {
  return (
    <div className="max-w-xs w-auto p-1 md:p-2 px-2 lg:px-5 text-center text-white h-6 md:h-8 rounded-xl font-semibold text-[8px] md:text-xs bg-blue-400">
      {props.children}
    </div>
  );
}