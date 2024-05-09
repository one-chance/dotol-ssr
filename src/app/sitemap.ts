import { MetadataRoute } from 'next';
// import { getPosts } from '@/utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const posts = await getPosts();

  // const postsSitemap: MetadataRoute.Sitemap = posts.map(post => ({
  //   url: `https://one-chance.dev/post/${post.url}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'daily',
  // }));

  const calculatorSitemap: MetadataRoute.Sitemap = [
    {
      url: 'https://dotols.com/calculator/ability',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://dotols.com/calculator/calendar',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://dotols.com/calculator/honing-disassemble',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://dotols.com/calculator/honing-recipe',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://dotols.com/calculator/old-engrave',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://dotols.com/calculator/power',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://dotols.com/calculator/production',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  const contentSitemap: MetadataRoute.Sitemap = [
    {
      url: 'https://dotols.com/content/achievement',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: 'https://dotols.com/content/adventure',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: 'https://dotols.com/content/archeology',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  const costumeSitemap: MetadataRoute.Sitemap = [
    {
      url: 'https://dotols.com/costume/luxury',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://dotols.com/costume/lookbook',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  const dbSitemap: MetadataRoute.Sitemap = [
    {
      url: 'https://dotols.com/db/artifact-equip',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/db/equip-skill',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/db/normal-equip',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/db/pet-equip',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/db/set-effect',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/db/special-skill',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  const upgradeSitemap: MetadataRoute.Sitemap = [
    {
      url: 'https://dotols.com/upgrade/artifact-equip/make',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/upgrade/body-enhance/ability',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/upgrade/body-enhance/bonus',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/upgrade/body-enhance/recipe',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/upgrade/normal-equip/enchant',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/upgrade/normal-equip/hone',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/upgrade/normal-equip/make',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/upgrade/normal-equip/reforge',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dotols.com/upgrade/pet-equip/reforge',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  return [
    {
      url: 'https://dotols.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://dotols.com/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://dotols.com/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://dotols.com/signup',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://dotols.com/forgot/userId',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://dotols.com/forgot/password',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    ...calculatorSitemap,
    ...contentSitemap,
    ...costumeSitemap,
    ...dbSitemap,
    ...upgradeSitemap,
    // ...postsSitemap,
  ];
}
