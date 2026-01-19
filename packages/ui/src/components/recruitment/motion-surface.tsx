"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "../../lib/cn";

export interface MotionSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Client-only motion wrapper for subtle hover elevation.
 */
export const MotionSurface = ({ children, className, ...props }: MotionSurfaceProps) => (
  <motion.div
    className={cn("transition-transform", className)}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.div>
);
