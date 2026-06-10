import React from "react";

// const PRIMARY_COLORS = [
//   { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
//   { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
//   { color: "rgba(141, 255, 105, 0.5)", stop: "100%" },
//   { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
//   { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
// ];

const PRIMARY_COLORS = [
  { color: "rgba(59, 130, 246, 0.25)", stop: "100%" },  // #3b82f6 (primary)
  { color: "rgba(96, 165, 250, 0.45)", stop: "100%" },  // #60a5fa (light)
  { color: "rgba(37, 99, 235, 0.5)", stop: "100%" },    // #2563eb (dark)
  { color: "rgba(29, 78, 216, 0.45)", stop: "100%" },   // #1d4ed8 (hover)
  { color: "rgba(59, 130, 246, 0.25)", stop: "100%" },  // repeat for smooth fade
];


const RadialBackground = ({ variant = "hero", grads = [] }) => {
  const variants = {
    hero: [
      {
        position: "top-1 left-1 -translate-x-1/2 -translate-y-1/2",
        size: "w-[1400px] h-[1400px]",
        colors: PRIMARY_COLORS,
        blur: "0px",
        opacity: 0.5,
      },
      {
        position: "top-1 left-1",
        size: "w-[1400px] h-[1400px]",
        colors: PRIMARY_COLORS,
        blur: "0px",
        opacity: 0.5,
      },
      {
        position: "bottom-1 right-1",
        size: "w-[1400px] h-[1400px]",
        colors: PRIMARY_COLORS,
        blur: "0px",
        opacity: 0.5,
      },
    ],
    about: [
      {
        position: "bottom-0 left-[75%]",
        size: "w-[700px] h-[700px]",
        colors: PRIMARY_COLORS,
        blur: "0px",
        opacity: 0.5,
      },
    ],
  };

  const activeGrads =
    variant === "custom" ? grads : variants[variant] || variants.hero;

  const generateGrad = (colors) => {
    const colorStops = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(", ");
    return `radial-gradient(circle at center, transparent 0%, transparent 30%, ${colorStops}, transparent 60%, transparent 100%)`;
  };
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGrads.map((grad, index) => (
        <div
          key={index}
          className={`absolute ${grad.position} ${grad.size} rounded-full`}
          style={{
            background: generateGrad(grad.colors),
            filter: `blur(${grad.blur})`,
            opacity: grad.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RadialBackground;
