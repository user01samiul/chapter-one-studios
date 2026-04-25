"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes, PointerEvent } from "react";

type DateFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  hintClassName?: string;
};

const DateField = forwardRef<HTMLInputElement, DateFieldProps>(
  (
    { className = "", hintClassName = "left-0", onPointerDown, value, ...props },
    ref,
  ) => {
    const hasValue = Boolean(value);

    const handlePointerDown = (event: PointerEvent<HTMLInputElement>) => {
      onPointerDown?.(event);
      try {
        event.currentTarget.showPicker?.();
      } catch {
        // Some browsers only allow the native picker from their own default tap.
      }
    };

    return (
      <div className="relative">
        <input
          ref={ref}
          type="date"
          value={value}
          data-empty={hasValue ? "false" : "true"}
          onPointerDown={handlePointerDown}
          className={`${className} date-field-native`}
          {...props}
        />
        {!hasValue && (
          <span
            className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-foreground/45 font-sans ${hintClassName}`}
            aria-hidden="true"
          >
            mm/dd/yyyy
          </span>
        )}
      </div>
    );
  },
);

DateField.displayName = "DateField";

export default DateField;
