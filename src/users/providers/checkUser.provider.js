const db = require("../../database.js");

const checkUser = async (userId) => {
   const sql =`
      SELECT id FROM users WHERE id=? LIMIT 1
   `;

   const [rows] = await db.execute(sql,[userId]);

   return rows[0];
}

module.exports = {
    checkUser
};