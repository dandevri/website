module.exports = function(collection) {
  let tagSet = new Set();
  collection.getAll().forEach(function(item) {
    if( "tags" in item.data ) {
      let tags = item.data.tags;

      tags = tags.filter(function(item) {
        switch(item) {
          // this list should match the `filter` list in tags.njk
          case "all":
          case "nav":
          case "post":
          case "posts":
          case "tagList":
          case "link":
          case "guide":
          case "note":
          case "weeknote":
          case "journal":
          case "project":
          case "talks":
          case "article":
          case "essay":
          case "workshops":
          case "workshop":
          case "draft":
          case "drafts":
          case "example":
          case "photo":
          case "changelog":
          case "podcast":
            return false;
        }

        return true;
      });

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...tagSet];
};
