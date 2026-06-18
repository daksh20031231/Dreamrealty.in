const siteUrl = 'https://dreamrealty.in'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateAgent',
      '@id': `${siteUrl}/#real-estate-agent`,
      name: 'Dream Realty',
      url: siteUrl,
      image: `${siteUrl}/Hero_section_images/Provident Park Square.jpg`,
      description:
        'Dream Realty is a Bengaluru real estate consultancy helping clients with rentals, buying, selling, property management, home loans, interiors, and new project launches.',
      telephone: ['+918971187951', '+917597526065'],
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Opposite Provident Park Square, Judicial Layout, Thalaghattpura',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560109',
        addressCountry: 'IN',
      },
      areaServed: [
        'Bengaluru',
        'South Bengaluru',
        'North Bengaluru',
        'East Bengaluru',
        'West Bengaluru',
        'Central Bengaluru',
        'Kanakapura Road',
        'Bannerghatta Road',
      ],
      sameAs: ['https://www.instagram.com/dreamrealty_properties/'],
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Rentals in Bengaluru',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Buying and Selling in Bengaluru',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Management in Bengaluru',
          },
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Dream Realty',
      publisher: {
        '@id': `${siteUrl}/#real-estate-agent`,
      },
      inLanguage: 'en-IN',
    },
  ],
}

export function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  )
}
