/**
 * Render time in MS to a pretty format
 * @param time
 */
export const renderTime = (time: number): string => {

    const ms = time.toString().slice(-3).padStart(3, '0');
    const seconds = Math.floor((time / 1000) % 60)
        .toString()
        .padStart(2, '0');
    const minutes = Math.floor((time / 1000 / 60) % 60)
        .toString()
        .padStart(2, '0');
    const hours = Math.floor((time / 1000 / 60 / 60) % 60)
        .toString()
        .padStart(2, '0');


    return `${hours}:${minutes}:${seconds}.${ms}`
}