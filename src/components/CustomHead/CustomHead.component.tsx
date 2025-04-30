import Head from 'next/head';

interface CustomHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const CustomHead = ({
  title = 'Seb Fousse | Developer, Designer, Creator',
  description = 'Personal website showcasing work, projects, skills, writing, and contact information.',
  image = '/image/PhotoCard.jpg',
  url = 'https://sebf.xyz',
}: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Viewport settings */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Theme color for mobile */}
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default CustomHead;
