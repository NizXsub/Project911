// import {Link as Exlink} from 'react-router-dom';
import IconLabelTabs from './IconLabelTabs';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Navbar(props){
    return(
        // <>
        // <nav>
        //     <ul className='h-12 w-1/4 rounded-3xl border-2 border-black border-solid flex justify-evenly items-center gap-12'>
        //         <li>
        //         <Exlink to="/signin">
        //             Spaces
        //         </Exlink>
        //         </li>
        //         <li>
        //         <Exlink to="/signin">
        //             Imp
        //         </Exlink>
        //         </li>
        //         <li>
        //         <Exlink to="/signin">
        //             Explore
        //         </Exlink>
        //         </li>
        //         <li>
        //         <Exlink to="/signin">
        //             Profile
        //         </Exlink>
        //         </li>
        //     </ul>
        // </nav>
        // </>
        // border-[rgb(100, 178, 108)]
        // border-gray-300

        //navbar ui
        <div className={'fixed bottom-4 h-fit w-screen flex justify-center ' + (!props.scroll?"hidden":"")}>
            <div className='w-1/4 border-[4px] shadow-2xl border-solid rounded-full flex justify-center bg-white'>
                <IconLabelTabs/>
            </div>
        </div>
    )

}

