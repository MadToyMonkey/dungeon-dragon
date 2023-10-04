function getThisGameNum (tp) {
    let thisCampaign = tp.file.folder(false);
    // console.log(app.plugins.plugins.dataview.api.pages(`"campaigns/${thisCampaign}"`));
    let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"campaigns/${thisCampaign}"`)
        .where(page => {
            if (page.type === 'session') {
                if (page.campaign === thisCampaign) {
                    // console.log('sessionNum: ' + page.sessionNum);
                    return true;
                }
            }
        }).length
    // console.log('numOfGames: ' + numOfGames);
    numOfGames = JSON.stringify(numOfGames+1);
    while (numOfGames.length < 3) {
        numOfGames = "0" + numOfGames;
    }
    // console.log('numOfGames after adding: ' + numOfGames);
    return numOfGames;
}
module.exports = getThisGameNum;