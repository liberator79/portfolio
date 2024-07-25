import { useRef } from 'react';
import BaseDesign from './BaseDesign';

const CmdUserInput = ({ onSubmit }) => {
    const inputText = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputText.current.value);
        inputText.current.value = ""
    };
    const handleKeyDown = () => {
        
    }
    return (
        <BaseDesign child={
            <div className=''>
                <form onSubmit={handleSubmit}>
                    <input
                        autoFocus
                        className="translate-x-1 bg-inherit w-full focus:outline-none placeholder:text-gray-500 placeholder:tracking-wider"
                        ref={inputText}
                        placeholder="try ls, bio, skill, contact..."
                    />
                </form>
            </div>
        } />
    );
};

export default CmdUserInput;    
