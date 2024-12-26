import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AVAILABLE_LANGUAGES, FALLBACK_LANGUAGE } from './lib/variables';

function formatLang(lang: string | null) {
    if (!lang) return null;
    return lang.split("-")[0];
}

export function middleware(request: NextRequest) {
    let lang = request.cookies.get("lang")?.value || formatLang(request.headers.get("accept-language")) || FALLBACK_LANGUAGE;

    if (!AVAILABLE_LANGUAGES.includes(lang)) lang = FALLBACK_LANGUAGE;

    const response = NextResponse.next();
    response.cookies.set("lang", lang);

    return response;
}