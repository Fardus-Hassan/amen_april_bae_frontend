"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Share2,
  Trash2,
  Download,
  BookOpen,
  Clock,
  Badge,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "4", label: "Ancestral Regions" },
  { value: "7", label: "Generations Traced" },
  { value: "150+", label: "Years of History" },
  { value: "3", label: "Migration Events" },
];

const ancestors = [
  {
    name: "Mitchel March",
    years: "1892–1968",
    born: "Florence, Italy",
    occupation: "Seamstress",
    quote:
      "Maria emigrated to America in 1912, bringing with her the family's traditional embroidery patterns.",
    avatarBg: "bg-amber-300",
    initials: "MM",
  },
  {
    name: "Maria Rossi",
    years: "1892–1968",
    born: "Florence, Italy",
    occupation: "Seamstress",
    quote:
      "Maria emigrated to America in 1912, bringing with her the family's traditional embroidery patterns.",
    avatarBg: "bg-blue-400",
    initials: "MR",
  },
  {
    name: "Sara Amiya",
    years: "1892–1968",
    born: "Florence, Italy",
    occupation: "Seamstress",
    quote:
      "Maria emigrated to America in 1912, bringing with her the family's traditional embroidery patterns.",
    avatarBg: "bg-orange-400",
    initials: "SA",
  },
  {
    name: "Jhon Smith",
    years: "1892–1968",
    born: "Florence, Italy",
    occupation: "Seamstress",
    quote:
      "Maria emigrated to America in 1912, bringing with her the family's traditional embroidery patterns.",
    avatarBg: "bg-green-500",
    initials: "JS",
  },
];

const storySections = [
  {
    title: "Italian Roots: The Artisans of Tuscany (34%)",
    paragraphs: [
      "The largest portion of your heritage traces back to Tuscany, Italy, where the Rossi family practiced their craft as seamstresses and artisans in Florence for generations. Your great-great-grandmother Maria Rossi was born in 1892 in the hilltop village of Fiesole, overlooking the Renaissance splendor of Florence. The Rossi family was known throughout the region for their intricate embroidery work, patterns passed down through generations of skilled hands.",
      "In 1912, at the age of 20, Maria made the difficult decision to emigrate to America. She carried with her a small trunk containing the family's traditional embroidery patterns, precious samples of her work, and a photograph of the Florence cathedral. This journey across the Atlantic was common for many Italians of that era, seeking opportunity in the New World while carrying their heritage in their hearts.",
    ],
  },
  {
    title: "Irish Heritage: The O'Connor Legacy (28%)",
    paragraphs: [
      "Your Irish roots run deep in County Cork, where the O'Connor family farmed the green hills for generations. James O'Connor, born in 1885, grew up during a challenging period in Irish history. The lingering effects of the Great Famine and ongoing economic hardship pushed many Irish families to seek new beginnings abroad.",
      "James left Ireland as a young man, likely departing from the port of Cobh, known then as Queenstown. Like millions of Irish emigrants, he arrived in America with little more than his determination and the strength of his character. He settled in Boston, working as a dockworker and later establishing a small grocery business that served the Irish community for decades.",
    ],
  },
  {
    title: "Scottish Ancestry: Edinburgh's Scholars (22%)",
    paragraphs: [
      "The Mitchell family of Edinburgh represents a unique thread in your heritage—educated, urban Scots who valued learning and culture. Sarah Mitchell, born in 1901, was one of the first women in her family to attend university, studying literature at the prestigious University of Edinburgh during the Edwardian era.",
      "Sarah's education was unusual for women of her time, reflecting the Mitchell family's progressive values. She became a teacher, passing on her love of literature and learning to generations of students. The Mitchell family maintained connections to Scotland's rich literary tradition and clan heritage, preserving stories and records that now illuminate your ancestral path.",
    ],
  },
  {
    title: "German Heritage: Bavarian Craftsmen (16%)",
    paragraphs: [
      "Your German ancestry stems from Bavaria, where the Mueller family practiced carpentry and woodworking for generations. Hans Mueller, born in 1898, was a master craftsman who learned the trade from his father and grandfather. The Mueller family was part of a long tradition of Alpine craftsmen, creating furniture and architectural elements that combined functionality with artistic beauty.",
      "Hans emigrated in 1923, during the difficult post-World War I period when economic instability affected much of Germany. He brought his skills to America, where his craftsmanship was highly valued. The tools he carried with him, some handmade by his father, became family heirlooms passed down through generations.",
    ],
  },
  {
    title: "A Convergence of Cultures",
    paragraphs: [
      "These four distinct cultural streams—Italian artistry, Irish resilience, Scottish scholarship, and German craftsmanship—converged in America to create your unique heritage. Each ancestor brought their own traditions, values, and skills, contributing to the rich tapestry of your family history. Their courage to leave familiar shores, their determination to build new lives, and their commitment to preserving their cultural identity have shaped who you are today.",
    ],
  },
];

function StoryContent() {
  return (
    <Card className="mt-5 bg-white rounded-xl">
      <CardContent className="p-6 sm:p-8">
        <h2 className="font-merriweather text-xl font-bold text-stone-800 mb-4">
          The Story of Your Heritage
        </h2>
        <p className="text-[13.5px] leading-relaxed text-stone-600 mb-5">
          Your ancestral journey is a tapestry woven across four remarkable
          regions of Europe, spanning over 150 years of migration, perseverance,
          and cultural heritage. From the rolling hills of Tuscany to the rugged
          coasts of Ireland, from the scholarly streets of Edinburgh to the
          Alpine villages of Bavaria, your ancestors carved out lives of meaning
          and left a legacy that lives on in you.
        </p>

        {storySections.map((section, i) => (
          <div key={i} className="mb-5 last:mb-0">
            <h3 className="font-merriweather text-[15px] font-bold text-stone-800 mb-2">
              {section.title}
            </h3>
            {section.paragraphs.map((p, j) => (
              <p
                key={j}
                className="text-[13.5px] leading-relaxed text-stone-600 mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function TimelineContent() {
  const events = [
    { year: "1885", event: "James O'Connor born in County Cork, Ireland" },
    { year: "1892", event: "Maria Rossi born in Fiesole, Florence, Italy" },
    { year: "1898", event: "Hans Mueller born in Bavaria, Germany" },
    { year: "1901", event: "Sarah Mitchell born in Edinburgh, Scotland" },
    {
      year: "1912",
      event: "Maria Rossi emigrates to America, carrying embroidery patterns",
    },
    {
      year: "1920s",
      event: "James O'Connor establishes grocery business in Boston",
    },
    { year: "1923", event: "Hans Mueller emigrates from Germany to America" },
  ];
  return (
    <Card className="mt-5 bg-white rounded-xl">
      <CardContent className="p-6 sm:p-8">
        <h2 className="font-merriweather text-xl font-bold text-stone-800 mb-6">
          Ancestral Timeline
        </h2>
        <div className="relative pl-10">
          <div className="absolute left-3.5 top-0 bottom-0 w-px bg-amber-200" />
          {events.map((item, i) => (
            <div key={i} className="relative mb-6 last:mb-0">
              <div className="absolute -left-6 top-1 w-3 h-3 rounded-full border-2 border-amber-500 bg-white" />
              <p className="font-serif font-bold text-amber-700 text-sm">
                {item.year}
              </p>
              <p className="text-[13.5px] text-stone-600 mt-0.5">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function GenealogyNote() {
  return (
    <div className="rounded-xl p-6 mt-5" style={{ backgroundColor: "#F9F7F2" }}>
      <div className="flex gap-3 items-start">
        <div
          className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
          style={{ backgroundColor: "#C5A065" }}>
          <BadgeCheck color="white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-merriweather text-black font-bold text-xl mb-2">
            Genealogist&apos;s Note
          </p>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#4A5565" }}>
            your genetic ancestry beautifully mirrors the documented historical
            records we&apos;ve uncovered. The strong Eastern European component
            aligns perfectly with the Kowalski family line traced back to the
            Krakow region, while the Irish ancestry corresponds to the
            O&apos;Brien lineage from County. The small Germanic and
            Scandinavian percentages likely reflect historical migrations and
            the complex population movements across Europe over millennia.&quot;
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
              style={{ backgroundColor: "#5A6B4A", color: "#D4B86A" }}>
              S
            </div>
            <div>
              <p
                className="text-base font-semibold"
                style={{ color: "#4A4A4A" }}>
                Dr. Sarah Mitchell
              </p>
              <p className="text-base" style={{ color: "#4A4A4A" }}>
                senior geologist • European Ancestry Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeritageReportContent() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #FAF7F2 0%, #FFFFFF 100%)",
      }}>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Header ── */}
        <header>
          <div className="flex items-center justify-between flex-wrap gap-3">
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={"/images/my-heritage.svg"}
                  alt="heritage"
                  width={130}
                  height={130}
                  priority
                  className="rounded-xl object-cover"
                />
              </div>
              <div>
                <h1 className="font-merriweather font-semibold text-[36px] leading-tight">
                  Your Ancestral Journey
                </h1>
                <p className="text-[20px] text-[#4A5565] mt-0.5">
                  Heritage Story ID: 0000001
                </p>
                <p className="text-[20px] text-[#4A5565]">
                  Name: MD Abdul Aziz Reza
                </p>
              </div>
            </div>
            {/* Right */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-14 w-14 bg-[#FFEFDF] border-none">
                <Share2 className="h-5! w-5! text-[#C5A065]" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-14 w-14 bg-[#FFEFDF] border-none">
                <Trash2 className="h-5! w-5!  text-[#FF4B4B]" />
              </Button>
              <Button
                size="sm"
                className="h-14 px-6! gap-1.5 font-semibold text-white text-sm"
                style={{ backgroundColor: "#C5A065" }}>
                <Download className="h-5! w-5!" />
                Download
              </Button>
            </div>
          </div>
        </header>

        <div>
          {/* ── Stats ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {stats.map((stat, i) => (
              <Card
                key={i}
                className="bg-white rounded-xl"
                style={{ boxShadow: " 0px 4px 6px 0px #0000001A" }}>
                <CardContent className="p-8 text-center">
                  <p
                    className="font-bold text-[36px] leading-none mb-1.5"
                    style={{ color: "#C9A961" }}>
                    {stat.value}
                  </p>
                  <p className="text-base text-stone-500">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ── Tabs ── */}
          <Tabs defaultValue="story" className="mt-6">
            <TabsList className="bg-transparent border-b border-stone-200 rounded-none w-fit justify-start h-auto p-0 gap-0 mb-0">
              <TabsTrigger
                value="story"
                className="
      flex items-center gap-1.5 rounded-none px-5 py-2.5
      text-stone-500 text-sm font-semibold font-sans
      border-0 border-b-2 border-transparent
      shadow-none! bg-transparent
      data-[state=active]:border-b-[#C5A065]
      data-[state=active]:text-amber-700
      data-[state=active]:bg-transparent
      data-[state=active]:shadow-none
      hover:text-stone-700
      focus-visible:ring-0! focus-visible:outline-none!
    ">
                <BookOpen className="h-3.5 w-3.5" />
                Your Story
              </TabsTrigger>

              <TabsTrigger
                value="timeline"
                className="
      flex items-center gap-1.5 rounded-none px-5 py-2.5
      text-stone-500 text-sm font-semibold font-sans
      border-0 border-b-2 border-transparent
      shadow-none! bg-transparent
      data-[state=active]:border-b-[#C5A065]
      data-[state=active]:text-amber-700
      data-[state=active]:bg-transparent
      data-[state=active]:shadow-none
      hover:text-stone-700
      focus-visible:ring-0! focus-visible:outline-none!
    ">
                <Clock className="h-3.5 w-3.5" />
                Timeline
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="mt-0">
              <StoryContent />
              <GenealogyNote />
            </TabsContent>

            <TabsContent value="timeline" className="mt-0">
              <TimelineContent />
            </TabsContent>
          </Tabs>
        </div>

        {/* ── Notable Ancestors ── */}
        <section className="mt-8 pb-12" style={{ backgroundColor: "#2C3220" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
            <h2
              className="font-serif font-bold text-xl mb-5"
              style={{ color: "#D4B86A" }}>
              Your Notable Ancestors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ancestors.map((a, i) => (
                <Card
                  key={i}
                  className="bg-white border border-stone-200 rounded-xl">
                  <CardContent className="p-5">
                    {/* Avatar + name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full ${a.avatarBg} flex items-center justify-center font-bold text-white text-base flex-shrink-0`}>
                        {a.initials}
                      </div>
                      <div>
                        <p className="font-serif font-bold text-[15px] text-stone-800">
                          {a.name}
                        </p>
                        <p className="text-xs text-stone-400 mt-0.5">
                          {a.years}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-1 mb-3">
                      <p className="text-xs text-stone-600">
                        <span className="text-stone-400 font-medium">
                          Born:{" "}
                        </span>
                        {a.born}
                      </p>
                      <p className="text-xs text-stone-600">
                        <span className="text-stone-400 font-medium">
                          Occupation:{" "}
                        </span>
                        {a.occupation}
                      </p>
                    </div>

                    <Separator className="mb-3" />

                    <p className="text-xs text-stone-500 italic leading-relaxed">
                      &ldquo;{a.quote}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
