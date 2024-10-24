// scripts/uploadPostsToAlgolia.ts
const algoliasearch = require('algoliasearch');
const client = algoliasearch('H2ZWF2VKS3', 'aebfbfe4b81b38ac79feaade2d358ff7'); // Reemplaza con tus claves de Algolia
const index = client.initIndex('posts');  // Nombre del índice

const posts = [
    {
      objectID: 1,
      title: "The Rise of AI in Modern Software",
      summary: "An overview of how artificial intelligence is transforming software development and its future applications.",
      tags: ["AI", "Software Development", "Machine Learning"],
      publishedAt: "2024-10-08",
      image: "/mock/post1.jpg",
      author: "Jane Doe"
    },
    {
      objectID: 2,
      title: "Cloud Computing: The Backbone of the Future",
      summary: "Exploring the growth of cloud infrastructure and how it powers today's businesses.",
      tags: ["Cloud Computing", "Infrastructure", "Scalability"],
      publishedAt: "2024-10-08",
      image: "/mock/post2.jpg",
      author: "John Smith"
    },
    {
      objectID: 3,
      title: "Cybersecurity in a Digital-First World",
      summary: "How companies are staying ahead of the curve to protect their systems in an increasingly digital world.",
      tags: ["Cybersecurity", "Data Protection", "Digital Transformation"],
      publishedAt: "2024-10-07",
      image: "/mock/post3.jpg",
      author: "Emily Johnson"
    },
    {
      objectID: 4,
      title: "The Future of Remote Work",
      summary: "Examining the technologies enabling remote work and its long-term impact on businesses.",
      tags: ["Remote Work", "Collaboration Tools", "Future of Work"],
      publishedAt: "2024-10-06",
      image: "/mock/post4.jpg",
      author: "Michael Brown"
    },
    {
      objectID: 5,
      title: "Exploring Blockchain Beyond Cryptocurrency",
      summary: "Understanding blockchain's use cases beyond the world of cryptocurrencies.",
      tags: ["Blockchain", "Decentralization", "Smart Contracts"],
      publishedAt: "2024-10-05",
      image: "/mock/post5.jpg",
      author: "Laura Davis"
    },
    {
      objectID: 6,
      title: "DevOps: Bridging the Gap Between Development and Operations",
      summary: "How DevOps practices are changing the way software is built and deployed.",
      tags: ["DevOps", "Automation", "CI/CD"],
      publishedAt: "2024-10-04",
      image: "/mock/post6.jpg",
      author: "Daniel Lee"
    },
    {
      objectID: 7,
      title: "Quantum Computing: The Next Big Leap?",
      summary: "A look at the advancements in quantum computing and what it could mean for the future of technology.",
      tags: ["Quantum Computing", "Future Tech", "Innovation"],
      publishedAt: "2024-10-03",
      image: "/mock/post7.jpg",
      author: "Sophia White"
    },
    {
      objectID: 8,
      title: "AI Ethics: Navigating the Moral Dilemmas of Technology",
      summary: "The ethical considerations companies face when deploying AI solutions.",
      tags: ["AI", "Ethics", "Technology Impact"],
      publishedAt: "2024-10-02",
      image: "/mock/post8.jpg",
      author: "James Carter"
    },
    {
      objectID: 9,
      title: "SaaS Solutions: Driving Efficiency in the Modern Enterprise",
      summary: "How Software-as-a-Service is transforming how businesses manage operations.",
      tags: ["SaaS", "Cloud Software", "Enterprise Solutions"],
      publishedAt: "2024-10-01",
      image: "/mock/post9.jpg",
      author: "Olivia Martinez"
    },
    {
      objectID: 10,
      title: "5G and Its Role in the Internet of Things (IoT)",
      summary: "Exploring how 5G networks are enabling the next generation of IoT devices.",
      tags: ["5G", "IoT", "Connectivity"],
      publishedAt: "2024-10-01",
      image: "/mock/post10.jpg",
      author: "William Green"
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
