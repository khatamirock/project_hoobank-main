import React from 'react'
import { card_aboutme } from '../constants'
import { Websvg, Phonesvg } from './svg'
import styles from '../style'
import { pro_img } from '../assets'

export const About = () => {
    return (
        <div className='font-poppins '>
            <div className="aboutme">
                <div className={`flex  items-center flex-row z-[6] relative sm:flex-col  name p-4 m-4  rounded`}>
                    <img src={pro_img} className='relative z-[4] h-20 w-20 rounded-full' alt=" pro_image" />
                    <div className={`grds md:blur-[120px]  blur-[100px]  absolute md:top-0 z-[2]  z-[2] h-[77%] w-[88%] ${styles.grd_mnst}`}>
                        {/*   */}
                    </div>
                    <h2 className='font-light ml-4 sm:ml-0 '>HELLO</h2>
                    <h1 className='font-bold ml-2 sm:ml-0'>I'm Khatami</h1>
                </div>
                <div className="desc_bout p-3 m-4">
                    <div className="bold">
                        <p> a developer | content Creator | Learner |  </p>
                    </div>
                    <div className={`mt-2 mb-5 p-4 other ${styles.grd_gr_bl} rounded`}>
                        <p>I'm a web developer who loves to learn new things and create amazing things.</p>
                        <p>I'm currently pursuing my bachelor's degree in computer science.</p>
                        <p>I'm currently working on my first project.</p>
                        <p>I'm also a content creator and a learner.</p>
                    </div>
                </div>

            </div>
            <div className="bg-[#212A3E] whatido sm:grid-cols-2 place-items-center grid-cols-1">
                {card_aboutme.map((item, ind) => {


                    return <div key={item.id} className={` bg-[#F1F6F9] rounded m-2   max-w-md md:max-w-[400px] text-black p-3 mt-2 white cards`}>
                        {/*   */}

                        <h1 className='p-2 flex  '>
                            {/* {`${item.icon}`} */}
                            {item.title}</h1>
                        <p className='p-2'>{item.content}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

