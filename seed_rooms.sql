INSERT OR IGNORE INTO users (id, google_id, email, full_name, created_at) VALUES ('system', 'system', 'system@planexapp.ir', 'سیستم پلنکس', strftime('%s', 'now') * 1000);

INSERT OR IGNORE INTO study_rooms (id, name, description, emoji, category, max_participants, is_public, owner_id, created_at, updated_at) VALUES 
('room-tajrobi', 'کنکور تجربی', 'اتاق مطالعه ویژه دانش‌آموزان رشته تجربی', '🧬', 'exam', 1000, 1, 'system', strftime('%s', 'now') * 1000, strftime('%s', 'now') * 1000),
('room-riazi', 'کنکور ریاضی', 'اتاق مطالعه ویژه دانش‌آموزان رشته ریاضی فیزیک', '📐', 'exam', 1000, 1, 'system', strftime('%s', 'now') * 1000, strftime('%s', 'now') * 1000),
('room-ensani', 'کنکور انسانی', 'اتاق مطالعه ویژه دانش‌آموزان رشته علوم انسانی', '⚖️', 'exam', 1000, 1, 'system', strftime('%s', 'now') * 1000, strftime('%s', 'now') * 1000),
('room-uni', 'دانشجویان', 'اتاق مطالعه و تمرکز ویژه دانشجویان', '🎓', 'general', 1000, 1, 'system', strftime('%s', 'now') * 1000, strftime('%s', 'now') * 1000),
('room-general', 'عمومی', 'اتاق مطالعه آزاد برای همه', '📚', 'general', 1000, 1, 'system', strftime('%s', 'now') * 1000, strftime('%s', 'now') * 1000);
