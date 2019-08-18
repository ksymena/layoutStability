import styled from "styled-components";
import { GAPS } from "../../helpers/constants/gaps";
import { fromTheme } from "../../helpers/constants/colors";

export const GalleryContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: ${GAPS.m};
`;

export const GalleryItem = styled.li`
  width: 33.33%;
  overflow: hidden;
  position: relative;
  background-color: ${fromTheme.base("subtle")};

  &:nth-child(odd) {
    background-color: ${fromTheme.base("subtle")}cc;
  }
  
  img {
    width: 100%;
  }
`;
