"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

type Props = React.PropsWithChildren<{
  className?: string;
} & MotionProps & React.HTMLAttributes<HTMLElement>>;

export function MotionSpan({ children, className = "", ...rest }: Props) {
  return (
    <motion.span className={className} {...(rest as MotionProps)}>
      {children}
    </motion.span>
  );
}

export function MotionH2({ children, className = "", ...rest }: Props) {
  return (
    <motion.h2 className={className} {...(rest as MotionProps)}>
      {children}
    </motion.h2>
  );
}

export function MotionP({ children, className = "", ...rest }: Props) {
  return (
    <motion.p className={className} {...(rest as MotionProps)}>
      {children}
    </motion.p>
  );
}

export function MotionDiv({ children, className = "", ...rest }: Props) {
  return (
    <motion.div className={className} {...(rest as MotionProps)}>
      {children}
    </motion.div>
  );
}

export default null;
