const db = require("../db");

// Save portfolio
exports.savePortfolio = (req, res) => {
  const { userId, template, data } = req.body;

  if (!userId || !template || !data) {
    return res.status(400).json({ message: "Missing data" });
  }

  const sql = `
    INSERT INTO portfolios (user_id, template_name, portfolio_data)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE
      template_name = VALUES(template_name),
      portfolio_data = VALUES(portfolio_data)
  `;

  db.query(sql, [userId, template, JSON.stringify(data)], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "DB error" });
    }
    res.json({ message: "Portfolio saved successfully" });
  });
};
