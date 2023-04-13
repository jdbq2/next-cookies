import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  title: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main style={{ padding: "50px" }}>{children}</main>
    </>
  );
};
