"use client";

import { usePathname, useRouter } from "next/navigation";

interface CardProps {
  header: string;
  title: string;
  content: string;
  href?: string;
  lastUpdated?: string;
}

function Card(props: CardProps) {
  const { content, header, lastUpdated, title, href } = props;

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 ${
        href ? "hover:cursor-pointer" : ""
      }`}
      {...(href ? { onClick: () => router.push(`${pathname}/${href}`) } : {})}
    >
      <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
        <span className="text-sm font-medium text-slate-600">{header}</span>
      </div>

      <div className="p-4">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h5>
        <p className="text-slate-600 leading-normal font-light">{content}</p>
      </div>
      {lastUpdated ? (
        <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
          <span className="text-sm text-slate-600 font-medium">
            Last updated: {lastUpdated}
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
