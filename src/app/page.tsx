import Image from "next/image";
import { ArrowDown, ArrowRight, Award, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import portrait from "../../public/pic.jpeg";
import teamLunch from "../../public/images/team-lunch.jpeg";
import office from "../../public/images/company.png";

/* ————— Masthead: sticky top rule with the running heads ————— */
function Masthead() {
  const links = [
    { href: "#craft", label: "What I do" },
    { href: "#toolkit", label: "Toolkit" },
    { href: "#project", label: "Project" },
    { href: "#story", label: "Story" },
    { href: "#credentials", label: "Credentials" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-6 py-3.5">
          <a href="#top" className="font-serif text-lg tracking-tight text-ink">
            Ruchi Singh<span className="text-gold">.</span>
          </a>
          <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#hello"
            className="text-[11px] uppercase tracking-[0.18em] text-ink underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-navy"
          >
            Say hello
          </a>
        </div>
        <nav className="no-scrollbar -mx-6 flex gap-6 overflow-x-auto border-t border-border px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap py-0.5 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-12 sm:pt-20 lg:pt-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              The portfolio of a copyeditor · New Delhi
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-serif text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.92] tracking-tight text-ink">
              Ruchi <span className="italic text-navy">Singh</span>
              <span className="text-gold">.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
              I copyedit academic research — the careful pass between an
              accepted manuscript and a published article. Subject Matter Expert
              for DOCX and LaTeX, leading a desk of 10–12 copyeditors, around
              300 pages a day.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ruchisingh-work/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 bg-navy px-6 py-3.5 text-sm uppercase tracking-[0.14em] text-parchment transition-colors hover:bg-ink sm:w-auto"
              >
                Get in touch
                <ArrowRight className="size-4 text-gold" />
              </a>
              <a
                href="#craft"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:text-navy"
              >
                <ArrowDown className="size-4 text-gold" />
                See what I do
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="justify-self-center lg:justify-self-end">
          <figure className="relative w-64 rotate-2 sm:w-72">
            <span className="tape -left-6 -top-3 -rotate-45" />
            <span className="tape -right-6 -top-3 rotate-45" />
            <div className="border border-border bg-card p-3 pb-4 shadow-[0_10px_40px_oklch(0.3_0.02_260/0.14)]">
              <Image
                src={portrait}
                alt="Portrait of Ruchi Singh"
                placeholder="blur"
                preload
                sizes="288px"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="mt-3 text-center font-serif text-sm italic text-muted-foreground">
                Subject Matter Expert, DOCX &amp; LaTeX
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ————— Ticker of the things that cross my desk ————— */
function Ticker() {
  const items = [
    "LaTeX",
    "APA",
    "DOCX",
    "AMA",
    "Scopus",
    "Harvard",
    "Web of Science",
    "Python",
    "Editorial Manager",
    "ScholarOne",
  ];
  const strip = (
    <div className="flex shrink-0 items-center">
      {items.map((t) => (
        <span key={t} className="flex shrink-0 items-center">
          <span className="px-6 font-serif text-lg italic text-ink/80">
            {t}
          </span>
          <span aria-hidden className="text-gold">
            ❧
          </span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee mt-14 border-y border-border bg-card py-3 sm:mt-24">
      <div className="marquee-track" aria-hidden>
        {strip}
        {strip}
      </div>
      <span className="sr-only">{items.join(", ")}</span>
    </div>
  );
}

/* ————— The numbers a recruiter skims for ————— */
function Numbers() {
  const stats = [
    { value: "300", unit: "pages/day", label: "copyedited, individually" },
    {
      value: "150",
      unit: "articles/day",
      label: "delivered by the team I lead",
    },
    { value: "40%", unit: "quality lift", label: "measured through team KPIs" },
    { value: "80%", unit: "time saved", label: "per article, via automation" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20">
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className="border-t-2 border-ink pt-5">
              <p className="font-serif text-5xl tracking-tight text-ink sm:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gold">
                {s.unit}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ————— Section opener: big italic number + title ————— */
function Opener({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-5 border-b border-border pb-6">
      <span className="font-serif text-5xl italic text-gold sm:text-6xl">
        {number}
      </span>
      <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Craft() {
  const crafts = [
    {
      title: "Copyediting, the deep kind",
      body: "Research papers across disciplines, in DOCX and LaTeX — APA, AMA, Harvard. Four to seven LaTeX articles a day, each one left cleaner than I found it, with metadata that holds up in Scopus and Web of Science.",
    },
    {
      title: "Leading the desk",
      body: "As Subject Matter Expert I run a team of 10–12 copyeditors: the standards, the training, the quality checks, the on-time delivery. When an author or an internal team has a question, it lands on my desk first.",
    },
    {
      title: "Automating the boring parts",
      body: "Where the work repeats, I build the fix instead of enduring it. I wrote the team's common-error guide, and co-drove a Python tool that cut per-article formatting from 90 minutes to 20.",
    },
  ];
  return (
    <section
      id="craft"
      className="mx-auto max-w-6xl scroll-mt-28 md:scroll-mt-20 px-6 py-16 sm:py-24 lg:py-28"
    >
      <Opener number="i." title="What I do all day" />
      <div className="grid gap-12 md:grid-cols-3 md:gap-10">
        {crafts.map((c, i) => (
          <Reveal key={c.title} delay={i * 120}>
            <article className="h-full">
              <h3 className="rule-double pb-3 font-serif text-2xl leading-snug text-ink">
                {c.title}
              </h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ————— The toolkit, set like a reference page ————— */
function Toolkit() {
  const groups = [
    {
      title: "Editing & styles",
      items: [
        "APA · AMA · Harvard",
        "DOCX & LaTeX copyediting",
        "Proofreading & pre-editing",
        "Publishing compliance",
      ],
    },
    {
      title: "Publishing systems",
      items: [
        "Editorial Manager",
        "ScholarOne",
        "Scopus & Web of Science",
        "Abstracting & indexing",
      ],
    },
    {
      title: "Production & quality",
      items: [
        "End-to-end journal management",
        "Production scheduling",
        "KPI tracking & publisher reports",
        "QA & query resolution",
      ],
    },
    {
      title: "Tools",
      items: [
        "Python",
        "Microsoft Word & Excel",
        "PowerPoint",
        "Common-error guides & training",
      ],
    },
  ];
  return (
    <section id="toolkit" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl scroll-mt-28 md:scroll-mt-20 px-6 py-16 sm:py-24 lg:py-28">
        <Opener number="ii." title="The toolkit" />
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-gold">
                  {g.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border pb-3 text-sm leading-snug text-ink/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————— The one project that deserves a spotlight ————— */
function Showcase() {
  return (
    <section
      id="project"
      className="scroll-mt-28 md:scroll-mt-20 border-y border-navy-deep bg-ink text-parchment"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-28">
        <div className="mb-12 flex items-baseline gap-5 border-b border-parchment/15 pb-6">
          <span className="font-serif text-5xl italic text-gold sm:text-6xl">
            iii.
          </span>
          <h2 className="font-serif text-3xl tracking-tight text-parchment sm:text-4xl">
            One thing I made
          </h2>
        </div>
        <div className="grid items-center gap-14 lg:grid-cols-[auto_1fr] lg:gap-20">
          <Reveal>
            <div className="text-center lg:text-left">
              <span className="block font-serif text-[clamp(6rem,18vw,11rem)] leading-none text-gold">
                80%
              </span>
              <span className="mt-2 block text-xs uppercase tracking-[0.22em] text-parchment/60">
                less formatting time, every article
              </span>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="max-w-xl">
              <h3 className="font-serif text-3xl italic text-parchment">
                LSP — the LaTeX Styling Processor
              </h3>
              <p className="mt-5 leading-relaxed text-parchment/75">
                Every LaTeX article used to need the same slow, manual pass:
                references, citations, title casing, validation. Ninety minutes,
                gone. So I led the editorial side of a Python tool built with a
                collaborator — defined the requirements, tested every build
                against real manuscripts, and got the whole team actually using
                it.
              </p>
              <p className="mt-4 leading-relaxed text-parchment/75">
                Now the pass takes twenty minutes, and it&apos;s the project
                that best explains how I work: find the repetitive pain, spec
                the fix, make sure it sticks.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ————— The method, step by step ————— */
function Process() {
  const steps = [
    {
      title: "Intake & pre-edit",
      body: "Size up the manuscript — format, style guide, structure. Flag what will slow the deep pass before it starts, and resolve author queries early.",
    },
    {
      title: "The deep pass",
      body: "Line by line: grammar, clarity, citations set to APA, AMA or Harvard, formatting made consistent across DOCX or LaTeX.",
    },
    {
      title: "Quality & metadata",
      body: "Validation and QA checks so every article carries clean metadata — the kind that indexes properly in Scopus and Web of Science.",
    },
    {
      title: "Report & improve",
      body: "KPIs tracked and reported, not guessed. Recurring errors become shared guides, training sessions — or automation, when it repeats enough.",
    },
  ];
  return (
    <section
      id="process"
      className="mx-auto max-w-6xl scroll-mt-28 md:scroll-mt-20 px-6 py-16 sm:py-24 lg:py-28"
    >
      <Opener number="iv." title="How I work" />
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <article>
              <span className="font-serif text-4xl italic text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-serif text-xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ————— The story, told like a story — with the desk itself ————— */
function Story() {
  const chapters = [
    {
      when: "Summer 2024",
      text: "I join NC Creation as a copyeditor and pre-editor, fresh from a BCA in Data Science. Research papers, citation styles, publishing compliance — and a habit of writing guides whenever the same mistake shows up twice. Those guides end up cutting the team's revision cycles by about 20%.",
    },
    {
      when: "Spring 2025",
      text: "Nine months in, I'm promoted to Subject Matter Expert for DOCX and LaTeX. The team's throughput climbs ~20% to 150 articles a day; quality goes up ~40% — measured through the KPIs I now track and report, not guessed.",
    },
    {
      when: "Now",
      text: "Still hands-on with 4–7 LaTeX articles a day, still leading the desk, and studying for an MCA at Manipal University on the side. Two Best Employee of the Month awards and one Best Employee of the Quarter live on my shelf.",
    },
  ];
  return (
    <section id="story" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl scroll-mt-28 md:scroll-mt-20 px-6 py-16 sm:py-24 lg:py-28">
        <Opener number="v." title="The story so far" />
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="max-w-2xl space-y-12">
            {chapters.map((c, i) => (
              <Reveal key={c.when} delay={i * 100}>
                <article className="grid gap-3 sm:grid-cols-[140px_1fr] sm:gap-8">
                  <p className="font-serif text-xl italic leading-snug text-gold">
                    {c.when}
                  </p>
                  <p
                    className={`leading-relaxed text-muted-foreground ${i === 0 ? "dropcap" : ""}`}
                  >
                    {c.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col items-center gap-12 lg:items-end lg:self-start">
            <Reveal delay={150}>
              <figure className="relative w-72 rotate-2 sm:w-80">
                <span className="tape -left-6 -top-3 -rotate-45" />
                <span className="tape -right-6 -top-3 rotate-45" />
                <div className="border border-border bg-background p-3 pb-4 shadow-[0_10px_40px_oklch(0.3_0.02_260/0.14)]">
                  <Image
                    src={office}
                    alt="The office building where the editorial team works"
                    placeholder="blur"
                    sizes="320px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-3 text-center font-serif text-sm italic text-muted-foreground">
                    the shop floor — where the manuscripts land
                  </figcaption>
                </div>
              </figure>
            </Reveal>
            <Reveal delay={250}>
              <figure className="relative w-72 -rotate-2 sm:w-80">
                <span className="tape -left-6 -top-3 -rotate-45" />
                <span className="tape -right-6 -top-3 rotate-45" />
                <div className="border border-border bg-background p-3 pb-4 shadow-[0_10px_40px_oklch(0.3_0.02_260/0.14)]">
                  <Image
                    src={teamLunch}
                    alt="The copyediting team sharing lunch together"
                    placeholder="blur"
                    sizes="320px"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="mt-3 text-center font-serif text-sm italic text-muted-foreground">
                    the desk, off duty — the team behind 150 articles a day
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————— Degrees on the wall, awards on the shelf ————— */
function Credentials() {
  const education = [
    {
      degree: "Master in Computer Application (MCA)",
      school: "Manipal University, Jaipur",
      years: "2026 – present",
    },
    {
      degree: "Bachelor in Computer Application (BCA), Data Science",
      school: "J.C. Bose University of Science & Technology, YMCA",
      years: "2022 – 2025",
    },
  ];
  const awards = [
    {
      title: "Best Employee of the Month ×2",
      body: "Recognized twice for exceeding quality and throughput targets while keeping the team's output on schedule — a benchmark for editing accuracy during high-volume periods.",
    },
    {
      title: "Best Employee of the Quarter",
      body: "Awarded for measurable gains in team productivity: process improvements and training that reduced recurring errors and lifted output across the desk.",
    },
  ];
  return (
    <section
      id="credentials"
      className="mx-auto max-w-6xl scroll-mt-28 md:scroll-mt-20 px-6 py-16 sm:py-24 lg:py-28"
    >
      <Opener number="vi." title="Credentials" />
      <div className="grid gap-14 md:grid-cols-2 md:gap-10">
        <Reveal>
          <div>
            <h3 className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold">
              <GraduationCap className="size-4" />
              Education
            </h3>
            <div className="mt-6 space-y-8">
              {education.map((e) => (
                <article key={e.degree} className="border-b border-border pb-6">
                  <h4 className="font-serif text-xl leading-snug text-ink">
                    {e.degree}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {e.school} · <span className="italic">{e.years}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <h3 className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold">
              <Award className="size-4" />
              Awards & recognition
            </h3>
            <div className="mt-6 space-y-8">
              {awards.map((a) => (
                <article key={a.title} className="border-b border-border pb-6">
                  <h4 className="font-serif text-xl leading-snug text-ink">
                    {a.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ————— Big friendly contact, signed like a letter ————— */
function Hello() {
  return (
    <footer
      id="hello"
      className="texture-paper scroll-mt-28 md:scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            {/* Left — heading + contact */}
            <div className="lg:max-w-xl">
              <p className="font-serif text-lg italic text-gold">
                Enough about me —
              </p>
              <h2 className="mt-3 font-serif text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] tracking-tight text-ink">
                Say hello<span className="text-gold">.</span>
              </h2>
              <a
                href="https://www.linkedin.com/in/ruchisingh-work/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block break-all font-serif text-lg italic text-navy underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-ink sm:break-normal sm:text-2xl"
              >
                Connect on LinkedIn
              </a>
              <p className="mt-6 text-sm text-muted-foreground">
                or ring +91 96675 05867 · New Delhi, India
              </p>
            </div>

            {/* Right — LinkedIn badge */}
            <div className="flex-shrink-0">
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="light"
                data-type="HORIZONTAL"
                data-vanity="ruchisingh-work"
                data-version="v1"
              ></div>
            </div>
          </div>
        </Reveal>
        <div className="mt-20 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-baseline sm:justify-between">
          <span>
            © {new Date().getFullYear()} Ruchi Singh — edited, naturally, by
            hand
          </span>
          <span className="font-serif italic">
            Set in Fraunces &amp; Instrument Sans
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div
      id="top"
      className="texture-paper flex flex-1 flex-col overflow-x-clip"
    >
      <Masthead />
      <main>
        <Hero />
        <Ticker />
        <Numbers />
        <Craft />
        <Toolkit />
        <Showcase />
        <Process />
        <Story />
        <Credentials />
      </main>
      <Hello />
    </div>
  );
}
