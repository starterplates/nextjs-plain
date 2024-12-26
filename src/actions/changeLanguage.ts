"use server"

import { AVAILABLE_LANGUAGES } from "@/lib/variables"
import { cookies } from "next/headers";

export default async function changeLanguage(lang: string) {
    if (!AVAILABLE_LANGUAGES.includes(lang)) return;
    const readyCookies = await cookies();
    readyCookies.set("lang", lang);
    return lang;
}