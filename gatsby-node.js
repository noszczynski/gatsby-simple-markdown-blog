const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/genericPages/Post/index.tsx`);

  const queryArticles = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  queryArticles.data.allMdx.nodes.forEach(({ frontmatter: { slug, ...props } }) => {
    console.log(props, slug);
    createPage({
      path: `articles/${slug}`,
      component: postTemplate,
      context: {
        slug,
      },
    });
  });
};
