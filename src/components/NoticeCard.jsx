import React from 'react'
import { MdDateRange } from 'react-icons/md'

export default function NoticeCard(props){
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
// React.useEffect(() => {
//     dateFormat(props.created_at)
// }, [])

  return (
    <div className="notice relative h-fit w-full p-10 border-2 border-solid border-white my-2">
    <div className="noticedate absolute top-2 left-2 flex gap-2 items-center">
        <MdDateRange className='scale-[1.5]'/>
        <div className="date font-bold text-[14px]">
            {dateFormat(props.created_at)}
        </div>
    </div>
    <p className='text-[1.5rem] text-white text-bold'>{props.title}</p>
    <p className='text-justify'>
    {props.content}
    </p>
    <div className="noticeby mt-3 font-extrabold">
        - {props.created_by}
    </div>
    
</div>
  )
}
