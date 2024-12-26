"use client";

import useTranslation from "@/lib/useTranslation";

export default function Home() {
  const t = useTranslation("common")

  if (!t) return <div>Loading...</div>;

  return <div>{t.welcome}</div>;
}