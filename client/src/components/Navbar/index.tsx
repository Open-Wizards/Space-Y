import { Transition } from '@headlessui/react';
import React from 'react';
import {  ChevronLeft, Home, InfoCircle, Rocket } from 'tabler-icons-react';
import HamburgerButton from './HamburgerButton';

export default function Navbar ()  {
  const [isOpen ,setOpen] = React.useState(true);
  const options =[
    {name: 'Home', link: '/',
    icon: <Home />
  },
    {name: 'About', link: '/about'
    ,icon: <InfoCircle/>
  },
    {name: 'Rockets', link: '/Rocket' ,icon : <Rocket/>
  },

  ]
  return (<>
<nav className='z-50 absolute top-0 flex flex-wrap w-full  justify-between px-2 md:px-5 p-2'>
<HamburgerButton
  isOpen={isOpen}
  onClick={setOpen}
/>
<h1 className="text-gray-100 text-lg md:text-xl font-quickSand">SpaceY</h1>


<div className='absolute left-0 top-0'>
      <Transition
      show={isOpen}
          enter="transition ease duration-500 transform"
          enterFrom=" -translate-x-96"
          enterTo=" translate-x-0"
          leave="transition ease duration-300 transform"
          leaveFrom=" translate-x-0"
          leaveTo=" -translate-x-96"
      >    
<div className=" w-80 md:w-96 h-screen">
<RenderNavLinks
  options={options}
  onClick={setOpen}
/>
</div>
  </Transition>
</div>



  </nav>
  </>);
}
 

function RenderNavLinks({options,onClick}:{options: {name: string, link: string,icon:React.ReactNode}[],
onClick: (val:boolean) => void
}) {
  return (

    <div className="bg-red-500 h-screen w-full rounded-tr-3xl rounded-br-3xl pr-3 relative overflow-hidden">

      <div className="bg-dark-100 h-screen rounded-tr-3xl rounded-br-3xl flex justify-between flex-col">
    <div>
      <br/>
      <div className=" p-5">
          <button onClick={() => onClick(false)} className="bg-dark-800 text-white hover:bg-gray-800  shadow p-5 rounded-2xl">
      <ChevronLeft />
    </button>
      </div>

    <ul className='flex flex-col gap-5 p-5 md:p-10 '>
      {options.map((option) => (
        <li className='text-gray-50   flex gap-5 group font-semibold md:text-lg p-5 cursor-pointer hover:bg-gray-900 rounded-lg   font-montserrat'>
         {option.icon}
          <a className=' duration-200 group-hover:first-letter:text-red-500' href={option.link}>{option.name}</a>
        </li>
      ))}
    </ul>
</div>

<div>
<div className="h-8 w-full group ">

<span className='text-xs font-montserrat block w-full text-center -rotate-180   group-hover:rotate-0 duration-300 group-hover:scale-125 '>Made with ♥ and React By ROnnie</span>

</div>
</div>
      </div>
      </div>
  );
}




