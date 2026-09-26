import type { Metadata } from "next";
import Link from "next/link";

import ContactForm from "../../components/ContactForm";
import SignalField from "@/components/SignalField";

export const metadata: Metadata = {
	title: "Contact | Muneesh",
	description:
		"Start a conversation with Muneesh about thoughtful digital products, design, and front-end work.",
};

const contactDetails = [
	{ label: "Email", value: "hello@muneesh.dev", href: "mailto:hello@muneesh.dev" },
	{ label: "Based in", value: "Kerala / working globally" },
	{ label: "Availability", value: "Selected projects for 2025" },
];

export default function ContactPage() {
	return (
		<main className="relative isolate min-h-screen overflow-hidden bg-[#080b12] text-slate-100 selection:bg-cyan-200 selection:text-slate-950">
			<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_8%,rgba(25,75,105,0.33),transparent_32%),radial-gradient(circle_at_10%_72%,rgba(91,35,111,0.2),transparent_28%),linear-gradient(135deg,#080b12_0%,#0b1420_55%,#100b18_100%)]" />
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

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
					<Link href="/about" className="transition hover:text-cyan-100">About</Link>
					<Link href="/contact" className="text-cyan-100">Contact <span className="ml-1 text-cyan-300">↗</span></Link>
				</nav>
			</header>

			<section className="custom-layout mx-auto pb-24 pt-16 md:pb-36 md:pt-24 lg:pt-28">
				<div className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-24">
					<div className="relative z-10">
						<p className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200/75">
							<span className="h-px w-9 bg-cyan-200/70" />
							Open channel
						</p>
						<h1 className="max-w-xl font-[family-name:var(--font-calistoga)] text-6xl leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-[7.4rem]">
							Let&apos;s make something <span className="text-cyan-200">useful.</span>
						</h1>
						<p className="mt-9 max-w-lg text-base leading-8 text-slate-300/75 md:text-lg">
							Have a product, idea, or slightly impossible brief in mind? Send a note and let&apos;s find the shape of it together.
						</p>

						<div className="mt-12 overflow-hidden rounded-[2rem] border border-white/15 bg-[#101a2a]/70">
							<div className="relative aspect-[1.35]">
								<SignalField />
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent_0,transparent_30%,rgba(8,11,18,0.72)_100%)]" />
								<div className="absolute left-6 top-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/45">
									<span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_3px_rgba(103,232,249,0.55)]" />
									Signal / ready
								</div>
								<p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.24em] text-white/45">Usually replies within 2 days</p>
							</div>
						</div>
					</div>

					<ContactForm />
				</div>
			</section>

			<section className="border-y border-white/10 bg-white/[0.025]">
				<div className="custom-layout mx-auto grid gap-8 py-10 sm:grid-cols-3 md:py-14">
					{contactDetails.map((detail) => (
						<div key={detail.label} className="border-t border-white/20 pt-4">
							<p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-fuchsia-200/70">{detail.label}</p>
							{detail.href ? (
								<a href={detail.href} className="mt-3 block text-sm text-white transition hover:text-cyan-200">{detail.value} ↗</a>
							) : (
								<p className="mt-3 text-sm text-white/70">{detail.value}</p>
							)}
						</div>
					))}
				</div>
			</section>

			<footer className="custom-layout mx-auto flex flex-col gap-5 border-t border-white/10 py-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
				<span>© 2025 Muneesh K.</span>
				<Link href="/" className="transition hover:text-cyan-100">Back home ↗</Link>
			</footer>
		</main>
	);
}
