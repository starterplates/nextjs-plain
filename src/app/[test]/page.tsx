import { getTranslations } from "@/lib/i18n"

export default async function Page() {
    const t = await getTranslations("test")
    return (
        <div>{t.test}</div>
    )
}