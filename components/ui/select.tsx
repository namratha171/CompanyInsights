import * as React from "react"

export function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    >
      {children}
    </select>
  )
}

export const SelectTrigger = (props: any) => <>{props.children}</>
export const SelectValue = (props: any) => <>{props.placeholder}</>
export const SelectContent = (props: any) => <>{props.children}</>
export const SelectItem = (props: any) => <option value={props.value}>{props.children}</option>
