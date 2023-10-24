import React from 'react'

export default function page() {
  const colors = [
    'background',
    'foreground',
    'card',
    'card-foreground',
    'popover',
    'popover-foreground',
    'primary',
    'primary-foreground',
    'secondary',
    'secondary-foreground',
    'muted',
    'muted-foreground',
    'accent',
    'accent-foreground',
    'destructive',
    'destructive-foreground',
    'border',
    'input',
    'ring',
  ]

  return (
    <div className="flex h-screen w-full items-center justify-center gap-4 bg-slate-400">
      <div className="flex w-[1000px] gap-10 overflow-x-scroll">
        {colors.map((color) => (
          <div key={color} className="w-fit flex-col gap-1">
            <div className={`h-12 w-12 rounded-full bg-${color}`} />
            <div className="w-fit">{color}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
