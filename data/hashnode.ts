export type TPost = {
  id: string;
  slug: string;
  title: string;
  brief: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
  readTimeInMinutes: number;
};

export const posts: TPost[] = [
  {
    id: "65aaaadd3368f8870fc2e7cc",
    slug: "mastering-docker-multistage-builds",
    title: "Mastering Docker Multistage Builds",
    brief:
      "This blog post explores the process of dockerization a TypeScript Express app while taking into consideration best practices. It showcases the usage of multistage Docker files to optimize the Dockerization process.\nThis is not on basic of docker it w...",
    coverImage: {
      url: "https://cdn.hashnode.com/res/hashnode/image/upload/v1705683200189/433c8708-3886-47f0-8fe0-c4b12e39cce9.png",
    },
    publishedAt: "2024-01-19T17:01:17.444Z",
    readTimeInMinutes: 11,
  },
  {
    id: "65a235df278eec74f51072c9",
    slug: "websockets-unlocked-mastering-the-art-of-real-time-communication",
    title: "WebSockets Unlocked:  Mastering the Art of Real-Time Communication",
    brief:
      "Hey there! 🌟 Ready to dive into the exciting world of real-time communication with WebSocket? 🚀 Join me in this series where we'll start from the basics, craft awesome chat/video apps, and master scaling with Redis and Kafka. Get set for a journey ...",
    coverImage: {
      url: "https://cdn.hashnode.com/res/hashnode/image/upload/v1705129128112/3d7964fd-c2a7-4ebf-895b-d041603fde46.png",
    },
    publishedAt: "2024-01-13T07:03:59.773Z",
    readTimeInMinutes: 12,
  },
  {
    id: "64ff01517b4fbf4119831891",
    slug: "will-bun-replace-node",
    title: "Will Bun replace Node ???",
    brief:
      "What is Bun?\nBun is a new runtime that provides an all-in-one toolkit for JavaScript and TypeScript apps. It ships as a single executable called Bun, making your app run really fast.\nHow Does Bun Do It?\nUnlike other runtimes, such as Node or Deno, wh...",
    coverImage: {
      url: "https://cdn.hashnode.com/res/hashnode/image/upload/v1694282035778/db080909-6f92-483a-b1db-01792e9d0fdb.png",
    },
    publishedAt: "2023-09-11T12:00:17.660Z",
    readTimeInMinutes: 3,
  },
  {
    id: "642da535a7ccc50a04716f0a",
    slug: "before-you-commit-m",
    title: 'Before you Commit -m ""',
    brief:
      "When you're making changes to your personal or open-source projects, it's crucial to remember some important points before committing, especially when working in a team. Poorly managed commits can quickly cause chaos. That's why this blog is dedicate...",
    coverImage: {
      url: "https://cdn.hashnode.com/res/hashnode/image/upload/v1680711199803/1e656bd3-386f-48d2-8c6f-be5e7926eabe.png",
    },
    publishedAt: "2023-04-05T16:43:33.257Z",
    readTimeInMinutes: 5,
  },
  {
    id: "6369dc6d3dc38833f35c2fc1",
    slug: "7-mistakes-that-you-make-as-a-coder",
    title: "7 Mistakes that you make as a coder",
    brief:
      "Intro\nThese are some mistakes that everyone makes unknown and becoming conscious and avoiding these mistakes would level you up as a programmer and also save you precious time \nhere are some common mistakes\nNOT Reading the docs\nJumping into the game ...",
    coverImage: {
      url: "https://cdn.hashnode.com/res/hashnode/image/upload/v1667881846517/l_cqIws6D.png",
    },
    publishedAt: "2022-11-08T04:34:53.448Z",
    readTimeInMinutes: 6,
  },
];
