import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import { script } from "./conversation";
import { stepifyScript } from "./utils";

function Chatbot() {

    const location = useLocation().pathname;

    useEffect(() => {
        if (location === '/chat') {
            const el = document.getElementsByClassName('rsc')[0];
            const keys = Object.keys(el)[1];
            const func = el[keys].children[0].props.onClick;
            func();

            // const chatDisplay = document.getElementsByClassName('sc-fjdhpX godhbL rsc-float-button');
            // chatDisplay.classList.add("hidden");
            // console.log(chatDisplay);
        }
    })

    return (
        <div className="chatbot-container">
            <ChatBot
                headerTitle="Travel Bot"
                bubbleOptionStyle={{ backgroundColor: "white", color: "black" }}
                steps={stepifyScript(script)}
                floating={true}
            />
        </div>
    )
}

export default Chatbot;
