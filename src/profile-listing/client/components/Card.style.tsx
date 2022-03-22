import React from "react";
import styled from "styled-components";
import { Skeleton } from "../../../components/common/styles/Loader.style";
import { media } from "../../../components/common/styles/styleUtil";

export const CardWrapper = styled.div`
    background-color: var(--secondary-color);
    color: var(--primary-color);
    width: 450px;
    min-height: 370px;
    margin: 20px;
    padding 30px;
    border-radius: 5px;
    ${media.sm`
      width: 100vw;
      box-sizing: border-box;
      margin: 6px 0;
   `}
`;

export const CardImage = styled.img`
  overflow: hidden;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const CardProfileInfo = styled.div`
  display: flex;
  justify-content: start;
  border-bottom: 2px solid #ffffff59;
  padding-bottom: 16px;
  margin-bottom: 16px;
  ${media.sm`
    flex-direction: column;
    align-items: start;
  `}
`;

export const CardProfileText = styled.div`
  margin-left: 20px;
  ${media.sm`
    margin-left: 0;
    margin-top: 10px;
  `}
`;

export const CardProfileName = styled.p`
  font-size: var(--subtitle);
  margin-bottom: 12px;
  width: 300px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const CardSubtext = styled.p`
  margin-bottom: 8px;
`;

export const CardProfileStatus = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const LabelWithText = styled.div`
  margin-top: 20px;
  font-size: var(--subheading);
  flex-basis: 45%;
  span {
    display: block;
    color: var(--tertiary-color);
    margin-bottom: 4px;
  }
`;

export const LabelWithTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5%;
`;

export const LabelWithTextSkeleton = () => (
  <LabelWithText>
    <span>
      <Skeleton height="18px" width="70px" margin={`0`} />
    </span>
    <Skeleton height="18px" width="100px" margin={`0 0 6px 0`} />
  </LabelWithText>
);

export const CardSkeleton = () => (
  <CardWrapper>
    <CardProfileInfo>
      <Skeleton height="120px" width="120px" margin={`0`} />
      <CardProfileText>
        <Skeleton height="25px" width="200px" margin={`2px 0 8px 0`} />
        <Skeleton height="18px" width="100px" margin={`0 0 6px 0`} />
        <Skeleton height="18px" width="50px" margin={`0`} />
      </CardProfileText>
    </CardProfileInfo>
    <LabelWithTextWrapper>
      <LabelWithTextSkeleton />
      <LabelWithTextSkeleton />
      <LabelWithTextSkeleton />
      <LabelWithTextSkeleton />
      <LabelWithTextSkeleton />
    </LabelWithTextWrapper>
  </CardWrapper>
);

export const CardsSkeleton = () => (
  <>
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
  </>
);
