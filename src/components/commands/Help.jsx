import React from 'react'

const Help = () => {
    const listOfCommands = [
        { cmd: "bio", detail: "Show my bio information." },
        { cmd: "skill", detail: "List all of my skills." },
        { cmd: "contact", detail: "List all of the contacts." },
        { cmd: "clear", detail: "To clear the history." },
    ]
    return (
        <div className='w-11/12 mx-auto'>
            {
                listOfCommands.map(({ cmd, detail }, index) => {
                    return (
                        <div className='mt-3 flex gap-10 items-center' key = {index}>
                            <h1 className='text-yellow-200 w-20'>{cmd}</h1>
                            <p className='text-gray-300 flex-1'>{detail}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Help
