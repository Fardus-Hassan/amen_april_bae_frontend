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
    <Card className="mt-4 sm:mt-5 bg-white rounded-xl">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h2 className="font-merriweather text-lg sm:text-xl font-bold text-stone-800 mb-3 sm:mb-4">
          The Story of Your Heritage
        </h2>
        <p className="text-xs sm:text-[13.5px] leading-relaxed text-stone-600 mb-4 sm:mb-5">
          Your ancestral journey is a tapestry woven across four remarkable
          regions of Europe, spanning over 150 years of migration, perseverance,
          and cultural heritage. From the rolling hills of Tuscany to the rugged
          coasts of Ireland, from the scholarly streets of Edinburgh to the
          Alpine villages of Bavaria, your ancestors carved out lives of meaning
          and left a legacy that lives on in you.
        </p>

        {storySections.map((section, i) => (
          <div key={i} className="mb-4 sm:mb-5 last:mb-0">
            <h3 className="font-merriweather text-sm sm:text-[15px] font-bold text-stone-800 mb-1.5 sm:mb-2">
              {section.title}
            </h3>
            {section.paragraphs.map((p, j) => (
              <p
                key={j}
                className="text-xs sm:text-[13.5px] leading-relaxed text-stone-600 mb-2 sm:mb-3 last:mb-0">
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
    {
      year: "1845",
      title: "Irish Potato Famine Begins",
      type: "Historical" as const,
      description:
        "The Great Famine devastates Ireland, affecting millions including your ancestors in County Cork.",
    },
    {
      year: "1885",
      title: "James O'Connor Born",
      type: "Ancestor" as const,
      description:
        "Born in County Cork during a period of emigration and hardship.",
    },
    {
      year: "1892",
      title: "Maria Rossi Born",
      type: "Ancestor" as const,
      description: "Born in Florence to a family of artisans and craftspeople.",
    },
    {
      year: "1901",
      title: "Irish Potato Famine Begins",
      type: "Historical" as const,
      description:
        "The Great Famine devastates Ireland, affecting millions including your ancestors in County Cork.",
    },
    {
      year: "1912",
      title: "Irish Potato Famine Begins",
      type: "Historical" as const,
      description:
        "The Great Famine devastates Ireland, affecting millions including your ancestors in County Cork.",
    },
    {
      year: "1845",
      title: "Irish Potato Famine Begins",
      type: "Historical" as const,
      description:
        "The Great Famine devastates Ireland, affecting millions including your ancestors in County Cork.",
    },
    {
      year: "1845",
      title: "Irish Potato Famine Begins",
      type: "Historical" as const,
      description:
        "The Great Famine devastates Ireland, affecting millions including your ancestors in County Cork.",
    },
  ];

  const getTypeStyles = (type: "Historical" | "Ancestor" | "Migration") => {
    switch (type) {
      case "Historical":
        return {
          badge: "bg-[#FFF3E6] text-[#C5A065]",
          dot: "bg-[#C5A065]",
        };
      case "Ancestor":
        return {
          badge: "bg-[#E6F0FF] text-[#1E3A5F]",
          dot: "bg-[#1E3A5F]",
        };
      case "Migration":
        return {
          badge: "bg-[#FFF8E6] text-[#B8860B]",
          dot: "bg-[#B8860B]",
        };
      default:
        return {
          badge: "bg-gray-100 text-gray-600",
          dot: "bg-gray-400",
        };
    }
  };

  return (
    <Card className="mt-4 sm:mt-5 bg-white rounded-xl">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h2 className="font-merriweather text-lg sm:text-xl lg:text-2xl font-bold text-stone-800 mb-1 sm:mb-2">
          Your Family Timeline
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 mb-5 sm:mb-8">
          Follow your family&apos;s journey through time, from ancestral births
          to migrations and major historical events that shaped their lives.
          Click on any event to see more details.
        </p>

        <div className="relative">
          {events.map((event, i) => {
            const styles = getTypeStyles(event.type);
            return (
              <div key={i} className="flex gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 last:mb-0">
                <div className="w-10 sm:w-12 shrink-0 text-right">
                  <span className="font-bold text-[#1E3A5F] text-sm sm:text-base">
                    {event.year}
                  </span>
                </div>

                <div className="relative flex flex-col items-center">
                  <div
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${styles.dot} z-10 mt-1 sm:mt-1.5`}
                  />
                  {i < events.length - 1 && (
                    <div className="w-px flex-1 bg-[#E5E7EB] absolute top-3 sm:top-4 bottom-0" />
                  )}
                </div>

                <div className="flex-1 pb-1 sm:pb-2 min-w-0">
                  <Card className="border border-stone-200 rounded-lg sm:rounded-xl shadow-sm">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex flex-wrap items-start sm:items-center gap-2 sm:gap-3 mb-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99935 18.3327C14.6017 18.3327 18.3327 14.6017 18.3327 9.99935C18.3327 5.39698 14.6017 1.66602 9.99935 1.66602C5.39698 1.66602 1.66602 5.39698 1.66602 9.99935C1.66602 14.6017 5.39698 18.3327 9.99935 18.3327Z" stroke="#8B7355" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.99935 1.66602C7.85954 3.91281 6.66602 6.89663 6.66602 9.99935C6.66602 13.1021 7.85954 16.0859 9.99935 18.3327C12.1392 16.0859 13.3327 13.1021 13.3327 9.99935C13.3327 6.89663 12.1392 3.91281 9.99935 1.66602Z" stroke="#8B7355" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.66602 10H18.3327" stroke="#8B7355" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h3 className="font-merriweather font-bold text-sm sm:text-base text-stone-800 flex-1 min-w-0">
                          {event.title}
                        </h3>
                        <span
                          className={`text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded shrink-0 ${styles.badge}`}>
                          {event.type}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-500 leading-relaxed ml-0 sm:ml-10 lg:ml-11">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-stone-200">
          <p className="font-semibold text-stone-800 text-sm sm:text-base mb-2 sm:mb-3">Timeline Legend</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#1E3A5F]" />
              <span className="text-xs sm:text-sm text-stone-500">Ancestor Events</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#B8860B]" />
              <span className="text-xs sm:text-sm text-stone-500">Migration Events</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#C5A065]" />
              <span className="text-xs sm:text-sm text-stone-500">Historical Context</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function GenealogyNote() {
  return (
    <div className="rounded-xl p-4 sm:p-6 mt-4 sm:mt-5" style={{ backgroundColor: "#F9F7F2" }}>
      <div className="flex gap-3 items-start">
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl shrink-0 flex items-center justify-center"
          style={{ backgroundColor: "#C5A065" }}>
          <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5" color="white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-merriweather text-black font-bold text-base sm:text-lg lg:text-xl mb-1.5 sm:mb-2">
            Genealogist&apos;s Note
          </p>
          <p
            className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4"
            style={{ color: "#4A5565" }}>
            your genetic ancestry beautifully mirrors the documented historical
            records we&apos;ve uncovered. The strong Eastern European component
            aligns perfectly with the Kowalski family line traced back to the
            Krakow region, while the Irish ancestry corresponds to the
            O&apos;Brien lineage from County. The small Germanic and
            Scandinavian percentages likely reflect historical migrations and
            the complex population movements across Europe over millennia.&quot;
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0"
              style={{ backgroundColor: "#5A6B4A", color: "#D4B86A" }}>
              S
            </div>
            <div className="min-w-0">
              <p
                className="text-sm sm:text-base font-semibold truncate"
                style={{ color: "#4A4A4A" }}>
                Dr. Sarah Mitchell
              </p>
              <p className="text-xs sm:text-sm truncate" style={{ color: "#4A4A4A" }}>
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
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        {/* ── Header ── */}
        <header>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-3">
            {/* Left */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-xl shrink-0">
                <Image
                  src={"/images/my-heritage.svg"}
                  alt="heritage"
                  width={130}
                  height={130}
                  priority
                  className="rounded-xl object-cover w-20 h-20 sm:w-[100px] sm:h-[100px] lg:w-[130px] lg:h-[130px]"
                />
              </div>
              <div className="min-w-0">
                <h1 className="font-merriweather font-semibold text-xl sm:text-2xl lg:text-[36px] leading-tight">
                  Your Ancestral Journey
                </h1>
                <p className="text-sm sm:text-base lg:text-[20px] text-[#4A5565] mt-0.5 truncate">
                  Heritage Story ID: 0000001
                </p>
                <p className="text-sm sm:text-base lg:text-[20px] text-[#4A5565] truncate">
                  Name: MD Abdul Aziz Reza
                </p>
              </div>
            </div>
            {/* Right */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 bg-[#FFEFDF] border-none">
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#C5A065]" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 bg-[#FFEFDF] border-none">
                <Trash2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#FF4B4B]" />
              </Button>
              <Button
                size="sm"
                className="h-10 sm:h-12 lg:h-14 px-4 sm:px-5 lg:px-6 gap-1.5 font-semibold text-white text-xs sm:text-sm"
                style={{ backgroundColor: "#C5A065" }}>
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="">Download</span>
              </Button>
            </div>
          </div>
        </header>

        <div>
          {/* ── Stats ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-5 sm:mt-6">
            {stats.map((stat, i) => (
              <Card
                key={i}
                className="bg-white rounded-xl"
                style={{ boxShadow: " 0px 4px 6px 0px #0000001A" }}>
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <p
                    className="font-bold text-2xl sm:text-3xl lg:text-[36px] leading-none mb-1 sm:mb-1.5"
                    style={{ color: "#C9A961" }}>
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-stone-500">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ── Tabs ── */}
          <Tabs defaultValue="story" className="mt-5 sm:mt-6">
            <TabsList className="bg-transparent border-b border-stone-200 rounded-none w-full sm:w-fit justify-start h-auto p-0 gap-0 mb-0 overflow-x-auto scrollbar-hide">
              <TabsTrigger
                value="story"
                className="
      flex items-center gap-1 sm:gap-1.5 rounded-none px-3 sm:px-5 py-2 sm:py-2.5
      text-stone-500 text-xs sm:text-sm font-semibold font-sans
      border-0 border-b-2 border-transparent
      shadow-none! bg-transparent
      data-[state=active]:border-b-[#C5A065]
      data-[state=active]:text-amber-700
      data-[state=active]:bg-transparent
      data-[state=active]:shadow-none
      hover:text-stone-700
      focus-visible:ring-0! focus-visible:outline-none!
    ">
                <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Your Story
              </TabsTrigger>

              <TabsTrigger
                value="timeline"
                className="
      flex items-center gap-1 sm:gap-1.5 rounded-none px-3 sm:px-5 py-2 sm:py-2.5
      text-stone-500 text-xs sm:text-sm font-semibold font-sans
      border-0 border-b-2 border-transparent
      shadow-none! bg-transparent
      data-[state=active]:border-b-[#C5A065]
      data-[state=active]:text-amber-700
      data-[state=active]:bg-transparent
      data-[state=active]:shadow-none
      hover:text-stone-700
      focus-visible:ring-0! focus-visible:outline-none!
    ">
                <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
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
        <section className="mt-6 sm:mt-8 pb-8 sm:pb-12">
          <div>
            <h2 className="font-merriweather font-semibold text-xl sm:text-2xl lg:text-[30px] mb-4 sm:mb-5">
              Your Notable Ancestors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {ancestors.map((a, i) => (
                <Card
                  key={i}
                  className="bg-white border border-stone-200 rounded-xl">
                  <CardContent className="p-4 sm:p-5">
                    {/* Avatar + name */}
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${a.avatarBg} flex items-center justify-center font-bold text-white text-sm sm:text-base shrink-0`}>
                        {a.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-serif font-bold text-sm sm:text-[15px] text-stone-800 truncate">
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

                    <p className="text-xs text-stone-500 italic leading-relaxed line-clamp-3">
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
