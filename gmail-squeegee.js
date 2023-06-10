import 'google-apps-script';

let ss = SpreadsheetApp.getActiveSpreadsheet()
let unsubSheet = ss.getSheetByName('Unsubscribe')



function onOpen() {
    SpreadsheetApp.getUi().createMenu('Gmail Squeegee')
        .addItem('Start Trigger', 'createTrigger')
        .addItem('Run Manual', 'autoArchive')
        .addToUi()
    showUnsubscribe()
}

function createTrigger() {
    ScriptApp.newTrigger('autoArchive')
        .timeBased()
        .everyDays(1)
        .atHour(23)
        .create()
}

function showUnsubscribe() {
    hasUnsubscribe = GmailApp.search('in:inbox label:' + 'unsubscribe')

}
