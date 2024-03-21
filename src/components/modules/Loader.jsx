import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={{ margin: " 300px auto", width: " 50px" ,border:"none"}}>
      <MoonLoader color="#a62626" loading />
    </div>
  );
};

export default Loader;
