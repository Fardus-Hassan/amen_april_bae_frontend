import {
  UsersIcon,
  MapPinIcon,
  PlaneIcon,
  CheckIcon,
} from "@/components/icons";

const FEATURES = [
  {
    id: "narrative",
    icon: UsersIcon,
    title: "Narrative Biography",
    description:
      "We weave your DNA data into a compelling, personalized biography that traces your lineage and highlights the stories that make you unique.",
    items: [
      "Verified genealogical research",
      "Multi-generation family narrative",
      "Professional writing & editing",
    ],
  },
  {
    id: "map",
    icon: MapPinIcon,
    title: "Interactive Ancestry Map",
    description:
      "Explore your heritage visually with an interactive map that shows where your ancestors lived, migrated, and left their mark across the world.",
    items: [
      "Global ancestry visualization",
      "Migration path timelines",
      "Region-specific insights",
    ],
  },
  {
    id: "travel",
    icon: PlaneIcon,
    title: "Heritage Travel Planning",
    description:
      "Turn your ancestry into adventure. We help you plan meaningful trips to the places your family once called home, with curated experiences.",
    items: [
      "Custom heritage itineraries",
      "Local expert connections",
      "Documentation & keepsakes",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-landing-bg py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-merriweather text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
            More Than Just Data
          </h2>
          <p className="mt-4 text-base font-normal text-text-primary sm:text-lg">
            We transform genetic markers into meaningful narratives, connecting
            you to your past and guiding your future.
          </p>
        </header>

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {FEATURES.map(({ id, icon: Icon, title, description, items }) => (
            <article
              key={id}
              className="rounded-2xl bg-white p-6 shadow-md sm:p-8"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-landing-badge-bg text-primary">
                <Icon size={24} />
              </div>
              <h3 className="font-merriweather text-xl font-bold text-secondary sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-text-primary sm:text-base">
                {description}
              </p>
              <ul className="mt-5 space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-medium text-sm text-text-primary sm:text-base"
                  >
                    <span className="mt-0.5 shrink-0 text-primary">
                      <CheckIcon size={18} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
