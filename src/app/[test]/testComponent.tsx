"use client"
import changeLanguage from "@/actions/changeLanguage";
import { TContext } from "@/lib/TranslationProvider"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react"

export default function TestComponent() {

    const t = useContext(TContext)

    const router = useRouter();
    async function handleClick(lang: string) {
        await changeLanguage(lang);
        router.refresh();
    }
    return (
        <div>
            <Link href={"/test/welcome"}>{t.test}</Link>
            <button onClick={() => handleClick("en")}>English</button>
            <button onClick={() => handleClick("de")}>German</button>
        </div>
    )
}