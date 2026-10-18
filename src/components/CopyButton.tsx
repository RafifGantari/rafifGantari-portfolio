"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label: string;
}

export default function CopyButton({ text, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1.5 text-ink-mute hover:text-ink transition-all active:scale-95 lg:opacity-0 lg:group-hover:opacity-100 focus-visible:opacity-100 focus-within:opacity-100 rounded-md cursor-pointer"
      aria-label={label}
      title={copied ? "Copied!" : label}
    >
      {copied ? (
        <Check size={14} className="text-emerald-500 transition-transform scale-110" />
      ) : (
        <Copy size={14} />
      )}
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}
