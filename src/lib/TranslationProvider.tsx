"use client"

import { createContext } from "react"

export const TContext = createContext<any>({});

export default function TranslationProvider({ t, children }: { t: any, children: React.ReactNode }) {
    return (
        <TContext.Provider value={t}>
            {children}
        </TContext.Provider>
    )
}