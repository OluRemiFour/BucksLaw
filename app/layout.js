// import { EB_Garamond } from "next/font/google";
// import AppWrapper from "./AppWrapper";
// import StoreContext from "./components/StoreContext";
// import "./globals.css";
// // import { StoreProvider } from "./components/StoreProvider";

// const inter = EB_Garamond({ subsets: ["latin"] });

// export const metadata = {
//   title: "DLawNet",
//   description: "Official website for Legal Education & Networking",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <AppWrapper>
//           <StoreContext>{children}</StoreContext>
//         </AppWrapper>
//       </body>
//     </html>
//   );
// }

import { EB_Garamond } from "next/font/google";
import AppWrapper from "./AppWrapper";
import StoreProvider from "./components/storeProvider";
import "./globals.css";

const inter = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "DLawNet",
  description: "Official website for Legal Education & Networking",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <AppWrapper>{children}</AppWrapper>
        </body>
      </html>
    </StoreProvider>
  );
}
