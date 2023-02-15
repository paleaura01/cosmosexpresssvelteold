import MdiNewspaperVariantMultipleOutline from '../sidenavigation/icons/MdiNewspaperVariantMultipleOutline.svelte';



const articlesData = {
articles: [
    {
        id: 2,
        section: 'Article 2',
        date: 'Jan 01 2023 - Jan 15 2023',
        icon: MdiNewspaperVariantMultipleOutline,
        open: false,
        content: [
        {
        key: "A002C01",
        title: "Updates/Announcements",
        open: false,
        },
        {
        key: "A002C02",
        title: "Partnerships/Intergrations",
        open: false,
        },
        {
        key: "A002C03",
        title: "Threads/Infographics",
        open: false,
        },
        {
        key: "A002C04",
        title: "Technology/Infrastructure",
        open: false,
        },
        {
        key: "A002C05",
        title: "Validation",
        open: false,
        },
        {
        key: "A002C06",
        title: "Governance",
        open: false,
        },
        {
        key: "A002C07",
        title: "Security",
        open: false,
        },
        {
        key: "A002C08",
        title: "Testnet Announcements",
        open: false,
        },
        {
        key: "A002C09",
        title: "Airdrops",
        open: false,
        },
        ],
        },
        {
        id: 1,
        section: 'Article 1',
        date: 'Dct 15 - Dec 31, 2022',
        icon: MdiNewspaperVariantMultipleOutline,
        open: false,
        content: [
        {
        key: "A001C01",
        title: "Updates/Announcements",
        open: false,
        },
        {
        key: "A001C02",
        title: "Partnerships/Intergrations",
        open: false,
        },
        {
        key: "A001C03",
        title: "Threads/Infographics",
        open: false,
        },
        {
        key: "A001C04",
        title: "Technology/Infrastructure",
        open: false,
        },
        {
        key: "A001C05",
        title: "Validation",
        open: false,
        },
        {
        key: "A001C06",
        title: "Governance",
        open: false,
        },
        {
        key: "A001C07",
        title: "Security",
        open: false,
        },
        {
        key: "A001C08",
        title: "Testnet Announcements",
        open: false,
        },
        {
        key: "A001C09",
        title: "Airdrops",
        open: false,
        },
        ],
        },

],
}
export const {articles} = articlesData;
