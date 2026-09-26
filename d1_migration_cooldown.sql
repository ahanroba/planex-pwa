-- Add last_profile_update field for the 4-hour cooldown logic
ALTER TABLE users ADD COLUMN last_profile_update INTEGER;
