const db = require("../../database.js");

const getSecurityQuestion = async (username) => {
     const sql = `SELECT security_question from users
                  WHERE username=? LIMIT 1`;
     const [rows] = await db.execute(sql,[username]);

     return rows[0];
}

module.exports = { getSecurityQuestion };