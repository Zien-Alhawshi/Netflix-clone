function getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    });
  }


  const FILMS_DATA = [
    {
      title: 'Drama',
      items: [
      {
        id: getUUID(),
        title: 'The Prestige',
        description:
          'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
        genre: 'drama',
        maturity: '15',
        slug: 'the-prestige',
      },
      {
        id: getUUID(),
        title: 'Fight Club',
        description:
          'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
        genre: 'drama',
        maturity: '15',
        slug: 'fight-club',
      },
      {
        id: getUUID(),
        title: 'Kings Speech',
        description:
          'King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.',
        genre: 'drama',
        maturity: '15',
        slug: 'kings-speech',
      },
      {
        id: getUUID(),
        title: 'The Revenant',
        description:
          'Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.',
        genre: 'drama',
        maturity: '15',
        slug: 'the-revenant',
      },
      {
        id: getUUID(),
        title: 'The Social Network',
        description:
          'Mark Zuckerberg creates a social networking site, Facebook, with the help of his friend Eduardo Saverin. But soon, a string of lies tears their relationship apart even as Facebook connects people.',
        genre: 'drama',
        maturity: '12',
        slug: 'the-social-network',
      }
      
      ],
    },
    {
      title: 'Suspense',
      items:[
        {
            id: getUUID(),
            title: 'Shutter Island',
            description:
              'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
            genre: 'suspense',
            maturity: '15',
            slug: 'shutter-island',
        },
        {
            id: getUUID(),
            title: 'Gone Girl',
            description:
              'Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.',
            genre: 'suspense',
            maturity: '15',
            slug: 'gone-girl',
        },
        {
            id: getUUID(),
            title: 'Prisoners',
            description:
              "When the police take time to find Keller Dover's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.",
            genre: 'suspense',
            maturity: '15',
            slug: 'prisoners',
        },
        {
            id: getUUID(),
            title: 'Seven',
            description:
              'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.',
            genre: 'suspense',
            maturity: '15',
            slug: 'seven',
        },
        {
            id: getUUID(),
            title: 'Zodiac',
            description:
              'Robert Graysmith, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer.',
            genre: 'suspense',
            maturity: '15',
            slug: 'zodiac',
        }
      ]
    },
    {
      title: 'Children',
      items:[
        {
            id: getUUID(),
            title: 'Hotel Transylvania',
            description:
              'Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.',
            genre: 'children',
            maturity: '0',
            slug: 'hotel-transylvania',
        },
        {
            id: getUUID(),
            title: 'Despicable Me',
            description:
              'Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.',
            genre: 'children',
            maturity: '0',
            slug: 'despicable-me',
        },
        {
            id: getUUID(),
            title: 'Frozen',
            description:
              'Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.',
            genre: 'children',
            maturity: '0',
            slug: 'frozen',
        },
        {
            id: getUUID(),
            title: 'Spirited Away',
            description:
              'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.',
            genre: 'children',
            maturity: '0',
            slug: 'spirited-away',
        },
        {
            id: getUUID(),
        title: 'Up',
        description:
          "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
        genre: 'children',
        maturity: '0',
        slug: 'up',
        }
      ]
    },
    {
      title: 'Thriller',
      items:[
        {
            id: getUUID(),
            title: 'Joker',
            description:
              'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.',
            genre: 'thriller',
            maturity: '15',
            slug: 'joker',
        },
        {
            id: getUUID(),
            title: 'A Quiet Place',
            description:
              'The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
            genre: 'thriller',
            maturity: '15',
            slug: 'a-quiet-place',
        },
        {
            id: getUUID(),
            title: 'Black Swan',
            description:
              'Nina, a ballerina, gets the chance to play the White Swan, Princess Odette. But she finds herself slipping into madness when Thomas, the artistic director, decides that Lily might fit the role better.',
            genre: 'thriller',
            maturity: '15',
            slug: 'black-swan',
        },
        {
            id: getUUID(),
            title: 'Nightcrawler',
            description:
              'Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.',
            genre: 'thriller',
            maturity: '15',
            slug: 'nightcrawler',
        },
        {
            id: getUUID(),
            title: 'The Silence of The Lambs',
            description:
              'Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.',
            genre: 'thriller',
            maturity: '15',
            slug: 'the-silence-of-the-lambs',
        }
      ]
    },
    {
      title: 'Romance',
      items:[
        {
            id: getUUID(),
            title: 'A Star Is Born',
            description:
              'After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.',
            genre: 'romance',
            maturity: '15',
            slug: 'a-star-is-born',
        },
        {
            id: getUUID(),
        title: 'Blue Valentine',
        description:
          'Dean and Cynthia are married with a daughter and their marriage is about to fall apart. Both come from dysfunctional families and struggle to make sense of their relationship.',
        genre: 'romance',
        maturity: '15',
        slug: 'blue-valentine',
        },
        {
            id: getUUID(),
            title: 'La La Land',
            description:
              'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin...',
            genre: 'romance',
            maturity: '15',
            slug: 'la-la-land',
        },
        {
            id: getUUID(),
        title: 'The Notebook',
        description:
          "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from Alzheimer's, on a daily basis out of his notebook.",
        genre: 'romance',
        maturity: '15',
        slug: 'the-notebook',
        },
        {
            id: getUUID(),
            title: 'Titanic',
            description:
              'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.',
            genre: 'romance',
            maturity: '15',
            slug: 'titanic',
        }
      ]
    }
  ]
  




  export default FILMS_DATA;