import { cookies } from "next/headers";
import { FALLBACK_LANGUAGE } from "./variables";

export async function getTranslations(file: string) {

    const readyCookies = await cookies();
    const lang = readyCookies.get("lang")?.value || FALLBACK_LANGUAGE;
    file = file.replace(".json", "");
    try {
        const translations = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/locales/${lang}/${file}.json`);
        return await translations.json();
    } catch (error) {
        console.error(`Error loading translations for locale: ${lang}, file: ${file}.json`);
        return {};
    }
}
