-- Create stats_actions table to track all user actions
CREATE TABLE IF NOT EXISTS public.stats_actions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  action_type TEXT NOT NULL, -- 'page_view', 'click_call', 'click_estimation', 'form_submit'
  page_url TEXT,
  user_agent TEXT,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_requests table to store detailed form submissions
CREATE TABLE IF NOT EXISTS public.contact_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  object_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_stats_actions_created_at ON public.stats_actions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_stats_actions_action_type ON public.stats_actions(action_type);
CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at ON public.contact_requests(created_at DESC);

-- Modified RLS policies to allow public access since we use cookie-based auth
-- Enable RLS (Row Level Security) for security
ALTER TABLE public.stats_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Allow public inserts for tracking
CREATE POLICY "Allow public to insert stats" ON public.stats_actions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to insert contact requests" ON public.contact_requests
  FOR INSERT WITH CHECK (true);

-- Allow public reads (authentication is handled in API layer via cookies)
CREATE POLICY "Allow public to read stats" ON public.stats_actions
  FOR SELECT USING (true);

CREATE POLICY "Allow public to read contact requests" ON public.contact_requests
  FOR SELECT USING (true);
