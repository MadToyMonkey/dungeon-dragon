function getThisWorld (tp) {
    const thisFolder = tp.file.folder(false)
    if (thisFolder == "Name of folder"){
        return "Name of world";
    }
    return thisFolder;
}
module.exports = getThisWorld;