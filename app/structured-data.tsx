// Schema.org JSON-LD for search engines. Nothing here is rendered as visible text.
// Company facts are from the Companies House register (company 15614210).

export const siteUrl = "https://top-tierpadel.com";
export const organizationId = `${siteUrl}/#organization`;
export const founderId = `${siteUrl}/about-us/#alejandro-pesquero`;

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...data }) }}
    />
  );
}

export const siteGraph = {
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "TopTier Padel",
      alternateName: ["Top Tier Padel", "TopTier Padel Ltd"],
      // Must match the homepage's canonical URL exactly (with trailing slash) for Google site names.
      url: `${siteUrl}/`,
      publisher: { "@id": organizationId },
    },
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "TopTier Padel Ltd",
      legalName: "TopTier Padel Ltd",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/toptier-logo-black.png`,
        width: 423,
        height: 600,
      },
      foundingDate: "2024-04-03",
      founder: { "@type": "Person", "@id": founderId, name: "Alejandro Pesquero" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "106 Earls Court Road",
        addressLocality: "Kensington",
        postalCode: "W8 6EG",
        addressCountry: "GB",
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Companies House company number",
        value: "15614210",
      },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      email: "info@top-tierpadel.com",
      sameAs: ["https://www.linkedin.com/company/toptier-padel/"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "info@top-tierpadel.com",
      },
    },
  ],
};

export function breadcrumbs(name: string, path: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name, item: `${siteUrl}${path}` },
    ],
  };
}

// Descriptions reuse the site's visible copy.
export function padelService(path: string, audienceName: string, description: string) {
  return {
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name: `Padel facility partnerships for ${audienceName.toLowerCase()}`,
    serviceType: "Padel facility funding, development and management",
    description,
    url: `${siteUrl}${path}`,
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    audience: { "@type": "Audience", audienceType: audienceName },
  };
}
