import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 5000;

// 🗄️ Database pool (connects to Supabase/Neon)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // required for Supabase/Neon
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

// Example API route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is healthy ✅" });
});

// ✅ Hello route (for frontend test)
app.get("/hello", (req, res) => {
  res.send("Hello from Backend + DB 🚀");
});

// ✅ Guidence table route
app.get("/guidence", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Guidence_T1"');
    res.json(result.rows);
  } catch (error) {
    console.error("DB Error:", error.message);
    res.status(500).json({ error: "❌ Failed to fetch data from DB" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
