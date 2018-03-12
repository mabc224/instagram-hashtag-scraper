const Axios = require('axios');
const _ = require('lodash');
const defaults = require('./../../config/defaults');
const _limit = defaults.INSTAGRAM_DEFAULT_FIRST;
const topParser = require('./post-parser');

module.exports = async function (_hashtag) {
    console.log('running instagram for tag ' + _hashtag)
    try {
        var response = await Axios({
            baseURL: defaults.URL_INSTAGRAM_EXPLORE_TAGS,
            url: '/' + _hashtag,
            method: 'get',
            params: {
                __a: 1
            },
            // headers: {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)
            // AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36"}
        });
        if (typeof _response === 'string') {
            if (_response.includes("Page Not Found")) {
                return {err: 'Page Not Found'};
            } else {
                return {err: _response};
            }
        } else {
            var posts = await topParser(response);

            while (posts.length < _limit) {
                var has_next_page = response.data.graphql.hashtag.edge_hashtag_to_media.page_info.has_next_page;
                var end_cursor = response.data.graphql.hashtag.edge_hashtag_to_media.page_info.end_cursor;
                if (has_next_page) {
                    response = await Axios.get(defaults.URL_INSTAGRAM_EXPLORE_TAGS + _hashtag, {
                        params: {
                            __a: 1,
                            max_id: end_cursor
                        }
                    });
                    var morePosts = await topParser(response);
                    posts = posts.concat(morePosts);
                } else {
                    break;
                }

            }

            if (posts.length > _limit) {
                posts.splice(_limit, posts.length);
            }
            var promises = [];

            posts.forEach((d) => {
                promises.push(Axios.get(d.post_url + '?__a=1'));
            });

            var finalData = [];
            var data = await Axios
                .all(promises)
                .then((results) => {
                    return results.map(r => {
                        var data = r.data.graphql.shortcode_media;
                        var ownerDetail = {
                            profile_pic_url: data.owner.profile_pic_url,
                            username: data.owner.username,
                            full_name: data.owner.full_name
                        }
                        return Object.assign({}, _.find(posts, {'id': data.id}), {owner: ownerDetail});
                    });
                });
            return data;
        }

    } catch (error) {
        console.log("Error");
        return {err: error.message};
    }
}