import * as React from "react"

export function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: string }) {
  const variants: Record<string, string> = {
    default: "bg-blue-100 text-blue-800",
    outline: "border border-gray-300 text-gray-800",
  }
  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${variants[variant] || variants.default}`}>
      {children}
    </span>
  )
}
