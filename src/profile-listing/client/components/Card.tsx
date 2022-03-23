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

const Card: FC<ProfileModule> = ({
  profile,
}: ProfileModule): ReactElement<void> => {
  const {
    name,
    species,
    status,
    gender,
    image,
    nameOfChapter,
    location: { name: locationName, dimension, type, residents },
  } = profile;

  const LabelWithTextComponent = ({ text, label }) => {
    return text ? (
      <LabelWithText>
        <span>{label}</span>
        {text}
      </LabelWithText>
    ) : (
      <></>
    );
  };

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
        <LabelWithTextComponent label="Location Name:" text={locationName} />
        <LabelWithTextComponent label="Dimension:" text={dimension} />
        <LabelWithTextComponent label="Location Type:" text={type} />
        <LabelWithTextComponent
          label="Residents Number:"
          text={residents?.length}
        />
        <LabelWithTextComponent label="First seen in:" text={nameOfChapter} />
      </LabelWithTextWrapper>
    </CardWrapper>
  );
};

export default Card;
