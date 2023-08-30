import React from "react";
import "./global.css";
export const metadata = {
  title: "Todo Case",
  description: "Todo App configurations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
