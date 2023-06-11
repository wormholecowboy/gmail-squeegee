import 'google-apps-script';

let ss = SpreadsheetApp.getActiveSpreadsheet()
let unsubSheet = ss.getSheetByName('Unsubscribe')



function onOpen() {
    SpreadsheetApp.getUi().createMenu('Gmail Squeegee')
        .addItem('Start Trigger', 'createTrigger')
        .addItem('Run Manual', 'autoArchive')
        .addToUi();
    showUnsubscribe();
}

function createTrigger() {
    ScriptApp.newTrigger('autoArchive')
        .timeBased()
        .everyDays(1)
        .atHour(23)
        .create()
}

function showUnsubscribe() {
    let hasUnsubscribe = GmailApp.search(`in:inbox unsubscribe`)
    let unsubArray = []
    hasUnsubscribe.forEach(row => {
        let subject = row.getFirstMessageSubject()
        unsubArray.push([subject]);
    }
    )
    unsubSheet.getRange(1, 1, unsubArray.length, 1).setValues(unsubArray)
}

