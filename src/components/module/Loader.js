import { ThreeDots } from "react-loader-spinner";

const Loader = ({loading , color}) => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color={color}
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: "auto" }}
      wrapperClassName=""
      visible={loading}
    />
  );
};

export default Loader;
