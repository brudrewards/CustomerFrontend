import { Container } from "@mui/material";
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
    <div>
      <Head>
        <title>Brud Rewards {title ? `| ${title}` : ""}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <Container component="main" style={{ ...style }} maxWidth='xl'>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
