import { lazy } from "react";

// ---------- components ------------
const PortfolioComponent = lazy(() =>
  import("../components/portfolio/Portfolio")
);

// --------------- pages ------------
const ContactPage = lazy(() => import("./contactPage/ContactPage"));
const FAQPage = lazy(() => import("./faqPage/FAQPage"));
const IndexPage = lazy(() => import("./indexPage/indexPage"));
const InventoryPage = lazy(() => import("./inventoryPage/inventoryPage"));
const SplashPage = lazy(() => import("./splashPage/SplashPage"));
const LoadingPage = lazy(() => import("./loadingPage/Loading"));
const ShoppingCartPage = lazy(() =>
  import("./shoppingCartPage/ShoppingCartPage")
);
const ConfirmOrderPage = lazy(() =>
  import("./confirmOrderPage/confirmOrderPage")
);

export {
  PortfolioComponent,
  ContactPage,
  FAQPage,
  IndexPage,
  InventoryPage,
  SplashPage,
  LoadingPage,
  ShoppingCartPage,
  ConfirmOrderPage,
};
