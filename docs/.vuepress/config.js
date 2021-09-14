const { audios } = require("./audios")

module.exports = {
    lang: 'zh-CN',
    title: 'Maobb',
    description: 'Maobb Blog',

    themeConfig: {
        // logo: '/images/fgxs.jpg',
        head: [
            ['link', { rel: 'icon', href: '/images/logo.jpg' }],
            ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]],

        navbar: [
            { text: "首页", link: "/" },
            { text: "关于", link: "/about/" },
            {
                text: '电影',
                children: [
                    {
                        text: 'Surface',
                        link: '/films/Surface/'
                    },
                ],
            },
        ],
        repo: 'https://github.com/ismaobb/',
        editLink: false,
    },

    plugins: [
        [require('@vuepress-reco/vuepress-plugin-bgm-player'),
        {
            audios,
            autoplay: true,
        }]
    ]
}