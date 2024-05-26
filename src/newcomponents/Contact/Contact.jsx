import React from 'react'
import Section from '../Section/SectionTitle'
import Button from '../Button/Button'
import {Link as Exlink} from 'react-router-dom';


const Contact = () => {
    return (
        <div className='bg-black text-white h-[600px] flex  justify-center items-center mt-16 px-4'>
            <div className='flex flex-col md:flex-row items-start container mx-auto'>
                <Section
                    title="Collaborate"
                    color="text-white"
                    style="font-[400] text-2xl"
                />

                <div className='flex md:items-start justify-center items-center flex-col'>
                    <h2 className='text-xl md:text-4xl mb-16 text-center md:text-start'>So what are you thinking? <br /> Join our large community and change <br /> the way of collaboration together!</h2>
                    <Exlink to='/signup'>
                    <Button
                        className="uppercase font-source-sans bg-[#ffffff] text-[#1f1f39] px-12 py-3 rounded-md font-bold text-lg"
                        title="Join" 
                        link='/signup'/>
                    </Exlink>
                </div>
            </div>
        </div>
    )
}

export default Contact