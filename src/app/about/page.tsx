import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SignalField from "@/components/SignalField";
import computerImage from "@/assets/images/memoji-computer.png";

export const metadata: Metadata = {
	title: "About | Muneesh",
	description:
		"A closer look at Muneesh's approach to building thoughtful digital products.",

};

const principles = [
	{
		number: "01",
		title: "Make it feel inevitable",
		description:
			"The best interfaces feel obvious in hindsight. I look for the quiet decisions that make a product click.",
	},
	{
		number: "02",
		title: "Details carry the signal",
		description:
			"Type, motion, spacing, and feedback are not polish applied at the end. They are part of the product's voice.",
	},
	{
		number: "03",
		title: "Stay curious, stay useful",
		description:
			"I bring a wide lens to every brief, then narrow it into work that is clear, durable, and genuinely helpful.",
	},
];

const timeline = [
	{ year: "2024", label: "Independent practice", detail: "Product design & front-end" },
	{ year: "2022", label: "The craft gets serious", detail: "Systems, motion, accessibility" },
	{ year: "2020", label: "First experiments", detail: "Code, visuals, late-night ideas" },
];


export default function AboutPage() {
	return (
		<main className="relative isolate min-h-screen overflow-hidden bg-[#080b12] text-slate-100 selection:bg-cyan-200 selection:text-slate-950">
			<div className="pointer-events-none absolute inset-0 -z-10
             bg-[radial-gradient(circle_at_75%_7%,rgba(25,75,105,0.33),transparent_32%),radial-gradient(circle_at_4%_60%,rgba(91,35,111,0.2),transparent_28%),linear-gradient(135deg,#080b12_0%,#0b1420_55%,#100b18_100%)]" 
             />

             {/*THE SQUARE GGIRD EFFECT */}
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] 
            [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]
            "
             />

			<header className="custom-layout mx-auto flex items-center justify-between py-7 md:py-9">
				<Link href="/" className="group flex items-center gap-3" aria-label="Muneesh home">
					<span className="grid size-9 place-items-center rounded-full border border-cyan-200/30 bg-cyan-100/10 text-sm font-semibold text-cyan-100 transition group-hover:border-cyan-100/70">
						M
					</span>
					<span className="hidden text-xs font-semibold uppercase tracking-[0.28em] text-white/65 sm:block">
						Muneesh / 24
					</span>
				</Link>
				<nav aria-label="Main navigation" className="flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 sm:gap-8">
					<Link href="/#projects" className="transition hover:text-cyan-100">Work</Link>
					<Link href="/about" className="text-cyan-100">About</Link>
					<Link href="/#contact" className="transition hover:text-cyan-100">Contact <span className="ml-1 text-cyan-300">↗</span></Link>
				</nav>
			</header>

			<section className="custom-layout mx-auto pt-16 pb-24 md:pt-24 md:pb-36 lg:pt-32">
				<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
					<div className="relative z-10">
						<p className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200/75">
							<span className="h-px w-9 bg-cyan-200/70" />
							Personal operating system
						</p>
						<h1 className="max-w-3xl font-[family-name:var(--font-calistoga)] text-6xl leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-[7.6rem]">
							Designing for the <span className="text-cyan-200">in-between.</span>
						</h1>
						<p className="mt-9 max-w-xl text-base leading-8 text-slate-300/75 md:text-lg">
							I&apos;m Muneesh, a designer and developer interested in the space between a good idea and the moment it becomes something people want to keep using.
						</p>
						<div className="mt-10 flex flex-wrap items-center gap-5">
							<Link href="/#contact" className="rounded-full bg-cyan-100 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-white">
								Start a conversation <span className="ml-2">↗</span>
							</Link>
							<span className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">Based in Kerala · Working globally</span>
						</div>
					</div>

					<div className="group relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-white/15 bg-[#101a2a]/70 shadow-2xl shadow-cyan-950/30">
						<SignalField />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0,transparent_38%,rgba(8,11,18,0.68)_100%)]" />
						<div className="absolute left-7 top-7 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/45">
							<span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_3px_rgba(103,232,249,0.55)]" />
							Signal / online
						</div>
						<div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
							<div>
								<p className="text-4xl font-semibold tracking-tight text-white">01:01</p>
								<p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-white/40">Always one more iteration</p>
							</div>
							<Image src={computerImage} alt="Illustration of Muneesh working at a computer" width={190} height={190} className="relative -mb-5 w-32 object-contain drop-shadow-[0_18px_22px_rgba(0,0,0,0.45)] sm:w-44" priority />
						</div>
					</div>
				</div>
			</section>

			<section className="border-y border-white/10 bg-white/[0.025]">
				<div className="custom-layout mx-auto grid gap-10 py-16 md:grid-cols-[0.7fr_1.3fr] md:py-24">
					<div>
						<p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200/70">The short version</p>
						<h2 className="mt-5 max-w-xs text-3xl font-medium leading-tight text-white md:text-4xl">A human-first process with a technical pulse.</h2>
					</div>
					<div className="grid gap-8 sm:grid-cols-3">
						{principles.map((principle) => (
							<article key={principle.number} className="border-t border-white/20 pt-5">
								<p className="text-xs text-cyan-200/70">{principle.number}</p>
								<h3 className="mt-8 text-lg font-medium text-white">{principle.title}</h3>
								<p className="mt-3 text-sm leading-6 text-white/50">{principle.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="custom-layout mx-auto grid gap-16 py-24 md:py-32 lg:grid-cols-[0.8fr_1.2fr]">
				<div>
					<p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200/70">A few coordinates</p>
					<p className="mt-6 max-w-sm text-2xl leading-tight text-white/85">The work keeps moving, but the north star stays the same: make useful things feel alive.</p>
				</div>
				<div className="divide-y divide-white/10 border-y border-white/10">
					{timeline.map((item) => (
						<div key={item.year} className="grid grid-cols-[70px_1fr] gap-5 py-6 sm:grid-cols-[100px_1fr_1fr] sm:items-center">
							<span className="text-sm text-cyan-200/70">{item.year}</span>
							<span className="text-base text-white">{item.label}</span>
							<span className="text-sm text-white/40 sm:text-right">{item.detail}</span>
						</div>
					))}
				</div>
			</section>

			<footer className="custom-layout mx-auto flex flex-col gap-5 border-t border-white/10 py-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
				<span>© 2025 Muneesh K.</span>
				<span>Built with intent / shipped with care</span>
			</footer>
		</main>
	);
}
