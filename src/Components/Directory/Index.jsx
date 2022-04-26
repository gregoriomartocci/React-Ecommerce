import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer } from "./Styles.jsx";

const Directory = ({ category }) => {
  const { id, imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default Directory;
 