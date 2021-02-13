/**
 * Generate a random date
 * 
 * 
 * @param {{
 *  since: Date, 
 *  until: Date
 * }} options
 * 
 * @return {Date} 
 */
export function randomDate({since, until}) {
    const sinceDate = (since instanceof Date) ? since : new Date(0);
    const untilDate = (until instanceof Date) ? until : new Date();

    return new Date(
        Math.ceil(
            sinceDate.getTime() +   
            Math.random() * (untilDate.getTime() - sinceDate.getTime())
        )
    );
}