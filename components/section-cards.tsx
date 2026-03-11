"use client"

import { TrendingUpIcon, TrendingDownIcon } from "lucide-react"

const metrics = [
  {
    label: "Total Revenue",
    value: "$1,250.00",
    trend: "+12.5%",
    direction: "up" as const,
    note: "Trending up this month",
    sub: "Visitors for the last 6 months",
  },
  {
    label: "New Customers",
    value: "1,234",
    trend: "−20%",
    direction: "down" as const,
    note: "Down 20% this period",
    sub: "Acquisition needs attention",
  },
  {
    label: "Active Accounts",
    value: "45,678",
    trend: "+12.5%",
    direction: "up" as const,
    note: "Strong user retention",
    sub: "Engagement exceed targets",
  },
  {
    label: "Growth Rate",
    value: "4.5%",
    trend: "+4.5%",
    direction: "up" as const,
    note: "Steady performance increase",
    sub: "Meets growth projections",
  },
]

export function SectionCards() {
  return (
    <div className="mx-4 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border/60 lg:mx-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="group relative flex flex-col gap-3 bg-card p-6 transition-colors duration-200 hover:bg-accent/50"
        >
          {/* Expanding accent bar slides in from left on hover */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

          <div className="flex items-start justify-between gap-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {metric.label}
            </p>
            <span
              className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold tabular-nums ${
                metric.direction === "up"
                  ? "bg-primary/20 text-foreground"
                  : "bg-destructive/10 text-destructive"
              }`}
            >
              {metric.direction === "up" ? (
                <TrendingUpIcon className="size-3" />
              ) : (
                <TrendingDownIcon className="size-3" />
              )}
              {metric.trend}
            </span>
          </div>

          <p className="text-[2.75rem] leading-none font-black tabular-nums tracking-tight">
            {metric.value}
          </p>

          <div className="mt-auto border-t border-border/50 pt-3">
            <p className="text-sm font-medium leading-snug text-foreground/80">
              {metric.note}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">{metric.sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
