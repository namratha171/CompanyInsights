import * as React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="p-4 shadow rounded-xl bg-white">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2">{children}</div>;
}
