import { BlockLogo } from "./block-logo";
import { LocaleSwitch } from "./locale-switch";
import { SectionHeading } from "./section-heading";
import { ServicesSection } from "./services-section";
import { TrackedMailLink } from "./tracked-mail-link";
import { homeDictionaries, paths, type Locale } from "@/i18n/dictionaries";

const GITHUB_URL = "https://github.com/jouer-rt";
const EMAIL = "ryota.taya@jouerworld.com";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-line bg-surface px-3 py-1 text-xs text-foreground">
      {children}
    </span>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const dict = homeDictionaries[locale];
  const resumeUrl = paths[locale].resume;

  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      {/* Header */}
      <header className="sticky top-0 z-10 -mx-6 mb-4 border-b border-line bg-[var(--background)]/85 px-6 py-4 backdrop-blur">
        <nav className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold tracking-wide text-heading">
            <BlockLogo size={18} />
            Ryota Taya
          </a>
          <div className="flex items-center gap-3 text-sm text-muted sm:gap-5">
            {/* 狭い画面では Works・Services だけを出す（Contact は Services の直下にあり、Services にもメール導線がある） */}
            <a href="#skills" className="hidden hover:text-accent sm:inline">
              {dict.nav.skills}
            </a>
            <a href="#works" className="hover:text-accent">
              {dict.nav.works}
            </a>
            <a href="#services" className="hover:text-accent">
              {dict.nav.services}
            </a>
            <a href="#contact" className="hidden hover:text-accent sm:inline">
              {dict.nav.contact}
            </a>
            <LocaleSwitch locale={locale} page="home" />
          </div>
        </nav>
      </header>

      <main id="top" className="flex flex-col gap-24 pb-24">
        {/* Hero */}
        <section className="flex items-start justify-between gap-8 pt-16 sm:pt-24">
          <div>
            <p className="font-mono text-accent">{dict.hero.role}</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight text-heading">
              {dict.hero.name}
              <span className="ml-3 text-xl sm:text-2xl font-medium text-muted">
                {dict.hero.nameSub}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl leading-relaxed">{dict.hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0d4a8c] dark:bg-mint dark:text-navy dark:hover:bg-[#54eebc]"
              >
                {dict.hero.servicesCta}
              </a>
              <a
                href={resumeUrl}
                className="border-2 border-navy px-5 py-2.5 text-sm font-medium text-navy hover:border-accent hover:text-accent dark:border-line dark:text-foreground dark:hover:border-accent dark:hover:text-accent"
              >
                {dict.hero.resumeCta}
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy px-5 py-2.5 text-sm font-medium text-navy hover:border-accent hover:text-accent dark:border-line dark:text-foreground dark:hover:border-accent dark:hover:text-accent"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="hidden pt-6 sm:block">
            <BlockLogo size={132} />
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionHeading id="skills" sub={dict.skills.sub} title={dict.skills.title} />
          <div className="mt-6 flex flex-wrap gap-2">
            {dict.skills.items.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            {dict.skills.note.before}
            <a href={resumeUrl} className="mx-1 text-accent hover:underline">
              {dict.skills.note.link}
            </a>
            {dict.skills.note.after}
          </p>
        </section>

        {/* Works */}
        <section>
          <SectionHeading id="works" sub={dict.works.sub} title={dict.works.title} />
          <div className="mt-8 flex flex-col gap-5">
            {dict.works.entries.map((work) => (
              <div
                key={work.title}
                className="border border-line border-l-4 border-l-cyan bg-surface p-6"
              >
                <h3 className="text-xl font-bold text-heading">
                  {work.title}
                  <span className="ml-3 text-sm font-medium text-muted">
                    {work.subtitle}
                  </span>
                </h3>
                <p className="mt-3 leading-relaxed">{work.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    {work.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                  </a>
                )}
                {work.demo && (
                  <div className="mt-4 bg-inset px-4 py-3 text-sm text-muted">
                    {/* 英語は空白がないと1語扱いで折り返せないため、区切りの前後に改行位置を入れ、収まらない語は途中で折る */}
                    <p className="wrap-anywhere">
                      {dict.works.demoLabel}
                      <code className="font-mono text-foreground">
                        {work.demo.email}
                      </code>
                      <wbr />
                      <span className="mx-1">{dict.works.demoSeparator}</span>
                      <wbr />
                      <code className="font-mono text-foreground">
                        {work.demo.password}
                      </code>
                    </p>
                    <p className="mt-1">{work.demo.note}</p>
                  </div>
                )}
                {work.videoSrc && (
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="mt-4 w-full border border-line"
                    src={work.videoSrc}
                  >
                    {dict.works.videoFallback}
                  </video>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            {dict.works.note.before}
            <a href={resumeUrl} className="mx-1 text-accent hover:underline">
              {dict.works.note.link}
            </a>
            {dict.works.note.after}
          </p>
        </section>

        {/* Services */}
        <ServicesSection dict={dict.services} email={EMAIL} locale={locale} />

        {/* Contact */}
        <section>
          <SectionHeading id="contact" sub={dict.contact.sub} title={dict.contact.title} />
          <ul className="mt-6 flex flex-col gap-3">
            <li>
              <span className="mr-3 inline-block w-28 text-sm text-muted">
                {dict.contact.emailLabel}
              </span>
              <TrackedMailLink
                href={`mailto:${EMAIL}`}
                track={{ method: "mail", placement: "contact", service: "general", locale }}
                className="text-accent hover:underline"
              >
                {EMAIL}
              </TrackedMailLink>
            </li>
            <li>
              <span className="mr-3 inline-block w-28 text-sm text-muted">
                {dict.contact.githubLabel}
              </span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                github.com/jouer-rt
              </a>
            </li>
            <li>
              <span className="mr-3 inline-block w-28 text-sm text-muted">
                {dict.contact.resumeLabel}
              </span>
              <a href={resumeUrl} className="text-accent hover:underline">
                {dict.contact.resumeLinkText}
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © 2026 Ryota Taya
      </footer>
    </div>
  );
}
