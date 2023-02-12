import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Perks() {
    let easing = [0.6, -0.05, 0.01, 0.99];

    const fadeIn = {
        visible: {
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: easing },
        },
        hidden: { opacity: 0, transition: { duration: 0.6, ease: easing } },
    };

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                delay: 0.4,
                duration: 0.6,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                delay: 0.4,
                duration: 0.6,
            },
        },
    };

    const item = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <div className="px-[20%] pt-[8rem] pb-[8rem] max-w-7xl lg:mb-[0] lg:pb-[15rem] lg:mt-[0] lg:pt-[15rem] bg-[#E1D7C6]">
            <div>
                <motion.h2
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={fadeIn}
                    className="text-3xl lg:text-5xl"
                >
                    Perks & benifits
                </motion.h2>
            </div>
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={list}
                className="mt-12 grid grid-cols-1 justify-start gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
                <motion.div
                    variants={item}
                    className="rounded-md bg-[#e2e8f0] py-4 px-4"
                >
                    <h3>Employee Training</h3>
                </motion.div>
                <motion.div
                    variants={item}
                    className="rounded-md bg-[#e2e8f0] py-4 px-4"
                >
                    <h3>Competitive Salary</h3>
                </motion.div>
                <motion.div
                    variants={item}
                    className="rounded-md bg-[#e2e8f0] py-4 px-4"
                >
                    <h3>Social events</h3>
                </motion.div>
                <motion.div
                    variants={item}
                    className="rounded-md bg-[#e2e8f0] py-4 px-4"
                >
                    <h3> Supportive Work Environment</h3>
                </motion.div>
                <motion.div
                    variants={item}
                    className="rounded-md bg-[#e2e8f0] py-4 px-4"
                >
                    <h3>Growth</h3>
                </motion.div>
                <motion.div
                    variants={item}
                    className="rounded-md bg-[#e2e8f0] py-4 px-4"
                >
                    <h3>Employee recognition</h3>
                </motion.div>
                <motion.div
                    variants={item}
                    className="rounded-md bg-[#e2e8f0] py-4 px-4"
                >
                    <h3>Work from Home</h3>
                </motion.div>
                <motion.div
                    variants={item}
                    className="rounded-md bg-[#e2e8f0] py-4 px-4"
                >
                    <h3>Retirement</h3>
                </motion.div>
            </motion.div>
        </div>
    );
}
