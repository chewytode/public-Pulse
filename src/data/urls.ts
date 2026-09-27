/**
 * Central place for every page path on automationexercise.com.
 * Pages/steps import this instead of hardcoding path strings.
 * baseURL itself (the domain) comes from playwright.config.ts / .env — only paths live here.
 */
export const URLS = {
  home: "/",
  login: "/login",
  signup: "/signup",
  products: "/products",
  productDetail: (id: string | number) => `/product_details/${id}`,
  cart: "/view_cart",
  checkout: "/checkout",
  contactUs: "/contact_us",
  account: {
    delete: "/delete_account",
    logout: "/logout",
  },
} as const;
