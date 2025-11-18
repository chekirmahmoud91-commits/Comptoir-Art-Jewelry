-- Updated script with cover images for each article
-- Drop existing table if it exists
DROP TABLE IF EXISTS blog_posts;

-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author TEXT DEFAULT 'Comptoir Art & Jewelry',
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  meta_title TEXT,
  meta_description TEXT,
  keywords TEXT[]
);

-- Insert sample blog posts with cover images
INSERT INTO blog_posts (title, slug, excerpt, content, featured_image, published, published_at, meta_title, meta_description, keywords) VALUES
(
  'Comment estimer la valeur de vos bijoux anciens',
  'comment-estimer-valeur-bijoux-anciens',
  'Découvrez les critères essentiels pour évaluer correctement vos bijoux anciens et comprendre leur valeur sur le marché.',
  '<h2>Les critères d''évaluation des bijoux anciens</h2><p>L''estimation de bijoux anciens nécessite une expertise approfondie et la prise en compte de plusieurs facteurs clés.</p><h3>1. L''authenticité et la provenance</h3><p>La première étape consiste à vérifier l''authenticité du bijou. Les poinçons, signatures et marques d''orfèvre sont des indicateurs essentiels. La provenance historique peut également augmenter considérablement la valeur.</p><h3>2. Les matériaux précieux</h3><p>L''or, l''argent, le platine et les pierres précieuses sont évalués selon leur pureté, leur poids et leur qualité. Un diamant sera analysé selon les 4C : carat, couleur, clarté et taille.</p><h3>3. L''état de conservation</h3><p>Un bijou en excellent état vaudra toujours plus qu''un bijou endommagé. Les restaurations anciennes peuvent être acceptables, mais les modifications modernes diminuent généralement la valeur.</p><h3>4. Le style et l''époque</h3><p>Certaines périodes sont plus recherchées : Art Nouveau, Art Déco, époque victorienne. Le style et la qualité de l''exécution sont déterminants.</p><p>Pour une estimation précise, n''hésitez pas à faire appel à nos experts qui sauront évaluer tous ces critères avec professionnalisme.</p>',
  '/placeholder.svg?height=400&width=800',
  true,
  NOW() - INTERVAL '7 days',
  'Comment estimer la valeur de vos bijoux anciens | Guide Expert',
  'Guide complet pour estimer vos bijoux anciens : critères d''évaluation, matériaux précieux, authenticité et conseils d''experts.',
  ARRAY['estimation bijoux', 'bijoux anciens', 'valeur bijoux', 'expertise bijoux']
),
(
  'Les meubles anciens : reconnaître les styles et les époques',
  'meubles-anciens-reconnaitre-styles-epoques',
  'Apprenez à identifier les différents styles de meubles anciens et à déterminer leur époque pour mieux comprendre leur valeur.',
  '<h2>Guide des styles de meubles anciens</h2><p>La connaissance des styles et des époques est essentielle pour évaluer correctement un meuble ancien.</p><h3>Le style Louis XV (1730-1760)</h3><p>Caractérisé par des lignes courbes, des pieds galbés et des ornements rocaille. Les meubles sont élégants et féminins, souvent en bois de rose ou de violette.</p><h3>Le style Louis XVI (1760-1789)</h3><p>Retour aux lignes droites et à la symétrie. Pieds fuselés cannelés, décors de rubans et de guirlandes. Influence néoclassique marquée.</p><h3>Le style Empire (1804-1815)</h3><p>Meubles massifs et imposants, inspirés de l''Antiquité. Acajou massif, bronzes dorés, motifs égyptiens et romains.</p><h3>Le style Napoléon III (1852-1870)</h3><p>Éclectisme et mélange des styles. Capitonnage, bois noirci, marqueterie Boulle. Confort et opulence.</p><h3>L''Art Nouveau (1890-1910)</h3><p>Lignes sinueuses inspirées de la nature. Bois exotiques, marqueterie florale, ferronnerie décorative.</p><p>Chaque style a ses particularités qui permettent de dater et d''authentifier un meuble. Nos experts peuvent vous aider à identifier précisément votre mobilier.</p>',
  '/placeholder.svg?height=400&width=800',
  true,
  NOW() - INTERVAL '14 days',
  'Meubles anciens : Guide des styles et époques | Expert Antiquités',
  'Découvrez comment reconnaître les styles de meubles anciens : Louis XV, Louis XVI, Empire, Art Nouveau. Guide complet avec photos.',
  ARRAY['meubles anciens', 'styles mobilier', 'louis xv', 'art nouveau', 'expertise meubles']
),
(
  'Investir dans l''art : conseils pour débuter sa collection',
  'investir-art-conseils-debuter-collection',
  'Vous souhaitez commencer une collection d''œuvres d''art ? Découvrez nos conseils pour investir intelligemment et constituer une collection de valeur.',
  '<h2>Débuter une collection d''art : les fondamentaux</h2><p>Investir dans l''art peut être passionnant et rentable, à condition de suivre quelques principes essentiels.</p><h3>1. Définir son budget et ses objectifs</h3><p>Commencez par établir un budget réaliste. L''art est un investissement à long terme. Déterminez si vous collectionnez par passion, pour décorer ou pour investir.</p><h3>2. Se former et s''informer</h3><p>Visitez des musées, des galeries, des salons d''art. Lisez des ouvrages spécialisés. La connaissance est votre meilleur atout pour éviter les erreurs.</p><h3>3. Choisir son domaine de prédilection</h3><p>Spécialisez-vous dans un domaine : peinture moderne, sculptures contemporaines, art asiatique, etc. Une collection cohérente prend plus de valeur.</p><h3>4. Acheter ce que l''on aime</h3><p>La passion doit guider vos choix. Vous vivrez avec ces œuvres, elles doivent vous toucher émotionnellement.</p><h3>5. Vérifier l''authenticité et la provenance</h3><p>Exigez toujours un certificat d''authenticité. Vérifiez la provenance de l''œuvre et son historique.</p><h3>6. Diversifier sa collection</h3><p>Ne mettez pas tous vos œufs dans le même panier. Variez les artistes, les époques, les techniques.</p><h3>7. Conserver et assurer ses œuvres</h3><p>Protégez vos acquisitions : conditions de conservation optimales, assurance adaptée, documentation complète.</p><p>Nos experts peuvent vous accompagner dans la constitution de votre collection et vous conseiller sur vos acquisitions.</p>',
  '/placeholder.svg?height=400&width=800',
  true,
  NOW() - INTERVAL '21 days',
  'Investir dans l''art : Guide complet pour débuter sa collection',
  'Conseils d''experts pour commencer une collection d''art : budget, choix des œuvres, authentification, conservation. Guide pratique.',
  ARRAY['investir art', 'collection art', 'acheter oeuvres', 'conseils collection', 'débuter collection']
);

-- Create index for faster queries
CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
