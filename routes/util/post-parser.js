const defaults = require('./../../config/defaults');

module.exports = async(_response) => {

    if (_response.status !== 200) {
        throw _response;
    }
    let data = _response.data.graphql.hashtag.edge_hashtag_to_top_posts.edges;
    let posts = [];
    await Promise.all(data.map((edge) => {
        if (!edge.node.is_video) {
            let matcher = /[#]+[A-Za-z0-9-_]+/g;
            let caption = (edge.node.edge_media_to_caption.edges.length == 0) ?
                null :
                edge.node.edge_media_to_caption.edges[0].node.text;
            let hashTags = caption ? caption.match(matcher) : []

            posts.push({
                id: edge.node.id,
                caption: edge.node.edge_media_to_caption.edges.length == 0 ?
                    null : edge.node.edge_media_to_caption.edges[0].node.text,
                post_url: defaults.URL_INSTAGRAM_MEDIA_SHORTCODE + edge.node.shortcode + '/',
                timestamp: new Date(edge.node.taken_at_timestamp * 1000),
                image: edge.node.display_url,
                dimensions: edge.node.dimensions,
                likes: {
                    count: edge.node.edge_liked_by.count
                },
                comments: {
                    count: edge.node.edge_media_to_comment.count
                },
                hashtags: hashTags,
                pull_date: new Date()
            });
        }
    }));
    return posts;
};