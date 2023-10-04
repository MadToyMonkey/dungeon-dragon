function getNumOfGames(campaign) {
	let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"campaigns/${campaign}"`)
        .where(page => {
            if (page.type === 'session') {
                if (page.campaign === campaign) {
                    return true;
                }
            }
        }).length
	return numOfGames;
}

function getCampaignList () {
    let dv = app.plugins.plugins.dataview.api;
    let campaigns = dv.pages('"campaigns"').where(b => b.type === "world").sort(p => p.status);
    console.log(campaigns);
    let results = [
        `|Campaign|System|Sessions|Role|Status|
        |---|---|---|---|---|
        `,
    ];
    campaigns.forEach(campaign => {
        let numOfGames = getNumOfGames(campaign.campaign);
        results += `|[[${campaign.file.path}\\|${campaign.campaign}]]| ${campaign.system}|${numOfGames}|${campaign.role}|${campaign.status}|\n`
    });
    return results;
};
module.exports = getCampaignList;