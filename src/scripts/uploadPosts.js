// scripts/uploadPostsToAlgolia.ts
const algoliasearch = require('algoliasearch');
const client = algoliasearch('H2ZWF2VKS3', 'aebfbfe4b81b38ac79feaade2d358ff7'); // Reemplaza con tus claves de Algolia
const index = client.initIndex('posts');  // Nombre del índice

const posts = [
  {
    objectID: 1,
    title: "Technical debts: tips for effective management",
    urlTitle: "technical-debts",
    summary: "Imagine that you are cooking a meal and you decide not to clean any of the dishes while you are doing it. This decision gets the job done much faster, but it piles up work for later. Also, the more time you spend not doing the washing up, the harder it will be to do it later.",
    tags: ["Management", "Tips"],
    image: '/posts/post1.png',
    publishedAt: "2024-01-11",
    author: "Raúl López",
  },
  {
    objectID: 2,
    title: "5 tips for remote IT teams in 2024",
    urlTitle: "remote-it-teams-tips",
    summary: "Remote IT teams encourage the learning of new skills and perspectives by allowing for diversity among their members. They can also exchange ideas, feedback and solutions productively using efficient communication tools and methods.",
    tags: ["Remote", "Management", "Tips"],
    image: '/posts/post2.jpg',
    publishedAt: "2024-01-31",
    author: "Raúl López",
  },
  {
    objectID: 3,
    title: "Incorporating AI for agility and efficiency",
    urlTitle: "ai-for-agility-and-efficiency",
    summary: "At the end of the year, I attended a CUTI event and one of the workshops presented the impact of AI in the business world and how it is changing the rules of the game, mainly in terms of agility and efficiency.",
    tags: ["Startups", "AI", "Tools"],
    image: '/posts/post3.jpg',
    publishedAt: "2024-02-11",
    author: "Raúl López",
  },
  {
    objectID: 4,
    title: "New vision, new opportunities: Francisco Ravecca joins Applica Corp.",
    urlTitle: "francisco-ravecca",
    summary: "We are pleased to announce the appointment of Francisco Ravecca as the new Director of Applica Corp. Francisco brings over 30 years of experience in business development across a wide range of industries, including free trade zones, real estate, technology, retail, and finance.",
    tags: ["Industry", "Team", "Future"],
    image: '/posts/post4.jpg',
    publishedAt: "2024-08-29",
    author: "Santiago Fraga",
  },
  {
    objectID: 5,
    title: "Digital transformation in talent management",
    urlTitle: "digital-transformation",
    summary: "In today's fast-paced business environment, where time is one of the most valuable resources, efficiency and agility in talent acquisition are essential for project success.",
    tags: ["Digital", "Management", "Staff Aurgmentation"],
    image: '/posts/post5.jpg',
    publishedAt: "2024-10-12",
    author: "Santiago Fraga",
  },
  {
    objectID: 6,
    title: "Highlights from IT Builders Live: Networking and knowledge",
    urlTitle: "it-builders",
    summary: "The IT Builders Live event gathers the entire tech ecosystem of Uruguay, creating an enriching synergy space for the Information and Communication Technologies (ICT) industry.",
    tags: ["Events", "Marketing"],
    image: '/posts/post6.png',
    publishedAt: "2024-06-03",
    author: "Ana Solórzano",
  }
];

const uploadPostsToAlgolia = async () => {
    try {
      const { objectIDs } = await index.saveObjects(posts);
      console.log('Posts uploaded successfully:', objectIDs);
    } catch (error) {
      console.error('Error uploading posts to Algolia:', error);
    }
};

uploadPostsToAlgolia();
