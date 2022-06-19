import { lazy } from "react";

const ContactPage = lazy(() => import("./contactPage/ContactPage"));
const FAQPage = lazy(() => import("./faqPage/FAQPage"));
const IndexPage = lazy(() => import("./indexPage/indexPage"));
const InventoryPage = lazy(() => import("./inventoryPage/inventoryPage"));
const SplashPage = lazy(() => import("./splashPage/SplashPage"));
const LoadingPage = lazy(() => import("./loadingPage/Loading"));
const ConfirmOrderPage = lazy(() => import("./confirmOrderPage/confirmOrderPage"));

export {
  ContactPage,
  FAQPage,
  IndexPage,
  InventoryPage,
  SplashPage,
  LoadingPage,
  ConfirmOrderPage,
};
