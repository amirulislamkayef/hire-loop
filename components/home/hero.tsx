import Image from "next/image"
import { BarChart3, MapPin, Search, Star, UserSearchIcon } from "lucide-react"

import globe from "@/app/images/globe.png"

const TRENDING_POSITIONS = ["Product Designer", "AI Engineering", "Dev-ops Engineer"]

const STATS = [
  { icon: Search, value: "50K", label: "Active Jobs" },
  { icon: BarChart3, value: "12K", label: "Companies" },
  { icon: UserSearchIcon, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 shrink-0">
      <defs>
        <linearGradient id="hl-case" x1="0" y1="8" x2="0" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c86d36" />
          <stop offset="1" stopColor="#883f2e" />
        </linearGradient>
        <linearGradient id="hl-paper" x1="6" y1="2" x2="16" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e6eeff" />
          <stop offset="1" stopColor="#bac8fa" />
        </linearGradient>
      </defs>
      <path d="M8.4 9V7.3c0-1 .8-1.8 1.8-1.8h3.6c1 0 1.8.8 1.8 1.8V9" fill="none" stroke="#4f4f4f" strokeWidth="1.7" />
      <rect x="5.6" y="2.4" width="10.2" height="6.2" rx="1.1" fill="url(#hl-paper)" />
      <rect x="1" y="8" width="22" height="14" rx="2.2" fill="url(#hl-case)" />
      <path d="M1 13.4h22" stroke="#6d3326" strokeWidth="1.1" opacity="0.65" />
      <path d="M1 22v-8.6h22V22z" fill="#6d3326" opacity="0.5" />
      <rect x="9.1" y="11.6" width="3" height="2.1" rx="0.6" fill="#fee45a" />
      <rect x="9.1" y="13.9" width="3" height="2.1" rx="0.6" fill="#fea613" />
      <rect x="12.6" y="11.6" width="3" height="2.1" rx="0.6" fill="#fee45a" />
    </svg>
  )
}

function Badge() {
  return (
    <div className="mx-auto flex w-fit items-center gap-3 sm:gap-4 mt-30">
      <span aria-hidden="true" className="h-px w-8 bg-linear-to-r from-white/0 to-[#a8a8a8]/70 sm:w-16" />
      <span className="flex h-11 items-center gap-4 rounded-full border border-white/20 bg-[linear-gradient(135deg,#474747,#010102)] px-5 text-white sm:h-12 sm:px-6 sm:text-lg">
        <BriefcaseIcon />
        <span>
          <span className="font-semibold">50,000+</span>{" "}
          <span className="uppercase text-white/60">new jobs this month</span>
        </span>
      </span>
      <span aria-hidden="true" className="h-px w-8 bg-linear-to-l from-white/0 to-[#a8a8a8]/70 sm:w-16" />
    </div>
  )
}

function SearchBar() {
  return (
    <form
      action="/browse-jobs"
      method="get"
      className="mx-auto flex w-full max-w-196 flex-col rounded-2xl border border-white/20 bg-[#101010] p-2 sm:h-16 sm:flex-row sm:items-center"
    >
      <div className="flex flex-col gap-2 sm:contents">
        <label className="flex items-center gap-3 px-3 py-2 sm:h-12 sm:flex-1 sm:py-0">
          <Search className="size-5 shrink-0 text-white sm:size-6" strokeWidth={1.5} />
          <input
            type="text"
            name="query"
            placeholder="Job title, skill or company"
            aria-label="Job title, skill or company"
            className="h-9 w-full min-w-0 self-stretch bg-transparent text-base text-white outline-none placeholder:text-white/80"
          />
        </label>
        <span aria-hidden="true" className="hidden h-6 w-px self-center bg-white/20 sm:block" />
        <label className="flex items-center gap-3 px-3 py-2 sm:h-12 sm:flex-1 sm:py-0">
          <MapPin className="size-5 shrink-0 text-white sm:size-6" strokeWidth={1.5} />
          <input
            type="text"
            name="location"
            placeholder="Location or Remote"
            aria-label="Location or remote"
            className="h-9 min-w-0 self-stretch bg-transparent text-base text-white outline-none placeholder:text-white/80"
          />
        </label>
      </div>
      <button
        type="submit"
        aria-label="Search jobs"
        className="mt-1 grid h-11 w-full place-items-center rounded-xl bg-[#5c53fe] text-white transition-colors hover:bg-[#5c53fe]/85 sm:mt-0 sm:size-12 sm:shrink-0 sm:self-center"
      >
        <Search className="size-5 sm:size-6" strokeWidth={1.5} />
      </button>
    </form>
  )
}

function Trending() {
  return (
    <div className="mx-auto flex max-w-196 flex-wrap items-center justify-center gap-2 px-2 sm:justify-start">
      <span className="mr-3 text-sm text-white/70">Trending Position</span>
      {TRENDING_POSITIONS.map((position) => (
        <span
          key={position}
          className="flex h-8 items-center whitespace-nowrap rounded-full border border-white/10 bg-[#1a1a1b] px-3 text-[14px] text-white"
        >
          {position}
        </span>
      ))}
    </div>
  )
}

function StatCard({ icon: Icon, value, label }: (typeof STATS)[number]) {
  return (
    <li className="flex h-auto min-h-53 flex-col justify-between gap-10 rounded-2xl border border-white/10 bg-[linear-gradient(160deg,#010102_0%,#313131_100%)] p-6 lg:h-63 lg:gap-0">
      <Icon className="size-6 text-white" strokeWidth={1.5} />
      <div>
        <div className="text-4xl font-medium leading-none text-white sm:text-[56px]">{value}</div>
        <div className="mt-3 text-sm text-white sm:text-lg">{label}</div>
      </div>
    </li>
  )
}

function Stats() {
  return (
    <div className="relative mx-auto w-full max-w-330 px-4 sm:px-6" style={{ marginTop: "max(140px, min(24.86vw, 358px))" }}>
      <h2 className="mx-auto max-w-155 text-center text-[28px] leading-[1.35] text-white/70 sm:text-[40px] sm:leading-13">
        Assisting over <span className="font-bold text-white">15,000</span> job seekers
        <br className="hidden sm:block" />
        find their dream positions.
      </h2>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4" style={{ marginTop: "max(24px, min(3.33vw, 48px))" }}>
        {STATS.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </ul>
    </div>
  )
}

function GlobeBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 -mt-40 z-0 w-full -translate-x-1/2 select-none"
    >
      <Image src={globe} alt="" className="w-full h-auto" height={2000} width={2000} quality={1000}/>
    </div>
  )
}

function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#010103] -mt-30"
      style={{ paddingTop: "min(12.22vw, 176px)", paddingBottom: "max(56px, min(5vw, 72px))" }}
    >
      <GlobeBackdrop />
      <div className="relative z-10">
        <div className="mx-auto max-w-196 px-4 text-center sm:px-6">
          <Badge />
          <h1
            className="text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-[56px] md:leading-16"
            style={{ marginTop: "max(12px, min(2.36vw, 34px))" }}
          >
            Find Your Dream Job Today
          </h1>
          <p
            className="mx-auto max-w-196 text-base leading-normal text-white/70 sm:text-xl sm:leading-8"
            style={{ marginTop: "max(8px, min(1.11vw, 16px))" }}
          >
            HireLoop connects top talent with world-class companies. Browse thousands of curated
            opportunities and land your next role — faster.
          </p>
          <div className="text-left sm:text-center" style={{ marginTop: "max(24px, min(3.33vw, 48px))" }}>
            <SearchBar />
            <div style={{ marginTop: "max(16px, min(1.67vw, 24px))" }}>
              <Trending />
            </div>
          </div>
        </div>
        <Stats />
      </div>
    </section>
  )
}

export { Hero }
