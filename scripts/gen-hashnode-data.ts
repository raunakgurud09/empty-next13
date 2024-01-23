const axios = require("axios");
const fs = require("fs");
const readingTime = require("reading-time");

const HASHNODE_DATA_FILE_PATH = "./data/hashnode.json";
const HASHNODE_API_URL = "https://gql.hashnode.com";
const HASHNODE_USERNAME = "raunakgurud2002";

const main = async () => {
  const query = `
    query {
      user(username:"raunakgurud2002" ) {
        posts(pageSize: 10, page: 1) {
          nodes {
            id
            slug
            title
            brief
            coverImage {
              url
            }
            publishedAt
            readTimeInMinutes
          }
        }
      }
    }
    `;

  // const posts = [];
  // var domain;
  // let didNotGetData = true;

  // for (let page = 0; didNotGetData; page++) {
  // }

  try {
    const res = await axios.post(
      HASHNODE_API_URL,
      JSON.stringify({
        query,
        variables: {
          username: HASHNODE_USERNAME,
        },
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const {
      data: { data },
    } = res;

    fs.writeFileSync(
      HASHNODE_DATA_FILE_PATH,
      JSON.stringify({ posts: data.user.posts.nodes })
    );
  } catch (error: any) {
    console.log(error.message);
  }
};

main();
