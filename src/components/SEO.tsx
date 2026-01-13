import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const defaultMeta = {
  baseUrl: 'https://www.nexacarebr.com.br',
  brandName: 'NexaCare Brasil',
  defaultTitle: 'NexaCare Brasil | Home Care, Enfermagem e Saúde Integrada',
  defaultDescription: 'Home care, enfermagem e equipe multidisciplinar para domicílios, hospitais e ILPIs. Atendimento humanizado, seguro e ágil.',
  defaultOgImage: '/nexa-care-logo-final.png',
};

export function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
}: SEOProps) {
  const pageTitle = title || defaultMeta.defaultTitle;
  const pageDescription = description || defaultMeta.defaultDescription;
  const pageCanonical = canonical || defaultMeta.baseUrl;
  const pageOgImage = ogImage || `${defaultMeta.baseUrl}${defaultMeta.defaultOgImage}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageCanonical} />

      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:site_name" content={defaultMeta.brandName} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />
    </Helmet>
  );
}
