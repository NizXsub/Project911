import React from 'react'

export default function PortalCard(props){
    function dateFormat(dateItem){
        // const dateTimeString = "2024-04-13T22:20:59.694475+05:45";
    
        // Parse the datetime string
        const dateTime = new Date(dateItem);
    
        // Format the datetime into a readable format
        const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        // timeZoneName: "short"
    };
    
    const formattedDateTime = dateTime.toLocaleDateString("en-US", options);
     return formattedDateTime;
        }

        const [file, setFile] = React.useState()

    function handleChange(event) {
      setFile(event.target.files[0])
    }


  return (
    <>
    <div className="portalinfo h-full w-full flex justify-between gap-1 p-2">
        <div className="info w-[70%] flex flex-col gap-2">
            <div className="portalname font-bold bg-amber-300 w-full py-1 px-3">
                {/* Collaborative Development  */}
                {props.name}
                
            </div>
            <div className="portaldescription border-[1px] border-solid p-2 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate minus sequi fugit dicta. Reprehenderit nulla eveniet molestiae consequuntur pariatur voluptatum illum hic voluptas facilis voluptatibus. Deleniti voluptas rerum delectus ex.

            </div>
            <div className="portalby font-bold">
            {/* <FaChalkboardTeacher className='scale-[1.5]'/> */}
                - Teacher's Name
            </div>
        </div>
            <div className="dates p-1 flex flex-col gap-1">
                <div className="startdaten bg-blue-300 px-1">
                    Started:  {dateFormat(props.created_at)}
                </div>
                <div className="enddate bg-red-400 px-1">
                    {/* Deadline: 2024-02-10 15:00 */}
                   Deadline: {dateFormat(props.deadline)}
                </div>
            </div>
        {/* </div> */}
    </div>
        <div className='bg-slate-100 w-full flex justify-between items-center p-3'>
        <input type="file" onChange={handleChange}/>
        <button type="submit" className='bg-[#76FF7A] text-black font-bold text-[1.2rem] h-[2.5rem] w-[7rem] border-[1px] border-solid hover:border-2 hover:border-black'>Upload</button>
        </div>
    </>
                
  )
}