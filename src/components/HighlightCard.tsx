import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type HighlightCardProps = {
  title: string;
  desc: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  linkText: string;
};

export function HighlightCard({ title, desc, href, imgSrc, imgAlt, linkText }: HighlightCardProps) {
  return (
    <article className="flex flex-col">
      <div className="overflow-hidden rounded-lg">
        <Link href={href}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={800}
            height={500}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
      <div className="mt-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-neutral-600 flex-1">{desc}</p>
        <Link href={href} className="mt-4 inline-flex items-center gap-2 text-sky-700 hover:underline font-medium">
          {linkText} <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}