import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

function ScrollTopArrow() {

    const [showScroll, SetShowScroll] = useState(false);

    const checkScroll = () => {
        if (!showScroll && window.pageYOffset > 400) {
            SetShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            SetShowScroll(false);
        }
    }

    const ScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', checkScroll);

    return (
        <div>
            <FaArrowCircleUp onClick={ScrollTop} className="fixed w-full bottom-5 right-[45%] h-10 z-40 cursor-pointer text-[#002462]"
                style={{ display: showScroll ? 'flex' : 'none' }} />
        </div>
    )
}

export default ScrollTopArrow
