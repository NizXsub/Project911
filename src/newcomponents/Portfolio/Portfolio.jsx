import React from 'react'
import Section from '../Section/SectionTitle'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
    const portfolioData = [
        {
            img: "/images/portfolio1.png",
            title: "Someone",
            desc: "'Their Quote'"
        }, {
            img: "/images/portfolio1.png",
            title: "Someone",
            desc: "'Their Quote'"
        }, {
            img: "/images/portfolio1.png",
            title: "Someone",
            desc: "'Their Quote'"
        }, {
            img: "/images/portfolio1.png",
            title: "Someone",
            desc: "'Their Quote'"
        }, {
            img: "/images/portfolio1.png",
            title: "Someone",
            desc: "'Their Quote'"
        }, {
            img: "/images/portfolio1.png",
            title: "Someone",
            desc: "'Their Quote'"
        },
    ]
    return (
        <div className='py-28 px-4'>
            <div className='flex flex-col md:flex-row items-start container mx-auto'>
                <Section
                    title="Alumni Network"
                    color="text-white"
                    style="font-[400] text-2xl"
                />
                <div>
                    <p className='mb-14 text-xl md:text-4xl font-bold text-center'>We envision a world where  homework<br />collaboration is not limited to physical contact. </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            portfolioData.map((item, index) => {
                                return (

                                    <PortfolioCard key={index} img={item.img} title={item.title} desc={item.desc} />

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio