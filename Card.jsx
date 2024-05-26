import React from 'react'
import './Qcard.css'

export default function Qcard(props) {
  return (
    <div className='shadow-lg'>
        <div className="question border-[2px] border-gray-300 p-2">
            {!props.id?1:props.id+1}. {`What can we handle the increasing entropy?`}
        </div>
        
        <div className="options border-[1px] border-gray-200 p-2 ">
            {
                <fieldset className='flex flex-col gap-5'>
                <div className='flex gap-2'>
                <input type="radio" id={props.id+`Choice1`} name="contact" value="email" />
                <label for={props.id+`Choice1`}>Email</label>
                </div>
                <div className='flex gap-2'>
                <input type="radio" id={props.id+`Choice1`} name="contact" value="phone" />
                <label for={props.id+`Choice1`}>Phone</label>
                </div>
                <div className='flex gap-2'>
                <input type="radio" id={props.id+`Choice1`} name="contact" value="mail" />
                <label for={props.id+`Choice1`}>Mail</label>
                </div>
                <div className='flex gap-2'>
                <input type="radio" id={props.id+`Choice1`} name="contact" value="fax" />
                <label for={props.id+`Choice1`}>Mail</label>
                </div>
                </fieldset>
            }





            {/* <div className="opt1">
                a. Stop it

            </div>
            <div className="opt2">
                b. Let it go
            </div>
            <div className="opt3">
                c. Increase it more

            </div>
            <div className="opt4">
                d. Wait and watch
            </div> */}
        </div>
        
    </div>
  )
}
