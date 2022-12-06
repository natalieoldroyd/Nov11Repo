import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'CA',
    defaultLanguageCode: 'EN',
    storeDomain:
      // eslint-disable-next-line no-undef
      Oxygen?.env?.PUBLIC_STORE_DOMAIN ||
      'https://nataliestaffstore.myshopify.com/',
    storefrontToken:
      // eslint-disable-next-line no-undef
      Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN ||
      'b558f9f4a458bff3d316d0e10c99479d',
    // eslint-disable-next-line no-undef
    privateStorefrontToken: Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
    // eslint-disable-next-line no-undef
    storefrontId: Oxygen.env.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
