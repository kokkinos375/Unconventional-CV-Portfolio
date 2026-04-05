import { BackToHubButton } from "./BackToHubButton";

type RoomShellProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function RoomShell({ title, description, children }: RoomShellProps) {
  return (
    <div className="min-h-dvh bg-[#0c0c0e] text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(35,35,40,0.4),transparent_50%)]"
      />
      <div className="relative z-[1] mx-auto max-w-2xl px-8 py-14">
        <BackToHubButton />
        <h1 className="mt-10 font-display text-4xl font-light tracking-wide text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-500">{description}</p>
        {children}
      </div>
    </div>
  );
}
