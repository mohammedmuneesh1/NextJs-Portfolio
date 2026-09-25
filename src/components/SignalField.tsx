"use client";

import { useEffect, useRef, useState } from "react";

type SignalFieldProps = {
  className?: string;
};

export default function SignalField({ className = "" }: SignalFieldProps) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = field.getBoundingClientRect();
      setPointer({
        x: ((event.clientX - bounds.left) / bounds.width) * 100,
        y: ((event.clientY - bounds.top) / bounds.height) * 100,
      });
    };

    const handlePointerLeave = () => setPointer({ x: 50, y: 50 });

    field.addEventListener("pointermove", handlePointerMove);
    field.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      field.removeEventListener("pointermove", handlePointerMove);
      field.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={fieldRef}
      aria-hidden="true"
      className={`pointer-events-auto absolute inset-0 overflow-hidden ${className}`}
      style={
        {
          "--pointer-x": `${pointer.x}%`,
          "--pointer-y": `${pointer.y}%`,
        } as React.CSSProperties
      }
    >
      <div className="absolute left-(--pointer-x) top-(--pointer-y) h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl transition-[left,top] duration-700 ease-out" />
      <div className="absolute inset-[12%] rounded-full border border-cyan-200/15 transition-transform duration-1000 ease-out group-hover:scale-[1.03]" />
      <div className="absolute inset-[23%] rounded-full border border-cyan-200/10 border-dashed animate-[spin_24s_linear_infinite]" />
      <div className="absolute inset-[36%] rounded-full border border-fuchsia-200/15 animate-[spin_17s_linear_infinite_reverse]" />
      <div className="absolute left-(--pointer-x) top-(--pointer-y) h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100 shadow-[0_0_24px_8px_rgba(103,232,249,0.5)] transition-[left,top] duration-500 ease-out" />
    </div>
  );
}
