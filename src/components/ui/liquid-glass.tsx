export default function LiquidGlass({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        relative overflow-hidden
        bg-white/10 dark:bg-gray-900/20
        backdrop-blur-xl
        border border-white/20 dark:border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        before:absolute before:inset-0
        before:bg-linear-to-br before:from-white/20 before:to-transparent
        before:opacity-60
        before:pointer-events-none
        ${className}
      `}
    >
      {children}
    </div>
  );
}
