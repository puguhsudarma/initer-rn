import { format } from 'date-fns';

export const getRangedDatesString = (dates: number[]) => {
    if (dates.length === 1) {
        return `${dates[0]}`;
    }
    return `${dates[0]}-${dates[dates.length - 1]}`;
};

export const getHumanReadableDatesInMonth = (monthGroupedDates: string[]) => {
    if (monthGroupedDates.length === 1) {
        const date = new Date(monthGroupedDates[0]);
        return `${date.getDate()} ${getMonthName(date.getMonth())}`;
    }

    const month = new Date(monthGroupedDates[0]).getMonth();
    const dates = monthGroupedDates.map((item: string) => {
        return new Date(item).getDate();
    });

    const splitedText = [];
    let group = [dates[0]];
    for (let i = 1; i < dates.length; i++) {
        const prev = dates[i - 1];
        const now = dates[i];
        if (prev + 1 === now) {
            group.push(now);
        } else {
            splitedText.push(getRangedDatesString(group));
            group = [now];
        }
    }
    splitedText.push(getRangedDatesString(group));
    return splitedText.join(', ') + ' ' + getMonthName(month);
};

export const getMonthName = (month: number) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
};

export const isInSameMonth = (now: string, then: string) => {
    const dNow = new Date(now);
    const dThen = new Date(then);

    return dNow.getMonth() === dThen.getMonth() && dNow.getFullYear() === dThen.getFullYear();
};

export const getHumanReadableDates = (dates: string[]) => {
    const sortedDates = [...dates];
    sortedDates.sort();

    if (sortedDates.length === 0) {
        return '';
    }
    if (sortedDates.length === 1) {
        return `${getHumanReadableDatesInMonth(sortedDates)} ${new Date(sortedDates[0]).getFullYear()}`;
    }

    const splitedText = [];
    let monthGroupedDates = [sortedDates[0]];
    for (let i = 1; i < sortedDates.length; i++) {
        const prev = sortedDates[i - 1];
        const now = sortedDates[i];

        if (isInSameMonth(prev, now)) {
            monthGroupedDates.push(now);
        } else {
            splitedText.push(getHumanReadableDatesInMonth(monthGroupedDates));
            monthGroupedDates = [now];
        }
    }
    splitedText.push(getHumanReadableDatesInMonth(monthGroupedDates));
    return `${splitedText.join(', ')} ${new Date(sortedDates[sortedDates.length - 1]).getFullYear()}`;
};

export const getHumanReadableTime = (time: string) => {
    try {
        try {
            const timedDate = new Date(time);
            return format(timedDate, 'hh:mma').toLowerCase();
        } catch (error) {
            const timedDate = new Date(`${new Date().toDateString()} ${time}`);
            return format(timedDate, 'hh:mma').toLowerCase();
        }
    } catch (error) {
        return time;
    }
};

export const getSimpleHumanReadableDate = (date: string) => {
    try {
        const dated = new Date(date);
        return format(dated, 'dd MMM yyyy');
    } catch (error) {
        return date;
    }
};

export const getSimpleHumanReadableDateTime = (date: string) => {
    const readedDate = getSimpleHumanReadableDate(date);
    const readedTime = getHumanReadableTime(date);

    return `${readedDate}, ${readedTime}`.toUpperCase();
};

export const dateConstruct = (date: string): Date => {
    try {
        return new Date(date.replace(' ', 'T'));
    } catch (error) {
        return new Date();
    }
};
