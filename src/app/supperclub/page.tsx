import FadeIn from "@/components/ui/FadeIn";
import Hero from "@/components/ui/Hero";
import Image from "next/image";

<Hero
  title="Supper Club"
  subtitle="Seasonal tasting experiences centered around thoughtful cooking, hospitality, and connection."
/>

const menu = [
  {
    course: "Amuse",
    description: "Seasonal bite",
  },
  {
    course: "First Course",
    description: "Hamachi • Peach • Shiso",
  },
  {
    course: "Main",
    description: "Duck • Cherry • Endive",
  },
  {
    course: "Dessert",
    description: "Matcha • Strawberry",
  },
];

export default function SupperClub() {
  return (
    <>
      <section className="gradient-bg flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-4 text-7xl font-bold md:text-8xl">
            Supper Club
          </h1>

          <p className="max-w-xl text-lg opacity-75">
            Seasonal tasting experiences focused on
            thoughtful cooking and hospitality.
          </p>
        </div>
      </section>

      <section className="section">
        <>
  <p className="mb-3 text-center text-xs uppercase tracking-[0.35em] opacity-40">
    Summer 2026
  </p>

  <h2 className="mb-12 text-center text-5xl">
    Tasting Menu
  </h2>
</>

        <div className="grid gap-8 md:grid-cols-2">
          {menu.map((item) => (
            <div
              key={item.course}
              className="glass rounded-[2rem] p-10 transition-all duration-300 hover:-translate-y-2"
            >
              <p className="mb-3 uppercase tracking-[0.3em] opacity-50">
                Course
              </p>

              <h3 className="mb-4 text-3xl">
                {item.course}
              </h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="mb-12 text-center text-5xl">
          Gallery
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="aspect-square overflow-hidden rounded-[2rem] bg-gray-200 transition-transform duration-500 hover:scale-[1.03]" />
          <div className="aspect-square overflow-hidden rounded-[2rem] bg-gray-200 transition-transform duration-500 hover:scale-[1.03]" />
          <div className="aspect-square overflow-hidden rounded-[2rem] bg-gray-200 transition-transform duration-500 hover:scale-[1.03]" />
        </div>

        <FadeIn>
  <section className="section">
    <div className="glass mx-auto max-w-4xl rounded-[2rem] p-16 text-center">

      <p className="mb-3 text-xs uppercase tracking-[0.35em] opacity-40">
        Interested?
      </p>

      <h2 className="mb-6 text-5xl">
        Join the next dinner.
      </h2>

      <p className="mx-auto mb-10 max-w-xl leading-8 opacity-80">
        Follow along for future menus,
        collaborations, and upcoming
        supper club experiences.
      </p>

      <a
        href="https://instagram.com/YOUR_INSTAGRAM"
        target="_blank"
        className="glass inline-flex rounded-full px-8 py-4 transition hover:-translate-y-1"
      >
        Follow on Instagram
      </a>

    </div>
  </section>
</FadeIn>
      </section>
    </>
  );
}
<Image
  src="/gallery/dish1.jpg"
  alt="Dish"
  width={800}
  height={800}
  className="aspect-square rounded-[2rem] object-cover transition duration-500 hover:scale-105"
/>

