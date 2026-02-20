import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => {
  const fullTitle = `${title} | Claim Consultant`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Claim Consultant" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default SEO;