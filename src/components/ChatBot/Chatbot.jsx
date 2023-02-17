import React, { useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import { useLocation } from "react-router-dom";
import { script } from "./conversation";
import { stepifyScript } from "./utils";
import './chatbot.css'

function Chatbot() {

    const location = useLocation().pathname;

    useEffect(() => {
        if (location === '/chat') {
            const el = document.getElementsByClassName('rsc')[0];
            const keys = Object.keys(el)[1];
            const func = el[keys].children[0].props.onClick;
            func();
        }
        if (location === '/terms') {
            document.getElementsByClassName('rsc')[0].style.visibility = 'hidden'
        }
    })

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#002462',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#FFEBB7',
        botFontColor: '#002462',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',

    };

    return (
        <div className="chatbot-container">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Travel Bot"
                    steps={stepifyScript(script)}
                    floating="True"
                />
            </ThemeProvider>
        </div>
    )
}

export default Chatbot;
