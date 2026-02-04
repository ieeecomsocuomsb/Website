import React, { useEffect, useState } from "react";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const [theme, setTheme] = useState<ToasterProps["theme"]>("system");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    const prefersDark = mq ? mq.matches : false;
    setTheme(prefersDark ? "dark" : "light");

    const listener = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");
    if (mq) {
      // modern
      if (mq.addEventListener) mq.addEventListener("change", listener);
      else mq.addListener(listener as any);
    }
    return () => {
      if (mq) {
        if (mq.removeEventListener) mq.removeEventListener("change", listener);
        else mq.removeListener(listener as any);
      }
    };
  }, []);

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
