let elementNum = 0;

function getThisCampaign (tp) {
    const thisFolder = tp.file.folder(false)
    return thisFolder
}

function getElementInArray (tp) {
    let campaign = getThisCampaign(tp);
    let calendarArr = app.plugins.plugins["fantasy-calendar"].data.calendars;
    let calendarArrLength = calendarArr.length;
    for (i = 0; i < calendarArrLength; i++) {
        if (calendarArr[i].name == campaign) {
            elementNum = i;
            return elementNum;
        }
    }
    return -1;
}

function getThisDate (tp) {
    let year = 0;
    let month = 0;
    let day = 0;
    if (getElementInArray(tp) != -1) {
        day = JSON.stringify(app.plugins.plugins["fantasy-calendar"].data.calendars[getElementInArray(tp)].current.day);
        month = JSON.stringify(parseInt(app.plugins.plugins["fantasy-calendar"].data.calendars[getElementInArray(tp)].current.month)+1);
        year = JSON.stringify(app.plugins.plugins["fantasy-calendar"].data.calendars[getElementInArray(tp)].current.year);
    }
    return [year, month, day];
}
module.exports = getThisDate;