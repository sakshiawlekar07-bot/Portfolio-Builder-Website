const express = require("express");
const PDFDocument = require("pdfkit");

const router = express.Router();

router.post("/download", (req, res) => {
  console.log("✅ RESUME ROUTE HIT");

  const doc = new PDFDocument({ margin: 50 });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=test.pdf");

  doc.pipe(res);

  doc.fontSize(20).text("TEST RESUME");
  doc.moveDown();
  doc.fontSize(12).text("If you see this, PDF generation works.");

  doc.end();
});

module.exports = router;
