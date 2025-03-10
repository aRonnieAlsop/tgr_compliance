// an interface for the week data structure:
interface Week {
    weekNumber: string;
    startDate: string;
    endDate: string;
}

function generateWeeks(): Week[] {
    const startDate = new Date('2024-07-29');
    const endDate = new Date('2025-07-29');
    const weeks: Week[] = [];
    let currentDate = new Date(startDate);
    let weekNum = 1;

    while (currentDate <= endDate) {
        let weekStart = new Date(currentDate);
        let weekEnd = new Date(currentDate);

        // if the date is before Jan 17, '25, use Sunday through Saturday week (a github week):
        if (currentDate < new Date('2025-01-17')) {
            weekEnd.setDate(weekStart.getDate() + 6); // Sunday - Saturday
        } else {
            // from Jan 17 onwards, switch to Monday - Sunday weeks:
            weekStart.setDate(currentDate.getDate() - currentDate.getDay() + 1); // Monday - Sunday 
            weekEnd.setDate(weekStart.getDate() + 6);
        }

        // week data pushed into the weeks array:
        weeks.push({
            weekNumber: `Week ${weekNum}`,
            startDate: weekStart.toLocaleDateString(),
            endDate: weekEnd.toLocaleDateString(),
        });

        // move to the next week ↓
        currentDate.setDate(currentDate.getDate() + 7);
        weekNum++;
    }

    return weeks;
}

export default generateWeeks;