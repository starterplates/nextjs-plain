import { getTranslations } from "@/lib/i18n"

export default async function Page() {
    const t = await getTranslations("welcome")
    return (
        <div>{t.welcome}</div>
    )
}