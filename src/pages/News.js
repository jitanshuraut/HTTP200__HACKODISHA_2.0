import React,{useState,useEffect} from 'react'
import style from "../styles/home.module.css"

function News() {
    const [counter, setcounter] = useState([])
    const [s_counter, sets_counter] = useState(0)
    let extra= [
                {
                    "source": {
                        "id": "bbc-news",
                        "name": "BBC News"
                    },
                    "author": null,
                    "title": "Shower with mouth shut, Mississippi residents told",
                    "description": "Nearly 200,000 people in Jackson have no safe drinking water after a flood damaged a treatment centre.",
                    "url": "https://www.bbc.co.uk/news/av/world-us-canada-62761355",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D170/production/_126561635_p0cxy7jw.jpg",
                    "publishedAt": "2022-09-02T01:35:43Z",
                    "content": "Last Soviet leader, Mikhail Gorbachev, dies aged 91. Video, 00:03:07Last Soviet leader, Mikhail Gorbachev, dies aged 91"
                },
                {
                    "source": {
                        "id": "bbc-news",
                        "name": "BBC News"
                    },
                    "author": "https://www.facebook.com/bbcnews",
                    "title": "Pakistan appeals to world for flood help amid devastation",
                    "description": "More than 1,000 people have died and millions have been displaced since June, government officials say.",
                    "url": "https://www.bbc.co.uk/news/world-asia-62704004",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1C1C/production/_126469170_gettyimages-1242756633.jpg",
                    "publishedAt": "2022-08-27T23:48:28Z",
                    "content": "By Alys DaviesBBC News\r\nMedia caption, Watch: Millions affected by heavy flooding in Pakistan\r\nPakistan is appealing for further international assistance after floods wreaked havoc across the country… [+3127 chars]"
                },
                {
                    "source": {
                        "id": "bbc-news",
                        "name": "BBC News"
                    },
                    "author": "https://www.facebook.com/bbcnews",
                    "title": "Disease warning as Pakistan flood death toll rises",
                    "description": "The death toll from unprecedented flooding passes 1,200, with a third of the victims said to be children.",
                    "url": "https://www.bbc.co.uk/news/world-asia-62779533",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4247/production/_126576961_gettyimages-1242883611.jpg",
                    "publishedAt": "2022-09-03T14:44:19Z",
                    "content": "By Merlyn ThomasBBC News\r\nAid workers warn a lack of clean drinking is causing an increase in diseases in Pakistan, as the death toll from devastating floods passes 1,200.\r\nAccess to clean water was … [+2057 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Flood-hit Pakistan breaches largest freshwater lake to avert overflow - Reuters",
                    "description": "Authorities in flood-hit Pakistan strategically breached the country's largest freshwater lake on Sunday, a minister said, displacing up to 100,000 people from their homes but saving more densely populated areas from gathering flood water.",
                    "url": "https://www.reuters.com/world/asia-pacific/flood-hit-pakistan-breaches-largest-freshwater-lake-avert-overflow-2022-09-04/",
                    "urlToImage": "https://www.reuters.com/resizer/4Map9kg5Eqyi3QTBnI4tECQag1A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PYDN37JPHVKU7H3OXATIKK3LMI.jpg",
                    "publishedAt": "2022-09-04T13:22:00Z",
                    "content": "KARACHI, Pakistan, Sept 4 (Reuters) - Authorities in flood-hit Pakistan strategically breached the country's largest freshwater lake on Sunday, a minister said, displacing up to 100,000 people from t… [+2398 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                    },
                    "author": "Germain Lussier",
                    "title": "The Lion King Prequel, Mufasa, Isn't What You're Expecting",
                    "description": "Two years ago, news that Oscar-winning filmmaker Barry Jenkins was making a prequel to The Lion King made everyone scratch their heads. What the heck would that be and who asked for that? Well, finally, at the D23 Expo, Jenkins showed up to explain what it wa…",
                    "url": "https://gizmodo.com/lion-king-prequel-mufasa-barry-jenkins-disney-d23-expo-1849520218",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/27929df8b0a6d1680fa8d48ed5be9689.jpg",
                    "publishedAt": "2022-09-10T02:00:00Z",
                    "content": "Two years ago, news that Oscar-winning filmmaker Barry Jenkins was making a prequel to The Lion King made everyone scratch their heads. What the heck would that be and who asked for that? Well, final… [+1966 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Senegal's pink lake threatened by flood waters after downpour - Reuters.com",
                    "description": "After days of torrential rain, salt miner Moussa Diare could only watch in despair as flood waters breached a meters-wide gap on the banks of Senegal's Pink Lake and washed away thousands of dollars worth of salt mounds he had gathered.",
                    "url": "https://www.reuters.com/world/africa/senegals-pink-lake-threatened-by-flood-waters-after-downpour-2022-09-09/",
                    "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=109",
                    "publishedAt": "2022-09-09T10:02:00Z",
                    "content": "NIAGA, Senegal, Sept 9 (Reuters) - After days of torrential rain, salt miner Moussa Diare could only watch in despair as flood waters breached a meters-wide gap on the banks of Senegal's Pink Lake an… [+2903 chars]"
                },
                {
                    "source": {
                        "id": "bbc-news",
                        "name": "BBC News"
                    },
                    "author": "https://www.facebook.com/bbcnews",
                    "title": "Gadchiroli: The Indian tribal families living on a highway with animals",
                    "description": "After floods ravaged their homes, tribal families in Maharashtra have been forced to live on a highway.",
                    "url": "https://www.bbc.co.uk/news/world-asia-india-62711069",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15EF9/production/_126494898_familyshelerednearroad.jpg",
                    "publishedAt": "2022-08-30T01:05:04Z",
                    "content": "By Janhavee MooleBBC Marathi\r\n\"It's been over a month of living with nothing,\" Neelakka Modem, a tribal woman from the western Indian state of Maharashtra, says gloomily as rain trickles down her ric… [+5802 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Guardian"
                    },
                    "author": "Nathan Chung in Shanghai",
                    "title": "China ‘wild trip’ deaths put social media influencers under spotlight",
                    "description": "Posts touting off-grid locations as ‘secret resorts’ have fuelled a travel craze that is now being criticised over risks to public safety Chinese social media influencers and their platforms have come under fire for posts about “wild trips” – or visits to off…",
                    "url": "https://amp.theguardian.com/world/2022/aug/19/china-wild-trip-deaths-put-social-media-influencers-under-spotlight",
                    "urlToImage": "https://i.guim.co.uk/img/media/1c3eee005cbcbdb4714aa442051038e9f62995a4/0_416_6240_3744/master/6240.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=54878382bdee29fe07a65e457e4f7e12",
                    "publishedAt": "2022-08-19T02:40:48Z",
                    "content": "Chinese social media influencers and their platforms have come under fire for posts about wild trips or visits to off-grid locations after a huge flood killed seven tourists in Sichuan province.\r\nThe… [+3939 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Guardian"
                    },
                    "author": "Shah Meer Baloch in Islamabad",
                    "title": "‘People are getting sick’: destitution in flood-hit Pakistan",
                    "description": "With their homes destroyed by worst flooding in living memory, people in Jaffarabad appeal for helpIn the midst of swamps of flood water, hundreds of people who fled one of the worst-hit districts of Pakistan pitched tents on the only high ground they could f…",
                    "url": "https://amp.theguardian.com/world/2022/aug/28/people-are-getting-sick-destitution-in-flood-hit-pakistan",
                    "urlToImage": "https://i.guim.co.uk/img/media/a180fc537b32a8129a8f75b7575e720b27b1b053/0_109_3500_2099/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9becd9c4dd311cd359d5c5f4d4d33acc",
                    "publishedAt": "2022-08-28T16:21:49Z",
                    "content": "In the midst of swamps of flood water, hundreds of people who fled one of the worst-hit districts of Pakistan pitched tents on the only high ground they could find on the raised banks of the Saifulla… [+2769 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Guardian"
                    },
                    "author": "Shah Meer Baloch in Islamabad",
                    "title": "Pakistan floods death toll nearing 1,000, say officials",
                    "description": "More than 33 million people have been displaced as destructive monsoon rains continue to wreak havocFlash floods triggered by destructive monsoon rains across much of Pakistan have killed nearly 1,000 people and injured and displaced thousands more since June…",
                    "url": "https://amp.theguardian.com/world/2022/aug/27/pakistan-floods-death-toll-nearing-1000-say-officials",
                    "urlToImage": "https://i.guim.co.uk/img/media/057b763602d9a0c0020b77de90f79125dd6f8d09/0_326_5760_3456/master/5760.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2728d5227bcf2939b71138efd63a2c36",
                    "publishedAt": "2022-08-27T12:47:19Z",
                    "content": "Flash floods triggered by destructive monsoon rains across much of Pakistan have killed nearly 1,000 people and injured and displaced thousands more since June, officials said.\r\nThe new death toll ca… [+3853 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Pakistan struggles to avert danger as floods rise, death toll tops 1300 - Reuters",
                    "description": "Pakistani authorities are struggling to prevent the country's biggest lake bursting its banks and inundating nearby towns after unprecedented flooding, while the disaster management agency on Monday raised its toll of flood deaths by another 24.",
                    "url": "https://www.reuters.com/world/asia-pacific/pakistan-struggles-avert-danger-floods-rise-death-toll-tops-1300-2022-09-05/",
                    "urlToImage": "https://www.reuters.com/resizer/4Map9kg5Eqyi3QTBnI4tECQag1A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PYDN37JPHVKU7H3OXATIKK3LMI.jpg",
                    "publishedAt": "2022-09-05T07:46:00Z",
                    "content": "ISLAMABAD/KARACHI, Sept 5 (Reuters) - Pakistani authorities are struggling to prevent the country's biggest lake bursting its banks and inundating nearby towns after unprecedented flooding, while the… [+2304 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Chile battles flood of 'half truths' as constitution vote nears - Reuters Canada",
                    "description": "A Chilean constitution that bans private property and allows abortions in the ninth month of a pregnancy. Private companies counting votes. A flood of prisoners and recent migrants allowed to vote in the upcoming constitutional referendum.",
                    "url": "https://www.reuters.com/world/americas/chile-battles-flood-half-truths-constitution-vote-nears-2022-08-29/",
                    "urlToImage": "https://www.reuters.com/resizer/S4c48FPi4nggW9YlmMs04RFNXrM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y6OX6LYAQFNGHH4KJXSELQGBIY.jpg",
                    "publishedAt": "2022-08-29T11:05:00Z",
                    "content": "SANTIAGO, Aug 29 (Reuters) - A Chilean constitution that bans private property and allows abortions in the ninth month of a pregnancy. Private companies counting votes. A flood of prisoners and recen… [+4919 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "New Zealand faces 'big task' in recovering from heavy rains, floods - Reuters",
                    "description": "New Zealand retained a state of emergency in parts of its flood-battered South Island on Sunday as authorities weighed damage in the region hardest hit by four days of torrential rain.",
                    "url": "https://www.reuters.com/world/asia-pacific/new-zealand-faces-big-task-recovering-heavy-rains-floods-2022-08-21/",
                    "urlToImage": "https://www.reuters.com/resizer/pDWx3AP6LPx-NXcfCGBtgva_Wlw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TSDQXLGXVJIDBBACMWLUITCUFQ.jpg",
                    "publishedAt": "2022-08-21T02:19:00Z",
                    "content": "Aug 21 (Reuters) - New Zealand retained a state of emergency in parts of its flood-battered South Island on Sunday as authorities weighed damage in the region hardest hit by four days of torrential r… [+1567 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Mexico's president draws ire after navy helicopter flies in baseball mascot - Reuters",
                    "description": "President Andres Manuel Lopez Obrador is facing a flood of criticism after Mexico's navy lent a military helicopter to fly in his home team's mascot at a major baseball playoff during a week of violent unrest elsewhere in the country.",
                    "url": "https://www.reuters.com/world/americas/mexicos-president-draws-ire-after-navy-helicopter-flies-baseball-mascot-2022-08-12/",
                    "urlToImage": "https://www.reuters.com/resizer/pNK6Q71bk7Yw9DTGKKw3zNFERFo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KWNXSWA2FZMOLLK5UCBZSRFUKA.jpg",
                    "publishedAt": "2022-08-12T21:27:00Z",
                    "content": "MEXICO CITY, Aug 12 (Reuters) - President Andres Manuel Lopez Obrador is facing a flood of criticism after Mexico's navy lent a military helicopter to fly in his home team's mascot at a major basebal… [+2255 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Water recedes in parts of India's Bengaluru, residents venture out - Reuters India",
                    "description": "Flood waters receded on Wednesday in India's technology hub of Bengaluru, allowing normal life to resume in parts of the city after two days of incessant rain brought chaos and killed at least one person.",
                    "url": "https://www.reuters.com/world/india/water-recedes-parts-indias-bengaluru-residents-venture-out-2022-09-07/",
                    "urlToImage": "https://www.reuters.com/resizer/Y3QvyAGIvEYPpIQyjwTnvzovvU8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7R5SHOVITFODTK3RXBC5R7WHJE.jpg",
                    "publishedAt": "2022-09-07T05:41:00Z",
                    "content": "BENGALURU, Sept 7 (Reuters) - Flood waters receded on Wednesday in India's technology hub of Bengaluru, allowing normal life to resume in parts of the city after two days of incessant rain brought ch… [+1400 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": "Reuters Staff",
                    "title": "Many more children may die in Pakistan after floods, UN says - Reuters.com",
                    "description": "The United Nations children's agency (UNICEF) said on Friday there was a risk of \"many more\" child deaths in Pakistan from disease after floods claimed the lives of around 400.",
                    "url": "https://www.reuters.com/article/pakistan-weather-floods-aid-idUSKBN2Q30K1",
                    "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20220902&t=2&i=1607772415&r=LYNXMPEI810A0&w=800",
                    "publishedAt": "2022-09-02T09:26:00Z",
                    "content": "By Reuters Staff\r\nFILE PHOTO: Flood victims use an inflatable tube as they travel in flood waters, following rains and floods during the monsoon season, in Dera Allah Yar, Jafferabad, Pakistan August… [+687 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "After deluge, climate change fears make S.Korea prioritise Seoul flood defences - Reuters",
                    "description": "The heaviest rain in Seoul in 115 years has spurred the South Korean capital to revive a $1.15 billion plan to improve drainage after floods exposed how even the affluent Gangnam district is vulnerable to climate change-driven extreme weather.",
                    "url": "https://www.reuters.com/world/asia-pacific/after-deluge-climate-change-fears-make-skorea-prioritise-seoul-flood-defences-2022-08-11/",
                    "urlToImage": "https://www.reuters.com/resizer/oHa5W91FzoQvfX-1_SnGa_B9mVs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6FGMDF56KRLU7HSHNKEM2RIN2Q.jpg",
                    "publishedAt": "2022-08-11T10:03:00Z",
                    "content": "SEOUL, Aug 11 (Reuters) - The heaviest rain in Seoul in 115 years has spurred the South Korean capital to revive a $1.15 billion plan to improve drainage after floods exposed how even the affluent Ga… [+3340 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "From furnace to flood: world's hottest city in Pakistan now under water - Reuters",
                    "description": "Not long ago, Sara Khan, principal at a school for disadvantaged girls in Jacobabad in southern Pakistan, looked on in alarm as some students passed out from the heat - the city was the world's hottest at one point in May.",
                    "url": "https://www.reuters.com/world/asia-pacific/furnace-flood-worlds-hottest-city-pakistan-now-under-water-2022-08-31/",
                    "urlToImage": "https://www.reuters.com/resizer/LVq34cAtOz9PXyK923Q1zecyejs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AOHWR6NOJJM5HE3IJNOXTFJL4M.jpg",
                    "publishedAt": "2022-08-31T14:30:00Z",
                    "content": "JACOBABAD, Pakistan, Aug 31 (Reuters) - Not long ago, Sara Khan, principal at a school for disadvantaged girls in Jacobabad in southern Pakistan, looked on in alarm as some students passed out from t… [+5139 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Pakistan flood toll rises with 25 children among 57 more deaths - Reuters.com",
                    "description": "The toll from cataclysmic floods in Pakistan continued to climb on Saturday with 57 more deaths, 25 of them children, as the country grapples with a relief and rescue operation of near unprecedented scale.",
                    "url": "https://www.reuters.com/world/asia-pacific/pakistan-flood-toll-rises-with-25-children-among-57-more-deaths-2022-09-03/",
                    "urlToImage": "https://www.reuters.com/resizer/zQuCSBsiXcFVBredPx6EZJemnMM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/65SSJ3NM5BJO3HDXFHQU3QZVVQ.jpg",
                    "publishedAt": "2022-09-03T09:58:00Z",
                    "content": "KARACHI, Pakistan, Sept 3 (Reuters) - The toll from cataclysmic floods in Pakistan continued to climb on Saturday with 57 more deaths, 25 of them children, as the country grapples with a relief and r… [+2864 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Flood-hit Pakistan works to prevent overflow of biggest lake - Reuters",
                    "description": "Pakistan was scrambling on Tuesday to widen a breach in its biggest lake and prevent the waters from overflowing to swamp nearby towns, so worsening unprecedented floods that have inundated a third of the South Asian nation.",
                    "url": "https://www.reuters.com/world/asia-pacific/flood-hit-pakistan-works-prevent-overflow-biggest-lake-2022-09-06/",
                    "urlToImage": "https://www.reuters.com/resizer/zfiDBdiZsfKWRcvKCfSWgQPBfM8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RNX5HUF3CJLAHFWYKSWK4AQQHU.jpg",
                    "publishedAt": "2022-09-06T07:49:00Z",
                    "content": "JAMSHORO, Pakistan, Sept 6 (Reuters) - Pakistan was scrambling on Tuesday to widen a breach in its biggest lake and prevent the waters from overflowing to swamp nearby towns, so worsening unprecedent… [+1984 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "UN chief Guterres arrives in Pakistan to support flood response - Reuters.com",
                    "description": "U.N. Secretary-General António Guterres arrived in Pakistan on Friday to support its response to devastating floods and was due to meet Prime Minister Shehbaz Sharif and visit inundated areas on his two-day visit.",
                    "url": "https://www.reuters.com/world/asia-pacific/un-chief-guterres-arrives-pakistan-support-flood-response-2022-09-09/",
                    "urlToImage": "https://www.reuters.com/resizer/p9IZjZQInrwqgNJJYzepTrPgSVw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4NIJF6ATEVOQZPLXT3ODKCMLAE.jpg",
                    "publishedAt": "2022-09-09T04:22:00Z",
                    "content": "ISLAMABAD, Sept 9 (Reuters) - U.N. Secretary-General António Guterres arrived in Pakistan on Friday to support its response to devastating floods and was due to meet Prime Minister Shehbaz Sharif and… [+1810 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Eastern Australia faces flood risk this spring, weather bureau warns - Reuters",
                    "description": "Australia faces a 70% chance of La Nina returning this spring, with a high likelihood of wet conditions over the next three months, just after massive floods hit the east coast earlier this year, the country's weather bureau said on Tuesday.",
                    "url": "https://www.reuters.com/world/asia-pacific/eastern-australia-faces-flood-risk-this-spring-weather-bureau-warns-2022-08-16/",
                    "urlToImage": "https://www.reuters.com/resizer/SYxwTeGrusk-LXaSOI7xMCdO4TU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QRO46BGT3NJRXKWGLMNMIYZGUQ.jpg",
                    "publishedAt": "2022-08-16T07:42:00Z",
                    "content": "MELBOURNE, Aug 16 (Reuters) - Australia faces a 70% chance of La Nina returning this spring, with a high likelihood of wet conditions over the next three months, just after massive floods hit the eas… [+1032 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "U.S. announces $30 mln in support for Pakistan flood response - Reuters",
                    "description": "The United States will provide $30 million in support for Pakistan following severe rains and flooding, the U.S. embassy in Islamabad announced on Tuesday.",
                    "url": "https://www.reuters.com/world/us-announces-30-mln-support-pakistan-flood-response-2022-08-30/",
                    "urlToImage": "https://www.reuters.com/resizer/tXNNlgI3ohExzCRZUJ3haaGx82Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RD5WBRFXZZPH5EH7UHQQ2DSLYI.jpg",
                    "publishedAt": "2022-08-30T14:40:00Z",
                    "content": "ISLAMABAD, Aug 30 (Reuters) - The United States will provide $30 million in support for Pakistan following severe rains and flooding, the U.S. embassy in Islamabad announced on Tuesday.\r\n\"The United … [+420 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Heat-weary Chongqing, Sichuan now on flood alert amid torrential rain - Reuters",
                    "description": "A southwestern part of China that has suffered scorching temperatures this month is now on alert for flooding amid days of torrential rain.",
                    "url": "https://www.reuters.com/world/china/heat-weary-chongqing-sichuan-now-flood-alert-amid-torrential-rain-2022-08-29/",
                    "urlToImage": "https://www.reuters.com/resizer/IGcRCcszhrY9X6vMS4NzmgoWdHM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZKAFC33G7NJTRHSKMHCXGFY3NI.jpg",
                    "publishedAt": "2022-08-29T04:02:00Z",
                    "content": "BEIJING, Aug 29 (Reuters) - A southwestern part of China that has suffered scorching temperatures this month is now on alert for flooding amid days of torrential rain.\r\nDownpours in the sprawling man… [+1510 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "South Pakistan braces for surge of flood water flowing from north - Reuters.com",
                    "description": "Southern Pakistan braced for more flooding on Thursday as a surge of water flowed down the Indus river, compounding the devastation in a country a third of which is already inundated by a disaster blamed on climate change.",
                    "url": "https://www.reuters.com/world/asia-pacific/south-pakistan-braces-surge-flood-water-flowing-north-2022-09-01/",
                    "urlToImage": "https://www.reuters.com/resizer/kdcNG_1QkOi5-BzLFFEW3M7vH7k=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XBIT6YQO2JKZBBH3D7J5JXPNAE.jpg",
                    "publishedAt": "2022-09-01T09:13:00Z",
                    "content": "DADU, Pakistan, Sept 1 (Reuters) - Southern Pakistan braced for more flooding on Thursday as a surge of water flowed down the Indus river, compounding the devastation in a country a third of which is… [+2819 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NPR"
                    },
                    "author": "Diaa Hadid",
                    "title": "Mothers tell how Pakistan's monsoon floods have upended their lives",
                    "description": "In the city of Nowshera, tent cities for flood refugees are springing up on college campuses. At one such haven, mothers spoke to NPR about their struggle to survive.",
                    "url": "https://www.npr.org/sections/goatsandsoda/2022/09/02/1120541577/mothers-tell-how-pakistans-monsoon-floods-have-upended-their-lives",
                    "urlToImage": "https://media.npr.org/assets/img/2022/09/01/_mg_0417_wide-38850c9a99c479e589e4028464825d7483d3bfe6.jpg?s=1400",
                    "publishedAt": "2022-09-02T15:09:48Z",
                    "content": "Left to right: Nazia, Mubina and Leila saw their homes washed away in the flooding. They now share a tent at a technical college that has been converted into a camp for displaced people.\r\nDiaa Hadid\r… [+9188 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Guardian"
                    },
                    "author": "Associated Press",
                    "title": "Aid pours into Pakistan as deaths from floods pass 1,200",
                    "description": "Planes bring food, medicine and tents to disaster zone, with officials blaming floods on climate changePlanes carrying fresh supplies are forming a humanitarian air bridge to flood-ravaged Pakistan as the death toll passed 1,200, officials have said with fami…",
                    "url": "https://amp.theguardian.com/world/2022/sep/02/aid-pours-into-pakistan-as-deaths-from-floods-pass-1200",
                    "urlToImage": "https://i.guim.co.uk/img/media/41a2023d4bf008ded820b10a99482a9cd5b0e323/109_0_3281_1969/master/3281.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4485fb579a3dbdebf702b5609929b27c",
                    "publishedAt": "2022-09-02T07:06:00Z",
                    "content": "Planes carrying fresh supplies are forming a humanitarian air bridge to flood-ravaged Pakistan as the death toll passed 1,200, officials have said with families and children at special risk of diseas… [+3766 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Yahoo Entertainment"
                    },
                    "author": "Associated Press Videos",
                    "title": "Flood damages highway linking LA and Phoenix",
                    "description": "Officials say the main highway from Los Angeles to Phoenix has been damaged by a flash flood that washed out lanes on the eastbound side of Interstate 10 in ...",
                    "url": "https://news.yahoo.com/flood-damages-highway-linking-la-214650683.html",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ElpsQpZzobbPuIzt4FFMCw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/hd/cp-video-transcode/production/ec143af4-58af-33eb-bab9-3deeba2037dd/2022-08-25/21-51-56/bc41c01b-a90a-535d-84e2-38369464ac2b/stream_1920x1080x0_v2_3_0.jpg",
                    "publishedAt": "2022-08-25T21:46:50Z",
                    "content": "Tropical storm Ma-On caused three deaths in the Philippines, its disaster agency reported on Thursday, with the storm currently headed towards southeastern China. Two people were confirmed dead, both… [+357 chars]"
                },
    ]
    useEffect(()=>{
        async function fetchMoviesJSON() {
            const response = await fetch('https://newsapi.org/v2/everything?q=flood&apiKey=5e04192a3bca413590806bef4edcfac1');
            const movies = await response.json();
            return movies;
          }
          fetchMoviesJSON().then(data => {
            console.log(data);
   extra=data.articles // fetched movies
          });
        
    },[])

  return (
    <>

<h1 className={style.news_head}>news</h1>

      {
        extra.slice(0,50).map((ele) => {
          return (
            <div className={style.ver_slid}>
              <div className={style.ver_1_slid}>
                <h1 className={style.ver_slid_h1}>{ele.title}</h1>
                <h3 className={style.ver_slid_h3}>{ele.publishedAt}</h3>
                <p className={style.ver_slid_p}>{ele.description}</p>
              </div>
              <div className={style.ver_2_slid}>
                <img src={ele.urlToImage} alt="" className={style.ver_slid_img} />
              </div>

            </div>
          )
        })
      }
    </>
  )
}

export default News