import React, { FC, ReactElement } from "react";
import {
  CardWrapper,
  CardImage,
  CardProfileInfo,
  CardProfileName,
  CardProfileText,
  CardSubtext,
  CardProfileStatus,
  LabelWithText,
  LabelWithTextWrapper,
} from "./Card.style";
import { ProfileModule } from "../helpers/typeHelper";

const Card: FC<ProfileModule> = (props: ProfileModule): ReactElement<void> => {
  const {
    name,
    species,
    status,
    gender,
    image,
    nameOfChapter,
    location: { name: locationName, dimension, type, residents },
  } = props.profile;

  return (
    <CardWrapper>
      <CardProfileInfo>
        <CardImage src={image} alt="profile image" />
        <CardProfileText>
          <CardProfileName>{name}</CardProfileName>

          <CardSubtext>
            {species} | {gender}
          </CardSubtext>

          <CardProfileStatus>{status}</CardProfileStatus>
        </CardProfileText>
      </CardProfileInfo>

      <LabelWithTextWrapper>
        {locationName && (
          <LabelWithText>
            <span>Location Name:</span>
            {locationName}
          </LabelWithText>
        )}
        {dimension && (
          <LabelWithText>
            <span>Dimension:</span>
            {dimension}
          </LabelWithText>
        )}
        {type && (
          <LabelWithText>
            <span>Location Type:</span>
            {type}
          </LabelWithText>
        )}
        {residents?.length && (
          <LabelWithText>
            <span>Residents Number:</span>
            {residents?.length}
          </LabelWithText>
        )}
        {nameOfChapter && (
          <LabelWithText>
            <span>First seen in:</span>
            {nameOfChapter}
          </LabelWithText>
        )}
      </LabelWithTextWrapper>
    </CardWrapper>
  );
};

export default Card;
