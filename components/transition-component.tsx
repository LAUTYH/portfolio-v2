'use client'

import { fadeIN } from "@/motion-transitions";
import { motion } from "framer-motion";

interface MotionTransitionProps {
    children: React.ReactNode;
    position: 'button' | 'right';
    classProps?: string;
}

export const MotionTransition = (props: MotionTransitionProps) => {
    const { children, position } = props;

    return (
        <motion.div
            variants={fadeIN(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="classProps"
        >
            {children}
        </motion.div>

    );
}