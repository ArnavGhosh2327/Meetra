import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      Navigation
      {children}
    </main>
  );
};

export default RootLayout;
