const {StatusCodes} = require("http-status-codes");
const db = require("../../database.js");

const getAllfeatures = async () => {
    const sql = `SELECT id,title,description,status FROM features`;

    const [rows] = await db.execute(sql);

    return rows;
}

module.exports = {getAllfeatures};