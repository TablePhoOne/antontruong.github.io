import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/ui/Hero";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <Hero
  title="An Ton Truong"
  subtitle="i built this website lol"
/>

<section className="section">
  <div className="grid items-center gap-16 md:grid-cols-2">
    <div>
      <Image
  src="/meee.jpg"
  alt="Anton Truong"
  width={800}
  height={1000}
  className="aspect-[4/5] rounded-[2rem] object-cover"
/>
    </div>
    <div>
      <p>BLAH BLACH BLAH</p>
    </div>
  </div>
</section>

      <section className="section text-center">
  <p className="mb-3 uppercase tracking-[0.3em] opacity-50">
    I work too!
  </p>

  <h2 className="mb-8 text-5xl">
    Resume
  </h2>

  <a
    href="/resume.pdf"
    target="_blank"
    className="glass inline-flex rounded-full px-10 py-5 transition-all duration-300 hover:-translate-y-1"
  >
    Download Resume
  </a>
</section>

      <section className="section text-center">
  <div className="mx-auto max-w-2xl text-center">
    <p className="mb-3 uppercase tracking-[0.3em] opacity-50">
      Hit me up!
    </p>

    <h2 className="mb-12 text-5xl">
      Contacts
    </h2>

    <div className="space-y-6 text-xl">
      <p>hello@example.com</p>
      <p>@yourinstagram</p>
    </div>
  </div>
      </section>
    </>
  );
}
