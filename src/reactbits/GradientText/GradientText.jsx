// GradientText.jsx
export default function GradientText({
  children,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem]  backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
    >
      {/* Border animation */}
      {showBorder && (
        <div
          className="absolute inset-0 z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: '300% 100%',
          }}
        >
          <div
            className="absolute inset-[1px] bg-black rounded-[1.25rem]"
          ></div>
        </div>
      )}

      {/* Animated text */}
      <div
        className="relative z-10 text-transparent animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '300% 100%',
        }}
      >
        {children}
      </div>
    </div>
  );
}
 