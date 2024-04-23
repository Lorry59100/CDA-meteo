export function currentDatetime() {
    const d = new Date();
    return `${d.getHours()} : ${d.getMinutes()}`
}