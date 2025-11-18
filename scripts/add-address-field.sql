-- Add address field to contact_requests table
ALTER TABLE contact_requests
ADD COLUMN IF NOT EXISTS address TEXT;
