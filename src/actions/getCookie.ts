"use server";

import { cookies } from "next/headers";

export default async function getCookie(name: string) {
    const readyCookies = await cookies();
    return readyCookies.get(name)?.value;
}