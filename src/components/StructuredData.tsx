import { Helmet } from 'react-helmet-async';

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NexaCare Brasil',
    url: 'https://www.nexacarebr.com.br',
    logo: 'https://www.nexacarebr.com.br/nexa-care-logo-final.png',
    description: 'Home care, enfermagem e equipe multidisciplinar para domicílios, hospitais e ILPIs.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-21-98768-1750',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'NexaCare Brasil',
    image: 'https://www.nexacarebr.com.br/nexa-care-logo-final.png',
    '@id': 'https://www.nexacarebr.com.br',
    url: 'https://www.nexacarebr.com.br',
    telephone: '+55-21-98768-1750',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida Ataulfo de Paiva, 1235 - Sala 303',
      addressLocality: 'Rio de Janeiro',
      addressRegion: 'RJ',
      postalCode: '22440-034',
      addressCountry: 'BR',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NexaCare Brasil',
    url: 'https://www.nexacarebr.com.br',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.nexacarebr.com.br/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}
