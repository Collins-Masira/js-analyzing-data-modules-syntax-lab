function combineUsers(...arrays) {
    const mergedUsers = [].concat(...arrays);

    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

    return {
        users: mergedUsers,
        merge_date: formattedDate
    };
}

module.exports = {
    combineUsers
};