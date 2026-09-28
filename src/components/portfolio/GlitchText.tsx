interface GlitchTextProps {
  text: string;
  className?: string;
  color?: string;
  shadow?: string;
}

export function GlitchText({ text, className = "", color="#000000"  , shadow="" }: GlitchTextProps) {
  return (
    <span
      data-text={text}
      className={`${className}`}
      style={{ 
        animation: "glitch 5s infinite",
        color: "red",
        textShadow: shadow
      }}
    >
      {text}
    </span>
  );
}
