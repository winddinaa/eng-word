import DefaultLayout from "layouts/PublicLayout/PublicLayout";

const LayoutWrapper = (props) => {
  const { children } = props;
  return <DefaultLayout {...props} />;
};

export default LayoutWrapper;
