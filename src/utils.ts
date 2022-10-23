export const shuffleArary = (arr: any[]): any[] => {
    return [...arr].sort(() => Math.random() - 0.5)
}