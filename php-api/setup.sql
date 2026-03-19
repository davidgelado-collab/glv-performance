-- ============================================
-- Ejecuta este SQL en tu base de datos MySQL
-- ============================================

CREATE DATABASE IF NOT EXISTS glv_performance
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE glv_performance;

CREATE TABLE IF NOT EXISTS reviews (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(100) NOT NULL,
  vehicle VARCHAR(100) DEFAULT NULL,
  rating TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  message TEXT NOT NULL,
  approved TINYINT(1) NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
