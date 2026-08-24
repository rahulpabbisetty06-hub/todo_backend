const db = require("../../database.js");

const getFeaturesById = async (fid) => {
    const sql = `SELECT id,title,description,status FROM features WHERE id=? LIMIT 1`;
    const [rows] = await db.execute(sql,[fid]);

    return[rows];
}

module.exports = {getFeaturesById};