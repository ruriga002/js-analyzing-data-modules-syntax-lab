require(`datejs`);

function combineUsers(...args) {
    let combinedObject = {
        users: []
    };
    for (let userArray of args) {
        combinedObject.users.push(...userArray);
    }
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");
    return combinedObject;

__};
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};