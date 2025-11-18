-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author TEXT DEFAULT 'Comptoir Art & Jewelry',
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  meta_title TEXT,
  meta_description TEXT,
  keywords TEXT[]
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Create index on published for filtering
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);

-- Create index on published_at for sorting
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- Insert some sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, featured_image, published, published_at, meta_title, meta_description, keywords)
VALUES 
(
  'Comment estimer la valeur de vos bijoux anciens',
  'comment-estimer-valeur-bijoux-anciens',
  'Découvrez les critères essentiels pour évaluer correctement vos bijoux anciens et obtenir une estimation juste.',
  '<h2>Les critères d''évaluation des bijoux anciens</h2><p>L''estimation de bijoux anciens nécessite une expertise approfondie. Plusieurs facteurs entrent en compte : l''époque, les matériaux, l''état de conservation, la signature de l''artisan, et la rareté de la pièce.</p><h3>1. L''authenticité et la provenance</h3><p>La première étape consiste à vérifier l''authenticité du bijou. Les poinçons, signatures et marques d''orfèvre sont des indices précieux.</p><h3>2. Les matériaux précieux</h3><p>L''or, l''argent, le platine et les pierres précieuses sont évalués selon leur pureté et leur qualité.</p><h3>3. L''état de conservation</h3><p>Un bijou en excellent état aura une valeur supérieure à un bijou nécessitant des restaurations.</p>',
  '/placeholder.svg?height=400&width=800',
  true,
  NOW() - INTERVAL '7 days',
  'Comment estimer la valeur de vos bijoux anciens | Comptoir Art & Jewelry',
  'Guide complet pour estimer vos bijoux anciens : critères d''évaluation, expertise professionnelle et conseils d''experts.',
  ARRAY['bijoux anciens', 'estimation bijoux', 'expertise bijoux', 'valeur bijoux']
),
(
  'L''art de la restauration de meubles anciens',
  'art-restauration-meubles-anciens',
  'La restauration de meubles anciens est un art délicat qui nécessite savoir-faire et patience. Découvrez nos conseils.',
  '<h2>Préserver le patrimoine mobilier</h2><p>La restauration de meubles anciens est une discipline qui allie technique et respect du patrimoine. Chaque intervention doit être réfléchie pour préserver l''authenticité de la pièce.</p><h3>Les étapes de la restauration</h3><p>Un diagnostic précis, un nettoyage délicat, des réparations structurelles si nécessaire, et une finition respectueuse de l''époque.</p><h3>Quand faire appel à un professionnel</h3><p>Pour les pièces de valeur, il est recommandé de consulter un restaurateur professionnel qui saura préserver l''intégrité du meuble.</p>',
  '/placeholder.svg?height=400&width=800',
  true,
  NOW() - INTERVAL '14 days',
  'L''art de la restauration de meubles anciens | Guide Expert',
  'Découvrez les techniques de restauration de meubles anciens et comment préserver votre patrimoine mobilier.',
  ARRAY['restauration meubles', 'meubles anciens', 'conservation patrimoine', 'ébénisterie']
),
(
  'Investir dans l''art : conseils pour débuter',
  'investir-dans-art-conseils-debutants',
  'L''investissement dans l''art peut être passionnant et rentable. Voici nos conseils pour bien débuter votre collection.',
  '<h2>Débuter une collection d''art</h2><p>Investir dans l''art nécessite de la patience, de la connaissance et une stratégie claire. Voici comment commencer.</p><h3>Définir son budget</h3><p>Commencez avec un budget raisonnable et augmentez progressivement vos investissements au fur et à mesure que vous gagnez en expertise.</p><h3>Se former et s''informer</h3><p>Visitez des galeries, des musées, assistez à des ventes aux enchères et consultez des experts pour développer votre œil.</p><h3>Acheter ce que vous aimez</h3><p>La passion doit guider vos choix. Un investissement réussi commence par un coup de cœur authentique.</p>',
  '/placeholder.svg?height=400&width=800',
  true,
  NOW() - INTERVAL '21 days',
  'Investir dans l''art : Guide complet pour débutants',
  'Conseils d''experts pour débuter votre collection d''art et investir intelligemment dans les œuvres d''art.',
  ARRAY['investissement art', 'collection art', 'achat œuvres art', 'marché art']
);
