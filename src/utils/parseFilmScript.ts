import { IFilmScript } from "@/models/FilmScript";

export const parseFilmScript = ({ filmScript }: { filmScript: IFilmScript }) => {
    const {
        episodes,
        episodeLength,
        genre,
        subGenre,
        budget,
        primaryStoryLocation,
        desiredPrimaryFilmingLocations,
        mainCharacters,
        storyReference,
        additionalElements,
        desiredPrimaryFilmingLocation,
        language,
        mainCharacterEthnicity,
        emotionalEvents,
        mainCharactersLength,
    } = filmScript;

    const prompt = `
      Please create a synopsis for a series that will last ${episodes} episodes at ${episodeLength} minutes each, keeping in mind the budget for production will be ${budget}
      It has been requested by the client that the genre of this series should be ${genre} 
      and take place in ${primaryStoryLocation}    
      More specifically, there are various places the show is set in such as a ${
          desiredPrimaryFilmingLocations || desiredPrimaryFilmingLocation
      }
      The client has stated their preference for certain main characters to be used in the film. The type, age and traits of the characters are as follows:
      ${mainCharacters.map(character => {
          return `a ${character} \n`;
      })}  
                
      The tone of the story should be a minor reference to the film ${storyReference}        
      Other elements that should be included are: ${additionalElements}
      The primary language of the series should be ${language} ${
          mainCharacterEthnicity
              ? `and the main characters should be ${mainCharacterEthnicity}`
              : ""
      }
      ${
          emotionalEvents && emotionalEvents.length > 0
              ? `The main characters should experience the following emotional events: ${emotionalEvents.join(
                    ", "
                )}`
              : ""
      }
      ${
          mainCharactersLength
              ? `The main characters should be ${mainCharactersLength} in number`
              : ""
      }
    `;

    return prompt;
};
