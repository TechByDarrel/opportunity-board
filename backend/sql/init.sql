CREATE TABLE IF NOT EXISTS opportunities (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  organization VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  location VARCHAR(150) NOT NULL,
  type VARCHAR(100) NOT NULL,
  work_mode VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT,
  benefits TEXT,
  apply_url TEXT NOT NULL,
  deadline DATE NOT NULL,
  is_featured BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO opportunities (
  title,
  organization,
  category,
  location,
  type,
  work_mode,
  description,
  requirements,
  benefits,
  apply_url,
  deadline,
  is_featured,
  is_published
)
VALUES (
  'Frontend Developer Internship',
  'TechNova Africa',
  'Internship',
  'Lagos, Nigeria',
  'Internship',
  'Hybrid',
  'An exciting internship opportunity for aspiring frontend developers to work on real-world web applications.',
  'Basic knowledge of HTML, CSS, JavaScript, and React.',
  'Mentorship, hands-on experience, and networking opportunities.',
  'https://example.com/apply',
  '2026-04-30',
  TRUE,
  TRUE
);