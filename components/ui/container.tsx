import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as: As = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return <As className={cn("container-page", className)}>{children}</As>;
}