## APP [https://thawing-bayou-32780.herokuapp.com/love](https://thawing-bayou-32780.herokuapp.com/love)

________________________


## Instagram Scrape by Tag

NodeJS application for scraping posts from Instagram by hashtag without API access.


### Config
```
Setup default tag and limit in `config/defaults.js`
    // VARIABLES
    INSTAGRAM_DEFAULT_HASHTAG: 'landscape',
    INSTAGRAM_DEFAULT_FIRST: 10
```


### Setup

```
npm install
npm start
```

### Run Server

* `http://localhost:3000`

For top most posts
* `http://localhost:3000/<tag>`

For recent posts
* `http://localhost:3000/<tag>?recent=1`

### Example response:

```
[
    {
        id: "1731513477170042662",
        caption: "[ #BreakingBarriers ] Fire and Light | Photograph by Callie Chee (@calliecheephotography) . “A nightscape image — taken at 2AM on June 22, 2017 — of volcanoes spewing a little ash, the Milky Way, and fog,” writes #YourShotPhotographer Callie Chee. “These three elements are only possible within a certain frame, and can dissipate very quickly.” — March is #WomensHistoryMonth and to honor the women in our community and around the globe, @natgeoyourshot Associate Photo Editor Kristen McNicholas (@kemcnicholas) curated 31 Your Shot images that celebrates women to be featured each day this month. “The images I chose to feature this month celebrate female-identifying Your Shot photographers telling a visual story of empowerment, the freedom and flexibility of womanhood, photographers and their images #BreakingBarriers whether it's identifying women's issues in their images or a beautiful landscape or underwater image. #natgeowomen",
        post_url: "https://www.instagram.com/p/BgHklVihZcm/",
        timestamp: "2018-03-09T21:55:13.000Z",
        image: "https://instagram.flhe3-1.fna.fbcdn.net/vp/e7fc41f820861a6d980bf9a90e58329a/5B4C58F5/t51.2885-15/e35/28427121_2164001750496323_8154177079982686208_n.jpg",
        dimensions: {
            height: 1350,
            width: 1080
        },
        likes: {
            count: 28990
        },
        comments: {
            count: 222
        },
        hashtags: [
            "#BreakingBarriers",
            "#YourShotPhotographer",
            "#WomensHistoryMonth",
            "#BreakingBarriers",
            "#natgeowomen"
        ],
        pull_date: "2018-03-12T12:01:37.121Z",
        owner: {
            profile_pic_url: "https://instagram.flhe3-1.fna.fbcdn.net/vp/9f695ce2b63d6d595026dc5ebad3c495/5B4AE9BA/t51.2885-19/10375600_1488617051373305_1529971870_a.jpg",
            username: "natgeoyourshot",
            full_name: "National Geographic Your Shot"
        }
    }
]
```


`instagram-hashtag-scraper` uses Async/Await. In order to use it as intended, you need atleast Node v7.6.


### External References and Resources

* [Instagram](https://www.instagram.com)
