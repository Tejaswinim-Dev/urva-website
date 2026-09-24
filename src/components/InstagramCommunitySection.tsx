"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Heart, MessageCircle, X, MapPin } from "lucide-react";
import { InstagramIcon } from "./Icons";

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  tag: string;
  location: string;
}

export default function InstagramCommunitySection() {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  const posts: InstagramPost[] = [
    {
      id: "post-1",
      image: "/images/artisan-hands-detail.jpg",
      caption:
        "Every plate tells the story of two hands. In the villages of Mayurbhanj, Kamala-ji continues an ancient tradition of stitching wild siali leaves with spun dried grass. Zero chemicals. 100% soil to soil. #UrvaaLife #RuralIndia #RootedInNature",
      likes: 642,
      comments: 38,
      tag: "Craftsmanship",
      location: "Mayurbhanj, Odisha",
    },
    {
      id: "post-2",
      image: "/images/forest-foraging.jpg",
      caption:
        "High up in the sal canopy at dawn. Rameshwar and fellow indigenous honey harvesters collect wild nectar using non-destructive, smoke-free practices. The hive remains healthy and buzzing for generations to come. #WildHoney #CustodiansOfForest #Urvaa",
      likes: 819,
      comments: 54,
      tag: "Wild Honey",
      location: "Satpura Jungle Biosphere",
    },
    {
      id: "post-3",
      image: "/images/tableware-areca.jpg",
      caption:
        "A quiet lunch table styled with our 12-inch Areca Palm leaf plates. Sturdy enough for hot curries, beautiful enough for wedding banquets, and ready to return to your garden compost in 60-90 days. #SustainableDining #ZeroPlastic",
      likes: 954,
      comments: 67,
      tag: "Tableware",
      location: "Slow Living Sanctuary",
    },
    {
      id: "post-4",
      image: "/images/craftsmanship-artisans.jpg",
      caption:
        "Morning sunshine in the village courtyard. 14 women from the local self-help group sharing stories while shaping fresh fallen palm fronds into 90 GSM dining ware. Dignified rural livelihood at its source. #WomenOfUrvaa #FairTrade",
      likes: 1120,
      comments: 89,
      tag: "Community",
      location: "Shivamogga, Karnataka",
    },
    {
      id: "post-5",
      image: "/images/millets-turmeric.jpg",
      caption:
        "Sun-cured turmeric roots and ancient millets from rain-fed smallholders. Deep earth colors that nourish body and soul. No chemical fertilizers, no genetic modifications. #AncientGrains #AyurvedicLiving",
      likes: 728,
      comments: 42,
      tag: "Earth Harvest",
      location: "Deccan Plateau",
    },
    {
      id: "post-6",
      image: "/images/community-lifestyle.jpg",
      caption:
        "Sunday feast under the banyan tree. Good food tastes even better when served on dishes made by nature, with people you love. #LifeAtUrvaa #MindfulLiving #FromRootsToTable",
      likes: 1435,
      comments: 112,
      tag: "Living",
      location: "Heritage Village Sanctuary",
    },
  ];

  return (
    <section
      id="community"
      className="py-24 sm:py-36 lg:py-44 bg-[#FAF7F2] text-[#1C1E1B] relative overflow-hidden border-t border-[#1C1E1B]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-fade-up">
          <div>
            <div className="flex items-center gap-3 mb-3 reveal-fade-up reveal-delay-75">
              <span className="w-8 h-[1px] bg-[#6F8369]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#6F8369] font-semibold">
                Documentary Community Feed
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#101F17] tracking-tight reveal-fade-up reveal-delay-150">
              Life at <span className="italic font-normal">Urvaa</span>
            </h2>
          </div>

          <a
            href="https://instagram.com/urvaa_in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#101F17] text-[#FAF7F2] hover:bg-[#1E3528] text-xs uppercase font-sans tracking-[0.25em] font-semibold rounded-full transition-all duration-300 self-start md:self-auto cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] group reveal-fade-up reveal-delay-200"
          >
            <InstagramIcon size={14} className="text-[#DF9F52]" />
            <span>Follow @urvaa_in</span>
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Visual Instagram Documentary Grid with Curved Frames */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className={`relative aspect-square overflow-hidden rounded-2xl bg-[#EAE4D7] group cursor-pointer border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 reveal-fade-up ${
                idx === 0
                  ? "reveal-delay-100"
                  : idx === 1
                  ? "reveal-delay-150"
                  : idx === 2
                  ? "reveal-delay-200"
                  : idx === 3
                  ? "reveal-delay-250"
                  : idx === 4
                  ? "reveal-delay-300"
                  : "reveal-delay-350"
              }`}
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              {/* Dark hover overlay with Instagram stats */}
              <div className="absolute inset-0 bg-[#0A140E]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-[#FAF7F2]">
                <InstagramIcon size={18} className="text-[#DF9F52] mb-2" />
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#DFE5DA]">
                  {post.tag}
                </span>
                <div className="flex items-center gap-3 text-xs mt-2 font-mono">
                  <span className="flex items-center gap-1">
                    <Heart size={12} fill="#DF9F52" stroke="#DF9F52" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} />
                    {post.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center reveal-fade-up reveal-delay-300">
          <p className="text-xs text-[#5E625A] font-serif italic">
            Join 12,000+ conscious individuals embracing rural traditions, ethical wild honeys, and plastic-free tables.
          </p>
        </div>
      </div>

      {/* Instagram Story Post Lightbox Modal in Liquid Glass */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedPost(null)}
          />

          <div className="relative liquid-glass rounded-3xl text-[#1C1E1B] max-w-2xl w-full border border-white/80 shadow-2xl overflow-hidden z-10 flex flex-col sm:flex-row">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3.5 right-3.5 z-20 w-8 h-8 flex items-center justify-center liquid-glass rounded-full text-[#1C1E1B] hover:bg-white border border-white/60 shadow-md cursor-pointer transition-colors"
              aria-label="Close post"
            >
              <X size={15} />
            </button>

            <div className="relative w-full sm:w-1/2 aspect-square sm:aspect-auto bg-[#0A140E]">
              <Image
                src={selectedPost.image}
                alt="Instagram post visual"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#101F17]">
                  <div className="w-7 h-7 rounded-full bg-[#101F17] text-[#FAF7F2] flex items-center justify-center text-[10px] font-serif font-bold">
                    U
                  </div>
                  <div>
                    <span className="block font-sans">urvaa_in</span>
                    <span className="text-[10px] text-[#6F8369] font-normal flex items-center gap-1">
                      <MapPin size={9} />
                      {selectedPost.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#3D403A] leading-relaxed pt-2 border-t border-[#1C1E1B]/10">
                  {selectedPost.caption}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C1E1B]/10 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-[#5E625A]">
                  <span className="flex items-center gap-1 font-mono text-[#101F17]">
                    <Heart size={14} className="text-[#C68A4C]" fill="#C68A4C" />
                    {selectedPost.likes}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <MessageCircle size={14} />
                    {selectedPost.comments}
                  </span>
                </div>

                <a
                  href="https://instagram.com/urvaa_in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-sans uppercase tracking-wider text-[#101F17] hover:text-[#6F8369] font-semibold flex items-center gap-1.5 liquid-glass rounded-full px-4 py-1.5 border border-white/60 hover:bg-white transition-all shadow-sm"
                >
                  <span>Open App</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
