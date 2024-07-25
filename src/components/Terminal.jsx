import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar';
import BaseDesign from './BaseDesign';
import CmdUserInput from './CmdUserInput';
import getResult from '../utils/getResult';
import CmdStat from './CmdStat';
import Today from './Today';
const Terminal = () => {
    const [history, setHistory] = useState([]);
    const dummyRef = useRef(null);

    useEffect(() => {
        dummyRef.current.scrollIntoView()
    }, [history]);

    const handleSubmit = (cmd) => {
        if (cmd === "clear") {
            setHistory([]);
            return;
        }
        setHistory(prevHistory => [
            ...prevHistory,
            { ...getResult(cmd), time: new Date().toLocaleTimeString() }
        ]);
    }

    return (
        <div className='w-[60%] flex flex-col'>
            <Navbar />

            <div className='max-w-4xl w-[100%] h-[60vh] border-x-2 border-b-2 border-black rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-55vh bg-black bg-opacity-75 box'>
                <Today />
                {history.map(({ cmd, Component, time }, index) => (
                    <div key={index}>
                        <BaseDesign time={time} child={cmd} Children={<CmdStat cmd={cmd} />} />
                        <Component />
                    </div>
                ))}
                <CmdUserInput onSubmit={handleSubmit} />
                <div ref={dummyRef}></div>
            </div>

        </div>
    );
}

export default Terminal;
