import { IoIosGitBranch } from "react-icons/io";


const CmdStat = ({ cmd, time }) => {
    if (!cmd) {
        return <></>
    }
    return (
        <div className="flex justify-between">
            <div className='flex items-center -translate-x-4'>
                <div className='flex items-center gap-1  bg-green-600 px-2 pl-4 '>
                    <div className='text-xl px-1 text-black'><IoIosGitBranch /></div>
                    <h1>{cmd}</h1>
                </div>
                <div className='w-4 h-7 bg-green-600 z-20' style={{
                    clipPath: "polygon(0 0, 100% 50%, 0 100%)"

                }}>
                </div>
            </div>
            <span className="text-sm text-slate-600">{time}</span>
        </div>
    )
}

export default CmdStat
