const db = require("../../database.js");

const getUserStories = async (userId) => {
   const sql = `
       SELECT id,story_code,title,description,priority,status,acceptance_criteria FROM stories WHERE assigned_to=?
       ORDER BY created_at ASC 
   `;

   const [rows] = await db.execute(sql,[userId]);

   return rows;
}

module.exports = {
    getUserStories
}