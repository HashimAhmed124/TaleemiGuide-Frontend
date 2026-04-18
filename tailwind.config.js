
module.exports = {
    theme: {
        extend: {
            animation: {
                slide: "slide 30s linear infinite",
            },
            keyframes: {
                slide: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
            },
        },
    },
};
