import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";

const MainLayout = ({
  title = "",
  children,
  style,
  description = "Earn rewards for ordering your favorite coffee from local coffee shops.",
  ...props
}) => {
  return (
    <div style={{ position: "relative" }}>
      <Head>
        <title>Brud Rewards {title ? `| ${title}` : ""}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main style={{ ...style }}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
