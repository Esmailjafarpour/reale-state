import { ThreeDots } from "react-loader-spinner";

const Loader = ({loading}) => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#304ffe"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: "auto" }}
      wrapperClassName=""
      visible={loading}
    />
  );
};

export default Loader;
