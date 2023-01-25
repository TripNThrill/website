import React from "react";
import { useState } from 'react'
import { FaRobot } from 'react-icons/fa';
// import { render } from "react-dom";
// import styled from "styled-components";
import ChatBot from "react-simple-chatbot";
import { script } from "./conversation";
import { stepifyScript } from "./utils";
import './chatbot.css';

function Chatbot() {

    const [botButton, setBotButton] = useState(true);

    const handleBotButton = () => {
        setBotButton(!botButton);
    }


    return (
        <div className="chatbot-container">
            <div className={botButton && 'win'}>
                <ChatBot
                    headerTitle="Travel Bot"
                    bubbleOptionStyle={{ backgroundColor: "white", color: "black" }}
                    steps={stepifyScript(script)}
                />
            </div>
            <div className="bot-icon" onClick={handleBotButton}>
                <button className="bg-[#03008d]  shadow-lg font-normal h-15 w-20 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <FaRobot className='icon' color='white' />
                </button>
            </div>
        </div>
    )
}

export default Chatbot;
