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
            <FaArrowCircleUp onClick={ScrollTop} className="fixed w-12 bottom-10 left-8 rounded-full md:right-[45%] h-12 z-40 cursor-pointer text-[#002462] bg-white"
                style={{ display: showScroll ? 'flex' : 'none' }} />
        </div>
    )
}

export default ScrollTopArrow
