-- Cloudflare D1 Database Schema for PlanEx Telegram Bot Auth & Multi-device Sync

CREATE TABLE IF NOT EXISTS users (
  telegram_id INTEGER PRIMARY KEY,
  phone_number TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at INTEGER
);

CREATE TABLE IF NOT EXISTS user_data (
  phone_number TEXT PRIMARY KEY,
  data_json TEXT NOT NULL,
  updated_at INTEGER
);
