import { ClipboardCheck, ClipboardCopy } from "lucide-react";
import { useOptimistic, useTransition } from "react";

export function CopyToClipboard({ href }: { href: string }) {
  let [state, set_state] = useOptimistic<"idle" | "copied">("idle");
  let [, startTransition] = useTransition();

  return (
    <button
      type="button"
      onClick={() => {
        startTransition(async () => {
          navigator.clipboard.writeText(href);
          set_state("copied");
          await new Promise((resolve) => setTimeout(resolve, 2000));
          set_state("idle");
        });
      }}
    >
      {state === "idle" ? (
        <ClipboardCopy className="w-4 h-4 text-stone-500 hover:text-stone-600" />
      ) : (
        <ClipboardCheck className="w-4 h-4 text-green-600" />
      )}
    </button>
  );
}
