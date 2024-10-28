import { Post } from "../models/Post";
import post1Image from "@/assets/mock/post1.jpg";
import post2Image from "@/assets/mock/post2.jpg";
import post3Image from "@/assets/mock/post3.jpg";
import post4Image from "@/assets/mock/post4.jpg";
import post5Image from "@/assets/mock/post5.jpg";
import post6Image from "@/assets/mock/post6.jpg";
import post7Image from "@/assets/mock/post7.jpg";
import post8Image from "@/assets/mock/post8.jpg";
import post9Image from "@/assets/mock/post9.jpg";
import post10Image from "@/assets/mock/post10.jpg";
import avatar1Image from "@/assets/mock/avatar1.jpg";
import avatar2Image from "@/assets/mock/avatar2.jpg";
import avatar3Image from "@/assets/mock/avatar3.jpg";
import avatar4Image from "@/assets/mock/avatar4.jpg";
import avatar5Image from "@/assets/mock/avatar5.jpg";
import avatar6Image from "@/assets/mock/avatar6.jpg";
import avatar7Image from "@/assets/mock/avatar7.jpg";
import avatar8Image from "@/assets/mock/avatar8.jpg";
import avatar9Image from "@/assets/mock/avatar9.jpg";
import avatar10Image from "@/assets/mock/avatar10.jpg";

export const posts: Post[] = [
  {
    objectID: 1,
    title: "The Rise of AI in Modern Software",
    summary: "An overview of how artificial intelligence is transforming software development and its future applications.",
    tags: ["AI", "Software Development", "Machine Learning"],
    image: post1Image,
    publishedAt: "2024-10-08",
    author: "Jane Doe",
    position: "Lead AI Engineer",
    avatar: avatar1Image,
    content: `
Artificial Intelligence (AI) is no longer a futuristic concept; it is now an integral part of modern software development. From automation to advanced data analysis, AI is shaping the way software is designed and executed.

## Key Areas AI is Impacting:
- **Automation**: Reducing manual tasks in coding and testing.
- **Machine Learning**: Allowing software to adapt and evolve based on data.
- **Predictive Analytics**: Enhancing decision-making with AI-driven insights.

The future of AI in software development is bright, and its applications will continue to grow.
    `
  },
  {
    objectID: 2,
    title: "Cloud Computing: The Backbone of the Future",
    summary: "Exploring the growth of cloud infrastructure and how it powers today's businesses.",
    tags: ["Cloud Computing", "Infrastructure", "Scalability"],
    image: post2Image,
    publishedAt: "2024-10-08",
    author: "John Smith",
    position: "Cloud Architect",
    avatar: avatar2Image,
    content: `
Cloud computing has revolutionized how businesses manage their IT resources. By offering scalable, on-demand resources, cloud infrastructure provides flexibility and cost-efficiency for companies of all sizes.

## Why Cloud Computing?
- **Scalability**: Easily scale your operations up or down based on demand.
- **Cost-Effective**: Pay only for what you use, no need for expensive on-site servers.
- **Security**: Advanced security protocols to protect your data.

The future of the cloud lies in further integration with AI and IoT technologies.
    `
  },
  {
    objectID: 3,
    title: "Cybersecurity in a Digital-First World",
    summary: "How companies are staying ahead of the curve to protect their systems in an increasingly digital world.",
    tags: ["Cybersecurity", "Data Protection", "Digital Transformation"],
    image: post3Image,
    publishedAt: "2024-10-07",
    author: "Emily Johnson",
    position: "Cybersecurity Analyst",
    avatar: avatar3Image,
    content: `
As businesses go digital, the threat landscape is constantly evolving. Cybersecurity has become a top priority to ensure data and systems are protected from malicious attacks.

## Modern Cybersecurity Strategies:
- **Zero Trust Architecture**: No user is trusted by default, inside or outside the network.
- **Data Encryption**: Encrypting sensitive data both at rest and in transit.
- **AI-driven Security**: Leveraging AI for real-time threat detection.

Every organization must adapt its security measures to protect against these growing threats.
    `
  },
  {
    objectID: 4,
    title: "The Future of Remote Work",
    summary: "Examining the technologies enabling remote work and its long-term impact on businesses.",
    tags: ["Remote Work", "Collaboration Tools", "Future of Work"],
    image: post4Image,
    publishedAt: "2024-10-06",
    author: "Michael Brown",
    position: "Remote Work Consultant",
    avatar: avatar4Image,
    content: `
Remote work has become the norm for many industries, and its staying power is supported by a variety of technologies that foster productivity from any location.

## Key Technologies:
- **Video Conferencing**: Tools like Zoom and Teams have become essential for communication.
- **Project Management**: Platforms like Trello and Asana keep projects on track remotely.
- **Cloud Collaboration**: Tools such as Google Workspace allow seamless collaboration from anywhere.

The future of work will likely be a hybrid of remote and in-office setups.
    `
  },
  {
    objectID: 5,
    title: "Exploring Blockchain Beyond Cryptocurrency",
    summary: "Understanding blockchain's use cases beyond the world of cryptocurrencies.",
    tags: ["Blockchain", "Decentralization", "Smart Contracts"],
    image: post5Image,
    publishedAt: "2024-10-05",
    author: "Laura Davis",
    position: "Blockchain Developer",
    avatar: avatar5Image,
    content: `
Blockchain technology has gained widespread attention due to its role in cryptocurrency, but its potential applications go far beyond digital currencies.

## Key Blockchain Use Cases:
- **Supply Chain**: Tracking the movement of goods in real-time.
- **Smart Contracts**: Automating and enforcing contracts without intermediaries.
- **Digital Identity**: Securing personal data and digital identities.

Blockchain's decentralized nature has the potential to disrupt a wide range of industries.
    `
  },
  {
    objectID: 6,
    title: "DevOps: Bridging the Gap Between Development and Operations",
    summary: "How DevOps practices are changing the way software is built and deployed.",
    tags: ["DevOps", "Automation", "CI/CD"],
    image: post6Image,
    publishedAt: "2024-10-04",
    author: "Daniel Lee",
    position: "DevOps Engineer",
    avatar: avatar6Image,
    content: `
DevOps is revolutionizing the way software is built and deployed by emphasizing collaboration between developers and operations teams.

## Benefits of DevOps:
- **Faster Deployment**: Continuous Integration/Continuous Delivery (CI/CD) speeds up release cycles.
- **Automation**: Automating repetitive tasks improves efficiency.
- **Collaboration**: Breaking down silos between teams leads to more streamlined workflows.

DevOps is not just a methodology, it's a culture that enhances productivity across the board.
    `
  },
  {
    objectID: 7,
    title: "Quantum Computing: The Next Big Leap?",
    summary: "A look at the advancements in quantum computing and what it could mean for the future of technology.",
    tags: ["Quantum Computing", "Future Tech", "Innovation"],
    image: post7Image,
    publishedAt: "2024-10-03",
    author: "Sophia White",
    position: "Quantum Computing Researcher",
    avatar: avatar7Image,
    content: `
Quantum computing represents a significant leap forward in computational power, promising to solve complex problems that are currently beyond the reach of classical computers.

## Key Concepts:
- **Quantum Bits (Qubits)**: Unlike binary bits, qubits can represent multiple states simultaneously.
- **Quantum Supremacy**: The point where quantum computers can solve problems faster than classical computers.
- **Applications**: Quantum computing could revolutionize industries like pharmaceuticals, finance, and artificial intelligence.

While still in its early stages, quantum computing could change the face of technology as we know it.
    `
  },
  {
    objectID: 8,
    title: "AI Ethics: Navigating the Moral Dilemmas of Technology",
    summary: "The ethical considerations companies face when deploying AI solutions.",
    tags: ["AI", "Ethics", "Technology Impact"],
    image: post8Image,
    publishedAt: "2024-10-02",
    author: "James Carter",
    position: "AI Ethics Advisor",
    avatar: avatar8Image,
    content: `
As artificial intelligence becomes more powerful, the ethical implications of its use must be carefully considered.

## Ethical Concerns:
- **Bias in AI**: Ensuring AI systems do not perpetuate bias or discrimination.
- **Privacy**: Protecting user data while implementing AI solutions.
- **Autonomy**: Balancing AI's decision-making with human oversight.

The responsible deployment of AI will be critical to ensure its benefits are maximized and its risks minimized.
    `
  },
  {
    objectID: 9,
    title: "SaaS Solutions: Driving Efficiency in the Modern Enterprise",
    summary: "How Software-as-a-Service is transforming how businesses manage operations.",
    tags: ["SaaS", "Cloud Software", "Enterprise Solutions"],
    image: post9Image,
    publishedAt: "2024-10-01",
    author: "Olivia Martinez",
    position: "Enterprise SaaS Consultant",
    avatar: avatar9Image,
    content: `
Software-as-a-Service (SaaS) solutions have become a cornerstone of modern business operations, providing flexible, scalable, and cost-effective tools.

## Advantages of SaaS:
- **Scalability**: Easily add or remove services based on business needs.
- **Automatic Updates**: SaaS providers handle updates and maintenance, reducing downtime.
- **Cost-Effective**: Lower upfront costs compared to traditional software.

SaaS solutions allow enterprises to focus on growth while ensuring their infrastructure is future-proof.
    `
  },
  {
    objectID: 10,
    title: "5G and Its Role in the Internet of Things (IoT)",
    summary: "Exploring how 5G networks are enabling the next generation of IoT devices.",
    tags: ["5G", "IoT", "Connectivity"],
    image: post10Image,
    publishedAt: "2024-10-01",
    author: "William Green",
    position: "IoT Solutions Architect",
    avatar: avatar10Image,
    content: `
The rollout of 5G technology is set to revolutionize the Internet of Things (IoT) by providing faster, more reliable connectivity for a vast number of devices.

## 5G's Impact on IoT:
- **Low Latency**: Real-time communication between devices.
- **High Bandwidth**: Supporting a larger number of connected devices simultaneously.
- **Enhanced Security**: Improved protocols for secure IoT communications.

As 5G becomes more widespread, its influence on IoT will unlock new possibilities across industries.
    `
  }];
