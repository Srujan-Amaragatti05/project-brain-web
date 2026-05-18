"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const isProd = process.env.NODE_ENV === "production";
  return (
    <MotionConfig reducedMotion={isProd ? "user" : "never"}>
      {children}
    </MotionConfig>
  );
}
