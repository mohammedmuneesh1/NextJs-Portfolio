"use client";

import { FormEvent, useState } from "react";

const inputClassName =
	"mt-3 w-full border-b border-white/20 bg-transparent px-0 pb-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-cyan-200";

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = String(formData.get("name") || "there");
		const email = String(formData.get("email") || "");
		const message = String(formData.get("message") || "");
		const subject = encodeURIComponent(`Project enquiry from ${name}`);
		const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

		window.location.href = `mailto:hello@muneesh.dev?subject=${subject}&body=${body}`;
		setSubmitted(true);
	}

	return (
		<div className="border-t border-white/20 pt-6 lg:pt-0 lg:border-t-0">
			<div className="mb-10 flex items-start justify-between gap-6">
				<div>
					<p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200/70">Start a project</p>
					<h2 className="mt-4 text-3xl font-medium leading-tight text-white md:text-4xl">Tell me what you&apos;re thinking.</h2>
				</div>
				<span className="text-sm text-cyan-200/70">01 / 01</span>
			</div>

			<form onSubmit={handleSubmit} className="space-y-8">
				<label className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
					Your name
					<input className={inputClassName} name="name" type="text" placeholder="Jane Smith" required />
				</label>
				<label className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
					Email address
					<input className={inputClassName} name="email" type="email" placeholder="jane@company.com" required />
				</label>
				<label className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
					Your note
					<textarea className={`${inputClassName} min-h-28 resize-y`} name="message" placeholder="A few words about the project..." required />
				</label>

				<div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
					<button type="submit" className="rounded-full bg-cyan-100 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-white">
						Send the note <span className="ml-2">↗</span>
					</button>
					{submitted && <p className="text-xs leading-5 text-cyan-200/75">Your mail app should be open with the note ready to send.</p>}
				</div>
			</form>
		</div>
	);
}
