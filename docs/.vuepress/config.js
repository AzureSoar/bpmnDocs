module.exports = {
    title: 'bpmn.js文档',
    description: 'bpmn.js是一个BPMN2.0渲染工具包和web建模器, 使得画流程图的功能在前端来完成.',
    // heroImage: `/hero.png`,
    head: [
        // ['link', {
        //     rel: 'icon',
        //     href: `/hero.png`
        // }]
    ],
    dest: './docs/.vuepress/dist',
    base:'/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            // { text: '产品简介', link: '/intro/' },
            { text: '快速上手', link: '/intro' },
            { text: 'http请求', link: '/http' },
            { text: '事件', link: '/event' },
            // { text: 'API', link: '/API' },
            // { text: '常见问题', link: '/FAQ/' },
            // { text: '服务条款', link: '/protocol/' },
            // {
            //   text: 'Languages',
            //   items: [
            //     { text: 'Chinese', link: '/language/chinese' },
            //     { text: 'English', link: '/language/english' }
            //   ]
            // },
            // { text: 'External', link: 'https://www.baidu.com' },
        ],
        sidebar: 'auto',
        //   sidebar:{
            
        //     '/QRCode/':[
        //         {
        //             title:'公共二维码服务文档',
        //             collapsable:false,
        //             children:[
        //                 'intro',
        //                 'start',
        //                 'API',
        //                 'FAQ',
        //                 'protocol'
        //             ],
        //             sidebarDepth: 7
                
        //         }        
        //             // {
        //             //     title:'快速入门',
        //             //     collapsable:false,
        //             //     children:[
        //             //         'start'
        //             //     ]
                
        //             // },
        //             // {
        //             //     title:'API说明文档',
        //             //     collapsable:false,
        //             //     children:[
        //             //         'API'
        //             //     ]
                
        //             // },
        //             // {
        //             //     title:'常见问题',
        //             //     collapsable:false,
        //             //     children:[
        //             //         'FAQ'
        //             //     ]
                
        //             // },
        //             //     {
        //             //     title:'服务条款',
        //             //     collapsable:false,
        //             //     children:[
        //             //         'protocol'
        //             //     ]
                
        //             // },
            
        //     ],
        //     '/ICR/':[
        //         {
        //             title:'ICR智能识别服务文档',
        //             collapsable:false,
        //             children:[
        //                 'intro',
        //                 'start',
        //                 'API',
        //                 'FAQ',
        //                 'protocol'
        //             ],
        //             sidebarDepth: 5

        //         }
        //     ]
        //   },
        //   sidebarDepth:4
        // plugins: [
        //     ['@vuepress/search', {
        //       searchMaxSuggestions: 10
        //     }]
        //   ]


    },
}