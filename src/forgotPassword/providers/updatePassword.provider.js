const db = require("../../database.js");

const getUserByUsername = async (username) => {
    const sql = `SELECT
                    id,
                    hash_password,
                    security_answer
                FROM users
                WHERE username = ?
                LIMIT 1`;

    const [rows] = await db.execute(sql,[username]);

    return rows[0];
}

const updatePassword = async (id,hashedPassword) => {
    const sql = `
           UPDATE users
           SET hash_password=?
           WHERE id=?
    `;
    await db.execute(sql,[hashedPassword,id]);
}

module.exports = {getUserByUsername,updatePassword};