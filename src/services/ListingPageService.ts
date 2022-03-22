import axios from "axios";

export enum IdTypes {
  LEGACY_ID = "LEGACY_ID",
  GLOBAL_ID = "GLOBAL_ID",
}

export default class ListingPageService {
  static fetchInfo = async (page) => {
    try {
      const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
      const arrayData = [];
      const profiles = await axios.get(url);
      for (const profile of profiles.data.results) {
        const location = await ListingPageService.fetchLocation(
          profile.location.url
        );
        const nameOfChapter = await ListingPageService.fetchNameOfChapter(
          profile.episode
        );

        arrayData.push({
          ...profile,
          location: location.data,
          nameOfChapter: nameOfChapter.data.name,
        });
      }

      return arrayData;
    } catch (error) {
      // we can log error cloudwatch but for now we'll just log it here
      console.log("Error", error);
    }
  };

  static fetchLocation = async (url: string) => {
    try {
      const location = await axios.get(url);
      return location;
    } catch (error) {
      // we can log error cloudwatch but for now we'll just log it here
      console.log("Error", error);
    }
  };

  static fetchNameOfChapter = async (url: string) => {
    try {
      const nameOfChapter = await axios.get(url[0]);
      return nameOfChapter;
    } catch (error) {
      // we can log error cloudwatch but for now we'll just log it here
      console.log("Error", error);
    }
  };
}
