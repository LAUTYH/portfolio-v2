"use client"

import { fadeIN } from "@/motion-transitions";
import { motion } from "framer-motion";

export type MotionTransitionProps = {
    children: React.ReactNode;
    className?: string;
    position: 'right' | 'bottom'
};

export function MotionTransition(props: MotionTransitionProps) {
    const { children, className, position } = props

    return (
        <motion.div
            variants={fadeIN(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    )
}