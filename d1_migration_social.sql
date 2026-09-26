-- PlanEx Social & Google Auth - D1 Migration Schema
-- Executed via: wrangler d1 execute planex-db --file=./d1_migration_social.sql

-- 1. Create or recreate Users Table with Google Auth & Profile fields
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,                       -- UUID v4
    google_id TEXT UNIQUE NOT NULL,            -- Google sub ID
    email TEXT UNIQUE NOT NULL,                -- User email address
    full_name TEXT NOT NULL,                   -- Name from Google
    avatar_url TEXT,                           -- Profile picture URL
    username TEXT UNIQUE,                      -- Public handle (e.g. /u/username)
    education_level TEXT,                      -- پایه تحصیلی / مقطع
    major TEXT,                                -- رشته تحصیلی
    university TEXT,                           -- دانشگاه
    age_group TEXT,                            -- رده سنی
    gender TEXT,                               -- جنسیت
    onboarding_completed INTEGER DEFAULT 0,    -- 0: pending wizard, 1: completed
    profile_public INTEGER DEFAULT 1,         -- 1: public, 0: private
    total_focus_minutes INTEGER DEFAULT 0,    -- مجموع دقیقه تمرکز
    current_streak INTEGER DEFAULT 0,          -- روزهای مداوم مطالعه
    longest_streak INTEGER DEFAULT 0,          -- رکورد روزهای مداوم
    last_active_at INTEGER,                    -- Unix timestamp
    created_at INTEGER NOT NULL                -- Unix timestamp
);

CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);

-- 2. Routines (Shareable & Copyable)
CREATE TABLE IF NOT EXISTS routines (
    id TEXT PRIMARY KEY,                       -- UUID v4
    user_id TEXT NOT NULL,                     -- Owner user UUID
    title TEXT NOT NULL,                       -- Routine title
    description TEXT DEFAULT '',               -- Routine description
    is_public INTEGER DEFAULT 0,               -- 0: private, 1: public marketplace
    category TEXT DEFAULT 'custom',            -- 'exam', 'work', 'habit', 'custom'
    copied_from_id TEXT,                       -- Source routine ID if copied
    copy_count INTEGER DEFAULT 0,              -- Number of times copied
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_routines_user ON routines(user_id);
CREATE INDEX IF NOT EXISTS idx_routines_public ON routines(is_public) WHERE is_public = 1;

-- 3. Routine Items
CREATE TABLE IF NOT EXISTS routine_items (
    id TEXT PRIMARY KEY,
    routine_id TEXT NOT NULL,
    title TEXT NOT NULL,
    time_of_day TEXT,                          -- e.g. "08:00"
    duration_minutes INTEGER DEFAULT 30,
    day_of_week INTEGER,                       -- 0-6 (Sun-Sat) or NULL for daily
    sort_order INTEGER DEFAULT 0,
    created_at INTEGER NOT NULL,
    FOREIGN KEY (routine_id) REFERENCES routines(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_routine_items_routine ON routine_items(routine_id);

-- 4. Follows (Social Accountability Network)
CREATE TABLE IF NOT EXISTS follows (
    follower_id TEXT NOT NULL,
    following_id TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    PRIMARY KEY (follower_id, following_id),
    FOREIGN KEY (follower_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (following_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_follows_follower ON follows(follower_id);
CREATE INDEX IF NOT EXISTS idx_follows_following ON follows(following_id);

-- 5. Study Rooms
CREATE TABLE IF NOT EXISTS study_rooms (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT DEFAULT '',
    emoji TEXT DEFAULT '📚',
    category TEXT DEFAULT 'general',           -- 'exam', 'field', 'grade', 'general'
    field_of_study TEXT,
    grade_level TEXT,
    room_type TEXT DEFAULT 'pomodoro',         -- 'pomodoro', 'stopwatch', 'free'
    pomodoro_work_min INTEGER DEFAULT 25,
    pomodoro_break_min INTEGER DEFAULT 5,
    max_participants INTEGER DEFAULT 50,
    is_public INTEGER DEFAULT 1,
    owner_id TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_study_rooms_public ON study_rooms(is_public) WHERE is_public = 1;

-- 6. Room Participants
CREATE TABLE IF NOT EXISTS room_participants (
    room_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    joined_at INTEGER NOT NULL,
    role TEXT DEFAULT 'member',                -- 'owner', 'moderator', 'member'
    PRIMARY KEY (room_id, user_id),
    FOREIGN KEY (room_id) REFERENCES study_rooms(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 7. Activities Feed
CREATE TABLE IF NOT EXISTS activities (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    type TEXT NOT NULL,                        -- 'focus_session', 'routine_complete', 'streak_milestone'
    title TEXT NOT NULL,
    description TEXT DEFAULT '',
    metadata TEXT DEFAULT '{}',                -- JSON string
    is_public INTEGER DEFAULT 1,
    created_at INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_activities_public ON activities(is_public, created_at DESC) WHERE is_public = 1;

-- 8. Challenges
CREATE TABLE IF NOT EXISTS challenges (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT DEFAULT '',
    challenge_type TEXT NOT NULL,              -- 'streak', 'focus_hours', 'routine_complete'
    target_value INTEGER NOT NULL,
    duration_days INTEGER NOT NULL,
    start_date INTEGER NOT NULL,
    end_date INTEGER NOT NULL,
    creator_id TEXT NOT NULL,
    is_public INTEGER DEFAULT 1,
    invite_code TEXT UNIQUE,
    created_at INTEGER NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 9. Challenge Participants
CREATE TABLE IF NOT EXISTS challenge_participants (
    challenge_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    progress INTEGER DEFAULT 0,
    joined_at INTEGER NOT NULL,
    completed_at INTEGER,
    PRIMARY KEY (challenge_id, user_id),
    FOREIGN KEY (challenge_id) REFERENCES challenges(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 10. Kudos / Reactions
CREATE TABLE IF NOT EXISTS kudos (
    id TEXT PRIMARY KEY,
    from_user_id TEXT NOT NULL,
    to_user_id TEXT NOT NULL,
    activity_id TEXT,
    type TEXT DEFAULT 'clap',                   -- 'clap', 'fire', 'star', 'heart'
    created_at INTEGER NOT NULL,
    FOREIGN KEY (from_user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (to_user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 11. Leaderboard Cache
CREATE TABLE IF NOT EXISTS leaderboard_cache (
    key TEXT PRIMARY KEY,                       -- e.g. 'daily:global', 'weekly:field:math'
    data_json TEXT NOT NULL,                    -- JSON array of ranked items
    updated_at INTEGER NOT NULL
);
