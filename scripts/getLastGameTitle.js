function lastGameTitle (tp) {
    const thisWorld = tp.file.folder(false);
    const titles = app.plugins.plugins.dataview.api
        .pages(`"campaigns/${thisWorld}"`)
        .where(page => {
            if (page.type === 'session') {
                return true;
            }
        })
        .sort(b => b.sessionNum)
    console.log(titles)
    if (titles.length > 1) {
        const filename = JSON.stringify(titles[titles.length-2].file.path).replace("\"","").replace("\"","").replace(".md","");
        return filename
    } else {
        return "No games found";
    }
    
}
module.exports = lastGameTitle;