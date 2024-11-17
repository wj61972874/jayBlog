import { Injectable } from '@angular/core';
import { DomainService } from '@app/services/domain.service';


@Injectable({
    providedIn: 'root'
})
export class ResumeContextService {
    constructor(private domainService: DomainService) { }

    getSocialAccounts() {
        const routePrefix = this.domainService.getDomain();
        return [
            {
                type: 'blog',
                icon: `${routePrefix}/assets/images/resume/social-account/blog.svg`,
                link: '#',
                name: '博客',
            },
            {
                type: 'github',
                icon: `${routePrefix}/assets/images/resume/social-account/github.svg`,
                link: 'https://github.com/wj61972874',
                name: 'Github',
            },
            {
                type: 'leetcode',
                icon: `${routePrefix}/assets/images/resume/social-account/leetcode.svg`,
                link: 'https://leetcode.cn/u/shi-hua-yu-jiu-w/',
                name: 'leetcode',
            },
            {
                type: 'zhihu',
                icon: `${routePrefix}/assets/images/resume/social-account/zhihu.svg`,
                link: 'https://www.zhihu.com/people/shen-qing-qian-tan-4-42',
                name: '知乎',
            },
            {
                type: 'weibo',
                icon: `${routePrefix}/assets/images/resume/social-account/weibo.svg`,
                link: 'https://weibo.com/5348862132/profile',
                name: '微博',
            },
        ];
    }

    getInformation() {
        return [
            {
                type: 'birthday',
                value: '1995.08.10',
            },
            {
                type: 'education',
                value: '安徽农业大学 · 旅游管理专业',
            },
            {
                type: 'graduation',
                value: '2018年',
            },
            {
                type: 'email',
                value: 'm15205519363@163.com',
            },
            {
                type: 'telephone',
                value: '15205519363',
            },
            {
                type: 'address',
                value: '上海',
            },
        ];
    }


    getSkills() {
        return [
            {
                type: 'html5',
                popover: 'HTML',
                percent: 85,
                contexts: [
                    '熟练HTML5与CSS3、DIV+CSS网页布局样式，了解HTML语义化；',
                    '熟悉流式布局和弹性盒子布局，能处理PC和移动端各主流浏览器的兼容问题；',
                ],
            },
            {
                type: 'css3',
                popover: 'CSS',
                percent: 80,
                contexts: ['熟练HTML5与CSS3、DIV+CSS网页布局样式；', '熟悉Sass、Less等CSS预处理器语言；'],
            },
            {
                type: 'javascript',
                popover: 'Javascript',
                percent: 85,
                contexts: [
                    '熟悉原生JavaScript，熟悉jQuery，了解Zepto；熟悉ES6特性；',
                    '熟悉gulp、webpack等工程化构建化工具，能够使用其进行相应的JS、CSS等代码检查、（图片）压缩、优化前端性能；',
                    '熟悉Typescript，能够使用其进行相关SDK的开发和维护；',
                ],
            },
            {
                type: 'es6',
                popover: 'ES6',
                percent: 80,
                contexts: ['熟悉ES6特性，能够使用其进行项目开发；'],
            },
            {
                type: 'react',
                popover: 'React',
                percent: 80,
                contexts: ['熟悉React等主流Web前端框架，能够独立开发SPA应用；'],
            },
            {
                type: 'angular',
                popover: 'Angular',
                percent: 75,
                contexts: ['熟悉Angular等主流Web前端框架，能够独立开发SPA应用；'],
            },
            {
                type: 'nodejs',
                popover: 'Node',
                percent: 70,
                contexts: ['了解nodejs，能够使用其搭建简单的服务器，如编写api接口、实现ssr等;'],
            },
            {
                type: 'java',
                popover: 'Java',
                percent: 55,
                contexts: ['了解java，能够阅读代码并且进行简单功能的开发。'],
            },

        ]
    }

    getExperiences() {
        return [
            {
                company: '特赞(上海)信息科技有限公司',
                time: '2021.09 - 2023.07',
                profile:
                    '特赞致力于通过中国领先、世界一流的平台化和智能化技术，建构创意内容的数字新基建。以企业级内容数据资产管理为中心，特赞打造了连接企业内外「内容生产」和「内容流转」的数字化平台。',
                post: '高级前端工程师',
                works: [
                    '内容生产团队中管理后台系统网页功能开发和维护；',
                    '内容生产业务通用组建的开发和维护；',
                    '创新项目MuseLink，MuseTransfer和MuseArt等前端项目的构建和开发；',
                    '特赞运维管理系统前端页面的开发和维护。',
                ],
                image: '/assets/images/resume/experiences/tezign.jpeg',
            },
            {
                company: '上海掌小门教育科技有限公司',
                time: '2018.11 - 2021.07',
                profile:
                    '掌门一对一是一个高端中小学在线教育辅导品牌，超万人资深教研团队，深耕在线教育15年。专注小、初、高全科在线1对1辅导，量身定制辅导方案的在线教育公司。',
                post: '研发工程师',
                works: [
                    '音视频监控数据展示以及数据统计系统的前后端开发；',
                    '音视频通信的ElectronSDK和WebSDK的开发和封装；',
                    '自研ZMRTC通道的WebSDK的开发。',
                ],
                image: '/assets/images/resume/experiences/zhangmen.png',
            },
            {
                company: '上海忻知信息科技有限公司',
                time: '2018.1 - 2018.11',
                profile:
                    '公司旗下的八爪鱼AI平台是一个智能内容服务平台，主营业务包括帮助内容生产商进行智能分发以及数据分析，同时提供内容决策服务，智能分析用户的需求，零成本解决粉丝获取、粉丝运营以及商业变现等问题。',
                post: '初级软件工程师（前端）',
                works: [
                    '官网构建以及页面内容的实现；',
                    '负责八爪鱼AI前台客户、后台管理平台页面研发；',
                    '负责页面的构建以及网页性能的优化；',
                    '官网SEO的优化；',
                    '小部分后台接口的实现。',
                ],
                image: '/assets/images/resume/experiences/bzy.jpg',
            },
            {
                company: '美味不用等（上海）信息科技股份有限公司',
                time: '2017.8 - 2017.12',
                profile:
                    '美味不用等(上海)美味不用等是专业的智慧餐饮服务商，通过B端SaaS服务和C端产品，解决餐厅的效率、管理、营销、成本和顾客就餐体验等方面的问题。 ',
                post: '前端开发工程师',
                works: [
                    '商户管理系统页面内容的开发和维护；',
                    '页面通用组件的封装；',
                    '代码以及流程规范化的构建；',
                    '网页性能的优化。',
                ],
                image: '/assets/images/resume/experiences/mwee.jpg',
            },
            {
                company: '群硕软件开发（上海）有限公司',
                time: '2014.7 - 2017.7',
                profile:
                    '群硕致力于提供广泛的软件开发服务和解决方案服务，综合运用最佳实践和领域知识以及一流开发工具和技术，我们为全球客户提供高附加值软件开发及解决方案服务。 ',
                post: '前端开发工程师',
                works: [
                    '公司旗下产品群脉SCRM前端页面的开发和维护；',
                    '公司旗下服务抱米SOS系统前端页面的开发和维护；',
                    '页面通用组件的封装。',
                ],
                image: '/assets/images/resume/experiences/augmentum.jpg',
            },
        ]
    }
}