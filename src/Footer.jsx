import React from 'react'
import Button from '../Button/Button'
import SectionTitle from '../Section/SectionTitle'

const Footer = () => {
    return (
        <div className='bg-black text-white '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-start pl-8 md:pl-0 gap-32 container mx-auto py-12'>
                <div className=''>
                    <img src="/images/footer-logo.png" className='w-[200px]' alt="" />
                    <p className='text-[#ffffff75] leading-8 py-6'>ScholarSync is where collaboration and technology converge to create effecient teams.</p>
                    <h2 className='text-2xl pb-2'>hello@scholarsync.com</h2>
                    <h2 className='text-2xl'>+977 9821445781</h2>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Company</h2>
                    <ul className='text-[#ffffff75] leading-10 mt-4'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Careers</li>
                        <li>Blogs</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Contact</h2>
                    <ul className='text-[#ffffff75] leading-10 mt-4'>
                        <li>Help</li>
                        <li>FAQs</li>
                        <li>Press</li>
                        <li>Terms & Conditions</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Discover</h2>
                    <ul className='text-[#ffffff75] leading-10 mt-4'>
                        <li>Affiliate</li>
                        <li>Partner Program</li>
                    </ul>
                </div>
            </div>
            <div className='border-t border-[#221F35] flex justify-center items-center py-12'>
                <div className="flex justify-center items-center ">
                    <h2>Copyright © 2032 ScholarSync®. All rights reserved.</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer
