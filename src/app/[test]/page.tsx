import { getTranslations } from "@/lib/i18n"
import TestComponent from "./testComponent"
import TranslationProvider from "@/lib/TranslationProvider"

export default async function Page() {
    const t = await getTranslations("test")

    return (
        <TranslationProvider t={t}>
            <div>{t.test}<br /><TestComponent /></div>
        </TranslationProvider>

    )
}