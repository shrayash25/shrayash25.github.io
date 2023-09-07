function updateDate() {
    let date = new Date();
    let day = date.getDay(), month = date.getMonth(), year = date.getFullYear(), dateNum = date.getDate()

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
    const ids = ["day", "month", "date", "year"]
    var values = [weekdays[day], months[month], dateNum, year]

    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initDate() {
    updateDate()
    window.setInterval("updateDate()", 1)
}

