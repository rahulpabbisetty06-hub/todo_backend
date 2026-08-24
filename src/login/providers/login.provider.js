const db = require("../../database.js");

const getUserByUsername = async (username) => {

    const sql = `
        SELECT
            id,
            username,
            hash_password
        FROM users
        WHERE username = ?
        LIMIT 1
    `;

    const [rows] = await db.query(sql, [username]);

    return rows[0];
};

module.exports = {
    getUserByUsername
};