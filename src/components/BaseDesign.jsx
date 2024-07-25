

import { GiOpenFolder } from "react-icons/gi";
import { GiCloverSpiked } from "react-icons/gi"
const BaseDesign = ({ child, Children, time}) => {
    return (
        <div className='mt-2 mb-2'>
            <div className='flex items-center m-2'>
                <div className="w-5 h-1 bg-blue-500"></div>
                <div className='flex items-center gap-1  bg-yellow-200 pl-2 pr-2'>
                    <div className='text-xl px-1 text-black'><GiCloverSpiked /></div>
                    <h1 className='text-black'>kalyan</h1>
                </div>
                <div className='w-4 h-7 bg-yellow-200 z-20' style={{
                    clipPath: "polygon(0 0, 100% 50%, 0 100%)"

                }}>
                </div>
                <div className='flex items-center -translate-x-4'>
                    <div className='flex items-center gap-1  bg-blue-400 px-2 pl-4 '>
                        <div className='text-xl px-1 text-black'><GiOpenFolder /></div>
                        <h1 className='text-black'>/portfolio</h1>
                    </div>
                    <div className='w-4 h-7 bg-blue-400 z-20' style={{
                        clipPath: "polygon(0 0, 100% 50%, 0 100%)"

                    }}>
                    </div>
                    <>{Children}</>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='bg-blue-500 h-11 w-1 ml-2 -translate-y-5'></div>
                <div className='w-5 h-1 bg-blue-500'></div>
                <div className='w-3 h-4 bg-blue-500 z-20' style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}></div>
                <div className="flex justify-between items-center w-full">
                    <div className="ml-2">{child}</div>
                    <span className="text-sm ">{time}</span>
                </div>
            </div>

        </div>
    )
}

export default BaseDesign
