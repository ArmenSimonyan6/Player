import React, { type PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => (
  <React.Fragment>
    <main>{children}</main>
  </React.Fragment>
);
