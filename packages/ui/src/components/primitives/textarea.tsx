import * as React from "react";

import { cn } from "../../lib/cn";

/**
 * Glass textarea primitive.
 */
export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, rows = 4, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={cn(
      "w-full rounded-2xl border border-white/40 bg-white/70 px-4 py-3 text-sm text-slate-900",
      "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";
