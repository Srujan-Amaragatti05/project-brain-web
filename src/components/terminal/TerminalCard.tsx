"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Copy,
} from "lucide-react";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type TerminalLine = {
  type?: "command" | "success" | "output" | "error";
  content: string;
};

interface TerminalCardProps {
  title?: string;
  lines: TerminalLine[];
  typingEffect?: boolean;
  className?: string;
}

const COLORS = {
  terminalBg: "#0D1117",
  terminalHeader: "#161B22",
  terminalBorder: "#30363D",

  textPrimary: "#E6EDF3",
  terminalOutput: "#8B949E",
  terminalSuccess: "#39C5CF",
  accentRed: "#F85149",

  terminalPrompt: "#3FB950",

  trafficRed: "#FF5F56",
  trafficYellow: "#FFBD2E",
  trafficGreen: "#27C93F",
};

const TRANSITION = {
  duration: 0.22,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function TerminalCard({
  title = "terminal",
  lines,
  typingEffect = true,
  className = "",
}: TerminalCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let active = true;
    requestAnimationFrame(() => {
      if (active) {
        setIsMounted(true);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const reduceMotion = isMounted ? shouldReduceMotion : false;

  const [typedText, setTypedText] = useState("");
  const [showCopied, setShowCopied] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const firstCommandIndex = useMemo(
    () => lines.findIndex((line) => line.type === "command"),
    [lines]
  );

  const firstCommand =
    firstCommandIndex !== -1
      ? lines[firstCommandIndex].content
      : "";

  useEffect(() => {
    if (
      !typingEffect ||
      reduceMotion ||
      !firstCommand
    ) {
      let active = true;
      requestAnimationFrame(() => {
        if (active) {
          setTypedText(firstCommand);
        }
      });
      return () => {
        active = false;
      };
    }

    let current = 0;

    const type = () => {
      current++;

      setTypedText(firstCommand.slice(0, current));

      if (current < firstCommand.length) {
        timeoutRef.current = setTimeout(type, 18);
      }
    };

    type();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    firstCommand,
    typingEffect,
    reduceMotion,
  ]);

  const handleCopy = async () => {
    const text = lines
      .map((line) => line.content)
      .join("\n");

    try {
      await navigator.clipboard.writeText(text);

      setShowCopied(true);

      setTimeout(() => {
        setShowCopied(false);
      }, 1500);
    } catch {
      console.error("Failed to copy terminal content.");
    }
  };

  const getLineColor = (
    type?: TerminalLine["type"]
  ) => {
    switch (type) {
      case "command":
        return COLORS.textPrimary;

      case "success":
        return COLORS.terminalSuccess;

      case "error":
        return COLORS.accentRed;

      default:
        return COLORS.terminalOutput;
    }
  };

  return (
    <motion.div
      initial={false}
      animate={reduceMotion
      ? {}
      : {
          opacity: 1,
          y: 0,
        }
    }
      transition={TRANSITION}
      className={`relative overflow-hidden rounded-2xl border border-[#30363D] bg-[#0D1117] shadow-[0_0_0_1px_rgba(57,197,207,0.08),0_10px_40px_rgba(0,0,0,0.45)] ${className}`}
      aria-label="Terminal output"
    >
      {/* Header */}
      <div
        className="flex h-[44px] items-center justify-between border-b px-4"
        style={{
          backgroundColor: COLORS.terminalHeader,
          borderColor: COLORS.terminalBorder,
        }}
      >
        {/* Traffic Lights */}
        <div
          className="flex items-center gap-[6px]"
          aria-hidden="true"
        >
          <span
            className="h-3 w-3 rounded-full"
            style={{
              backgroundColor:
                COLORS.trafficRed,
            }}
          />

          <span
            className="h-3 w-3 rounded-full"
            style={{
              backgroundColor:
                COLORS.trafficYellow,
            }}
          />

          <span
            className="h-3 w-3 rounded-full"
            style={{
              backgroundColor:
                COLORS.trafficGreen,
            }}
          />
        </div>

        {/* Title */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 font-mono text-xs tracking-wide"
          style={{
            color: COLORS.terminalOutput,
          }}
        >
          {title}
        </div>

        {/* Copy Button */}
        <motion.button
          whileHover={
            reduceMotion
              ? {}
              : { y: -1 }
          }
          transition={TRANSITION}
          onClick={handleCopy}
          aria-label="Copy terminal content"
          className="flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2"
          style={{
            borderColor:
              COLORS.terminalBorder,
            color: COLORS.terminalOutput,
            backgroundColor:
              "rgba(255,255,255,0.02)",
          }}
        >
          <AnimatePresence mode="wait">
            {showCopied ? (
              <motion.div
                key="check"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.15,
                }}
                className="flex items-center gap-1.5"
              >
                <Check
                  size={14}
                  color={
                    COLORS.terminalSuccess
                  }
                />

                <span>Copied</span>
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.15,
                }}
                className="flex items-center gap-1.5"
              >
                <Copy size={14} />

                <span>Copy</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Body */}
      <div
        className="overflow-x-auto p-5 md:p-6"
      >
        <div
          className="min-w-max space-y-2 font-mono text-sm font-medium leading-7 md:text-[15px]"
        >
          {lines.map((line, index) => {
            const isTypingLine =
              index === firstCommandIndex &&
              line.type === "command";

            return (
              <div
                key={`${line.content}-${index}`}
                className="flex items-start gap-3 whitespace-pre"
              >
                {/* Prompt */}
                {line.type === "command" ? (
                  <span
                    aria-hidden="true"
                    className="select-none"
                    style={{
                      color:
                        COLORS.terminalPrompt,
                    }}
                  >
                    $
                  </span>
                ) : (
                  <span className="w-[10px]" />
                )}

                {/* Content */}
                <div
                  className="flex items-center"
                  style={{
                    color: getLineColor(
                      line.type
                    ),
                  }}
                >
                  {isTypingLine ? (
                    <>
                      <span>
                        {typedText}
                      </span>

                      {!reduceMotion && (
                        <span
                          aria-hidden="true"
                          className="ml-[2px] animate-terminal-blink"
                        >
                          █
                        </span>
                      )}
                    </>
                  ) : (
                    <span>
                      {line.content}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}