import { BackgroundImage, Body, DirectoryItemContainer } from "./Styles.jsx";

const Directory = ({ category }) => {
  const { id, imageUrl, title } = category;

  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default Directory;
