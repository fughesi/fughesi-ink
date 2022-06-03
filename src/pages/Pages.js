import { lazy } from "react";

const ContactPage = lazy(() => import('./contactPage/Contact'));
const FAQPage = lazy(() => import('./faqPage/FAQPage'));
const IndexPage = lazy(() => import('./indexPage/indexPage'));
const InventoryPage = lazy(() => import('./inventoryPage/inventoryPage'));
const SplashPage = lazy(() => import('./splashPage/SplashPage'))
const LoadingPage = lazy(() => import('./loadingPage/Loading'))

export { ContactPage, FAQPage, IndexPage, InventoryPage, SplashPage, LoadingPage }