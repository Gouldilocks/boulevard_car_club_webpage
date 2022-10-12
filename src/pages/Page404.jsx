import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => {
        navigate("/home");
      }}>Return Home</Button>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}