import loadingImage from "../../assets/loadingImage.svg"
import { StyledLoadingDiv } from "./style";

export const Loading = () => (
    <StyledLoadingDiv>
      <img src={loadingImage} alt='loadingImage' />
    </StyledLoadingDiv>
  );
  