interface translatedName {
    language_name: string,
    name: string,
}

export interface iSura {
    id: number,
    revelation_place: "makkah" | "madinah",
    revelation_order: number,
    bismillah_pre: boolean,
    name_simple: string,
    name_complex: string,
    name: string,
    name_arabic: string,
    verses_count: number,
    pages: number[],
    translated_name: translatedName,
}
