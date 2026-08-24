const db = require("../../database.js");

const createUser = async (user) => {

    const sql = `
        INSERT INTO users (
            username,
            hash_password,
            security_question,
            security_answer
        )
        VALUES (?, ?, ?, ?)
    `;

    await db.execute(sql, [
        user.username,
        user.password,
        user.securityQuestion,
        user.securityAnswer
    ]);

    // Fetch the inserted user
    const [rows] = await db.execute(
        `
        SELECT
            id,
            username
        FROM users
        WHERE username = ?
        ORDER BY created_at DESC
        LIMIT 1
        `,
        [user.username]
    );

    return rows[0];
};

module.exports = {
    createUser
};