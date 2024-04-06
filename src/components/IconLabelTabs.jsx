import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BsPersonWorkspace } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {Link as Exlink} from 'react-router-dom';


export default function IconLabelTabs() {
    // const location = useLocation();
    // const path =location.pathname;
    // console.log(path)
  const [value, setValue] = React.useState(0);
  // const defaultTab = React.useRef(null);

  const handleChange = (event) => {

    // setValue(newValue);
    console.log(setValue);
  };
  // React.useEffect(()=>{
  //   switch(path){
  //       case "/explore":
  //           setValue(2);
  //           break;
  //       default:
  //         setValue(0)
  //         break;
  //   }
  // },[path])
  return (
    // <Tabs value={value} onChange={handleChange}>
    //     <Exlink to="/dashboard/spaces">
    //         <Tab value={0} icon={<BsPersonWorkspace/>} label="Spaces" />
    //     </Exlink>
    //     <Exlink to="">
    //         <Tab value={1} icon={<FaStar/>} label="Important" />
    //     </Exlink>
      
    //     <Exlink to="">
    //         <Tab value={2} icon={<MdOutlineTravelExplore />} label="Explore" />
    //     </Exlink>
    //     <Exlink to="">
    //         <Tab value={3} icon={<CgProfile />} label="Profile" />
    //     </Exlink>
    // </Tabs>
    // <Tabs value={value} onChange={handleChange}>
      <Tabs value={value} onChange={handleChange} className='text-black'>
      <Exlink to={"spaces"}>
        <Tab value={0} icon={<BsPersonWorkspace/>} label="Spaces" onClick={()=> setValue(0)}/>
      </Exlink>
      <Exlink to={"singlespace"}>
        <Tab value={1} icon={<FaStar/>} label="Important" onClick={()=> setValue(1)}/>
      </Exlink>
      <Exlink to={"explore"}>
        <Tab value={2} icon={<MdOutlineTravelExplore />} label="Explore" onClick={()=> setValue(2)}/>
        </Exlink>
        {/* <Tab value={3} icon={<CgProfile />} label="Profile" onClick={()=> setValue(3)}/> */}
    </Tabs>
  );
}