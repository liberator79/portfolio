import { useState, useEffect } from 'react'
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    const listOfSkills = [
        {
            title: "React",
            Icon: FaReact,
            barWidth: "w-[90%]",
            percentageValue: "90%",
        },
        {
            title: "Tailwind CSS",
            Icon: SiTailwindcss,
            barWidth: "w-[85%]",
            percentageValue: "85%",
        },
        {
            title: "Node js",
            Icon: IoLogoNodejs,
            barWidth: "w-[80%]",
            percentageValue: "80%",
        },
        {
            title: "Express",
            Icon: SiExpress,
            barWidth: "w-[80%]",
            percentageValue: "80%",
        },
        {
            title: "MongoDB",
            Icon: SiMongodb,
            barWidth: "w-[80%]",
            percentageValue: "80%",
        },
    ]
    return (
        <div className='w-11/12 mx-auto mb-6'>
            {
                listOfSkills.map(({ title, Icon, barWidth, percentageValue }, index) => {
                    return (
                        <div key={index} className='mt-2'>
                            <div className={`${barWidth} flex justify-between mb-3 `}>
                                <div className='flex gap-2 items-center'>
                                    <Icon />
                                    <h1>{title}</h1>
                                </div>
                                <h1>{percentageValue}</h1>
                            </div>
                            <div className='bg-gray-600 w-full rounded-md'>
                                <div
                                    className={`${animate ? barWidth : "w-0"}
                                    transition-all duration-500 h-2.5 bg-blue-500 rounded-md`}
                                >
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Skills
