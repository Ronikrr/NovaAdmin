import { useParams } from "react-router-dom";

const Ecommrece = () => {
    const { path } = useParams();
    return <div>You are on page: {path ==="ecommerce"&&("hello")}</div>;
};

export default Ecommrece