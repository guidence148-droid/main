import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 5001;

// 🗄️ Database pool (connects to Supabase)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

// Hello endpoint (for frontend test)
app.get("/hello", (req, res) => {
  res.send("Hello from Backend + DB 🚀");
});

// Fetch Guidence_T1 table
app.get("/guidence", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Guidence_T1"');
    res.json(result.rows);
  } catch (error) {
    console.error("DB Error:", error.message);
    res.status(500).json([{ error: "❌ Failed to fetch from DB" }]);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
