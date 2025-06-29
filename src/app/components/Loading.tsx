import { motion, AnimatePresence } from 'framer-motion';

// --- Component Props ---
interface LinkPulseLoaderProps {
    isLoading: boolean;
    color?: string;
    size?: number;
    text?: string;
}

// --- Animation Variants ---

// This variant staggers the appearance of its children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// Animation for the pulsing nodes (dots)
const dotVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { stiffness: 300, damping: 20 },
    },
};

// Animation for the connecting lines
const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

export default function Loader({
    isLoading,
    color = '#00BFFF', // Electric Blue
    size = 80,
    text = 'Connecting...',
}: LinkPulseLoaderProps) {
    const pulseDuration = 1.5; // Total duration for one full loop

    // Individual animation for each part to create the sequential pulse
    const pulseTransition = (delay: number) => ({
        duration: 0.4,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        delay,
        repeatDelay: pulseDuration - 0.4,
    });

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Loading content"
                    role="status"
                >
                    <motion.div
                        className="relative"
                        style={{ width: size, height: size, color }}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* The SVG container with a glow filter */}
                        <motion.svg
                            viewBox="0 0 100 100"
                            style={{
                                width: '100%',
                                height: '100%',
                                filter: `drop-shadow(0 0 6px ${color})`,
                                transformOrigin: 'center',
                            }}
                        >
                            {/* Lines - animating scaleX from their midpoint */}
                            <motion.line
                                x1="25" y1="75" x2="50" y2="25"
                                stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                                variants={lineVariants} style={{ transformOrigin: 'center' }}
                            />
                            <motion.line
                                x1="50" y1="25" x2="75" y2="75"
                                stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                                variants={lineVariants} style={{ transformOrigin: 'center' }}
                            />
                            <motion.line
                                x1="75" y1="75" x2="25" y2="75"
                                stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                                variants={lineVariants} style={{ transformOrigin: 'bottom' }}
                            />

                            {/* Nodes (Dots) with sequential pulsing animations */}
                            <motion.circle
                                cx="50" cy="25" r="5" fill="currentColor"
                                variants={dotVariants}
                                animate={{ scale: [1, 1.4, 1] }}
                                transition={pulseTransition(0)}
                            />
                            <motion.circle
                                cx="75" cy="75" r="5" fill="currentColor"
                                variants={dotVariants}
                                animate={{ scale: [1, 1.4, 1] }}
                                transition={pulseTransition(pulseDuration / 3)} // 0.5s delay
                            />
                            <motion.circle
                                cx="25" cy="75" r="5" fill="currentColor"
                                variants={dotVariants}
                                animate={{ scale: [1, 1.4, 1] }}
                                transition={pulseTransition((pulseDuration / 3) * 2)} // 1s delay
                            />
                        </motion.svg>
                    </motion.div>

                    {/* Optional Loading Text */}
                    {text && (
                        <motion.p
                            className="mt-4 text-center font-sans text-sm font-medium tracking-wider"
                            style={{ color }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 0.8, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {text}
                        </motion.p>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};