import styled from "styled-components";

export const Skeleton = styled.div`
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: skeleton-background-animate;
  animation-timing-function: linear;
  background: #e9ebed;
  background: linear-gradient(to right, #989899 5%, #525564 30%, #989899 75%);
  background-size: 800px 54px;
  border-radius: ${(props) => props.radius || "3px"};
  margin: ${(props) => props.margin || "auto"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;

export const ProfileListingPageLoader = styled.div`
  background-color: var(--tertiary-color);
  height: 200px;
`;
