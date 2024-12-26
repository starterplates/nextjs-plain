"use client"
import { useLayoutEffect, useState } from "react";
import getCookie from "../actions/getCookie";

export default function useTranslation(file: string): any {
    const [translations, setTranslations] = useState<any>(null);
    useLayoutEffect(() => {
        (async () => {
            const lang = await getCookie("lang");
            try {
                const translations = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/locales/${lang}/${file}.json`);
                setTranslations(await translations.json());
            } catch (error) {
                console.error(`Error loading translations for locale: ${lang}, file: ${file}.json`);
                return {};
            }
        })()
    }, [])

    return translations;
}