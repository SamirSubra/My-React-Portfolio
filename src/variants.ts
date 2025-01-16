type Direction = "up" | "down" | "left" | "right";

interface AnimationConfig {
    hidden: {
        x: number;
        y: number;
    };
    show: {
        x: number;
        y: number;
        opacity: number;
        transition: {
            type: string;
            duration: number;
            delay: number;
            ease: [number, number, number, number];
        };
    };
}

export const fadeIn = (direction: Direction, delay: number): AnimationConfig => {
    return {
        hidden: {
            x: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            y: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};
