type Mods = Record<string, boolean | string>

export function customClasses(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter((value) => Boolean(value[1]))
            .map(([className]) => className),
        ...additional.filter(Boolean),
    ]
        .join(' ');
}
