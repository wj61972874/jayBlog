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
                time: '2020.11 - 2024.10',
                profile:
                    '特赞致力于通过中国领先、世界一流的平台化和智能化技术，建构创意内容的数字新基建。以企业级内容数据资产管理为中心，特赞打造了连接企业内外「内容生产」和「内容流转」的数字化平台。',
                post: '高级前端工程师',
                works: [
                    '内容生产团队中管理后台系统网页功能开发和维护；',
                    '内容生产业务通用组件的开发和维护；',
                    '创新项目MuseLink，MuseTransfer和MuseArt等前端项目的构建和开发；',
                    '特赞云原生中台前端管理系统的搭建和开发;',
                    'AIGC大会官网的搭建和开发；',
                    '内容管理团队数字资产管理系统的需求迭代和开发;',
                    '内容管理团队私有化部署客户的定制化软件的搭建和开发;',
                ],
                image: '/assets/images/resume/experiences/tezign.jpeg',
            },
            {
                company: '上海小佩网络科技有限公司',
                time: '2020.04 - 2020.11',
                profile:
                    '小佩网络科技以科技提升宠物生活品质为产品设计理念，致力于为宠物创造各种智能产品，有自主研发、设计、服务、医疗团队，致力于为用户打造一站式消费平台。',
                post: '前端工程师',
                works: [
                    '小佩SAAS系统的前端页面开发和维护；',
                    '小佩小程序的开发和维护；',
                    '魔鬼鱼官网的SSR开发；',
                ],
                image: '/assets/images/resume/experiences/xiaopei.jpg',
            },
            {
                company: '上海华钦信息科技有限公司',
                time: '2018.08 - 2020.04',
                profile:
                    '华钦信息科技作为全球信息技术咨询和解决方案服务提供商，华钦科技专注于向中国及全球银行、保险和金融领域机构提供服务。',
                post: '软件工程师',
                works: [
                    '负责花旗银行web端财富管理模块的功能开发；',
                    '负责掌上花旗银行APP积分模块功能开发；'
                ],
                image: '/assets/images/resume/experiences/huaqin.jpg',
            },

        ]
    }

    getProjects() {
        return [
            {
                name: '特赞DAM数字资产管理系统',
                company: '特赞（上海）信息科技有限公司',
                time: '2023.07 - 2024.10',
                profile:
                    '特赞DAM是创意内容的数字新基建，是品牌用于统一组织、存储、检索和分发内容的数字系统。生成式人工智能和大模型技术的发展，带来了特赞DAM系统中的Content + AI基础设施的重大提升。',
                duties: [
                    '负责内容多云上传功能开发（阿里云、华为云、腾讯云、百度云、亚马逊云、AWS-S3以及NAS等）；',
                    '负责内容审批流功能的定制化开发、迭代和维护，能够快速发起审批项目，灵活设置审阅方式；',
                    '独立负责各设计工具插件的开发，如FIGMA(导出至素材库插件)、即时设计(批量套版插件、AI智能延展插件、导出至素材库插件)、PS/AI/AE(MINI-DAM管理插件)等；',
                    '编写测试用例，进行功能测试',
                ],
                summary:
                    'DAM主项目系统庞大，由各个团队共同维护，每个人都有自己负责的模块，我主要负责DAM系统中的工作流模块、素材库模块。在这个过程中，熟悉了多人多功能同时协同迭代开发的方式，增加了解决代码冲突的经验。以及在整个DAM团队中，负责为私有化部署的客户提供定制化软件，如Adobe的PS/AI/AE插件、Figma插件、即时设计插件的开发，这些插件有的和DAM管理系统进行数据打通，有的结合AI能力，对用户内容生产进行大幅提效和产出高质量高水准的内容。插件的开发过程让我学习到了更多的知识，如UXP/CEP开发知识，也是自己觉得最满意的作品，因为批量套版的插件的开发，为各租户公司的设计师团队达到了指数级的提效，收获了满满好评。',
                link: 'https://www.tezign.com/page/',
                image: '/assets/images/resume/projects/tezign.jpeg',
            },
            {
                name: '云原生管理平台',
                company: '特赞（上海）信息科技有限公司',
                time: '2023.01 - 2023.07',
                profile:
                    '云原生管理平台是一个现代化的数据管理架构，旨在充分利用云计算的灵活性和可扩展性，以支持特赞租户在数据驱动决策过程中的高效性与敏捷性。它通过将数据整合到一个中心位置，使用中台能力可配置化以及数据化，帮助用户快速生成报告、仪表盘，并提供数据洞察，推动业务决策，进而提高业务和运营效率。',
                duties: [
                    '独立开发，监控前端系统从构建、开发到维护都是独自一人实现；负责用户登录以及用户权限模块的后端开发；',
                    '平台前端系统技术栈采用的是React全家桶，个人主动负责的后端部分使用java+springBoot+mysql，并结合飞书消息卡片将权限申请功能对接到飞书用户审批上；',
                    '在组件上使用AntdPro组件库，提高了开发效率；',
                    '平台前端系统中使用了Echart.js和AntV库进行数据可视化的展示，对于数据的展示有了更深的了解；',
                ],
                summary:
                    '该项目系统前端基础架构是独自一人完成构建和开发任务，由于系统迭代需求比较快，能够尽快的给到数据监控页面方便ZMRTC开发人员进行问题的排查，所以前端系统当时选择选择React全家桶，监控数据图表选择Echart.js库进行数据可视化的展示，然后中后期，，由于之前对java语言技术了解不是很多，为了能够对管理平台进行用户登录和用户权限的校验和申请，我主动申请后端仓库权限，并基于云原生后台代码仓库，进行登录和权限模块并结合飞书消息卡片通知API进行后端功能开发。在这一阶段对java语言进行了查漏补缺式的快速的学习。由于独自一个人完成了项目前端和部分后端的开发，总的来说的话，让我对项目前后端分离开发流程又有了深刻的了解，以后台开发的角度来思考，如何封装数据让前端开发人员方便来进行数据的展示，而且还重新温故了早先学习的技术java这一语言技术，然后同时也学习了数据库MYSQL，拓广技术的知识面。',
                link: 'https://cloudnative.tezign.com',
                image: '/assets/images/resume/projects/cloud.png',
            },
            {
                name: 'AIGC创建者大会官网',
                company: '特赞（上海）信息科技有限公司',
                time: '2023.02 - 2023.05',
                profile:
                    'AIGC创建者大会是为AIGC的建设者及创作者搭建了双向互动的“舞台”。上海市经济和信息化委员会的指导下，由特赞-Tezign主办，同济大学设计创意学院、上海创新创意设计研究院、上海设计周、未尽研究联合主办。为助力上海建设一流“设计之都”的目标，推动“数字设计”在价值链、产业链、创新链、服务链四链协同，2023年5月7日，首届“数字设计： AIGC创建者大会”在上海举办。',
                duties: [
                    '独立负责AIGC创建者大会官网的前端开发，使用的技术栈为react+nextjs+sass+typescript;',
                    '使用nextjs服务端渲染框架，提高页面的首屏加载速度，提升SEO优化;',
                    '采用json配置化数据进行官网活动内容和参会人员的展示，方便后期维护和更新;',
                    '使用AOS动画库进行页面元素的动画展示，增加页面的视觉效果;',
                ],
                summary:
                    '由于该项目独自一人完成的，所以对于项目的开发流程有了更为深刻的了解，从技术框架的选择到项目初始化的构建的过程中遇到了很多的问题，例如由于活动时序、活动参会人员、演讲主题的内容的不断调整，但是公司资源有没有调配到后端工程师来配合这个活动官网的开发。所以在进行项目搭建设计之初，官网页面的内容，就设计从配置化JSON文件中读取，JSON用来管理活动内容，并有运营人员进行配置，然后我再上传至OSS上进行数据读取，这种方式极大的提高了官网内容更新效率，也避免了官网重复发版的不足。而且因为是AIGC活动官网，受上海市政府和各大媒体以及各AI公司的关注，项目架构考虑之初就决定采用轻量级SSR技术框架Nextjs，用来做更好的SEO优化。而且在官网上还接入了chatgpt对话功能，内置了一些pre pormats,用户访客用户更好的进行人机对话对活动进行进一步了解。最终AIGC大会成功举办，吸引百万级的关注，而且搜索相关“AIGC大会”相关内容，都能够出现我做的这个官网页面，令人欣慰。',
                link: 'https://whoisaigc.com/',
                image: '/assets/images/resume/projects/aigc.png',
            },
            {
                name: '特赞内容生产后台管理系统',
                company: '特赞（上海）信息科技有限公司',
                time: '2020.11 - 2022.12',
                profile:
                    '内容生产后台管理系统是特赞基地，是内容生产的数字化管理平台，包含数据面板，CRM/业务管理，数字资源/业务/商城运营等模块，具有从销售线索，到销售机会，企业项目，创意方报价，再到业务签单，业务交互的完整的销售过程，同时还管理创意方和案例的数字资源，以及存储创新产品配置信息。',
                duties: [
                    '主要负责CRM/业务管理，Muse创新项目管理等模块的持续更新迭代，以及数字资源功能的改版升级;',
                    '独立负责MuseLink PC端和小程序端创新项目持续更新迭代，以及接入web3.js和ethers.js等区块链相关的SDK，接入walletconnect、metamask等钱包实现数字藏品可视化;',
                    '封装业务组件，在不同的项目中复用，减少重复代码，提高代码使用率;',
                ],
                summary:
                    '入职后接手的项目，该系统使用的技术栈为react+sass+typescript+webpack，由于系统内容庞大，由多人合作共同维护，每个人都负责自己的模块，熟悉了多人多功能同时协同迭代开发的方式，增加了解决代码冲突的经验，由于项目使用react17版本，同时熟练了react hooks的使用，由于接手钱项目迭代时间长，项目中存在很多没有使用的页面和组件代码，使得项目体积臃肿，使用DeadCodePlugin插件检测删除无用代码，同时内容模块多，每次构建发布都需要等待很长的时间，不便于开发和测试环境的功能验证，通过升级webpack到最新版本，配合webpack缓存，以及Eslint+Stylelint操作前置到Commit时等方式，大大缩减了构建的时间，提高开发效率和体验。同时在迭代间隙期间，还会穿插一些创新Web项目和小程序的开发，创新项目采用的技术有umijs，nextjs以及tarojs等，学习了新的前端框架。',
                link: 'https://muselink.cc/',
                image: '/assets/images/resume/projects/muselink.svg',
            },
            {
                name: '小佩门店SAAS系统',
                company: '上海小佩网络科技有限公司',
                time: '2020.04 - 2020.11',
                profile: '门店SAAS系统是小佩网络科技的一款门店管理系统，主要用于宠物店的门店管理，包括门店的商品管理、订单管理、会员管理、营销管理等。',
                duties: [
                    '负责小佩门店SAAS系统的前端页面开发和维护，使用的技术栈为angular+antd+less+rxjs;',
                    '负责小佩小程序的开发和维护，使用的技术栈为tarojs+typescript+less，帮助提升用户在线进行门店服务预约和小佩商品选购;',
                    '负责小佩宠物医疗SAAS系统的前端页面开发和维护，使用的技术栈为react+antd+less+redux，帮助对接的宠物医院进行宠物的医疗信息管理;',
                ],
                summary:
                    '该项目是小佩已有的做门店SAAS管理的老项目。其中门店系统是基于Angular技术栈的，医疗系统是基于React技术栈的，小程序是基于Taro技术栈的。这是第一次基础到企业级的SAAS管理系统项目和小程序的开发，在这个过程中了解到了租户的概念，以及如何做租户级别的数据隔离。并且医疗SAAS系统的功能开发和迭代维护，让自己学习到了新的技术栈React。小佩小程序的开发让自己接触到了Taro这个多端打包框架。使得自己的技术面更加广了。',
                link: '',
                image: '/assets/images/resume/projects/xiaopei.jpg',
            },
            {
                name: '花旗银行财富管理模块',
                company: '上海华钦信息科技有限公司',
                time: '2018.08 - 2020.04',
                profile: '花旗银行财富管理模块是花旗银行的一款财富管理系统，主要用于花旗银行的财富管理业务，包括财富管理产品的展示、购买、赎回、转换等。',
                duties: [
                    '使用Angular5+ + sass + typescript等技术进行项目的开发；',
                    '负责花旗银行web端财富管理模块的功能开发；',
                    '负责掌上花旗银行APP H5页面积分模块功能开发，并结合使用Cordova与native团队进行混合式开发；',
                ],
                summary:
                    '这是毕业入职以来，接触到的第一个公司项目。其实本身是以java开发工程师面进来的，但是由于花旗银行这边，新开辟一个业务线，需要Angular开发人员，然后我当时面试时候了解了一些Angular这个技术栈，于是就在花旗这边全面转Angular开发了。在这端开发过程中，学习到了Angular这个技术栈，并且开始慢慢深度的学习和运用前端技术如ES6、css、以及更加深度的js等。并且掌上银行的功能开发，让我对Hybrid App的开发模式有了一定的了解。',
                link: '',
                image: '/assets/images/resume/projects/huaqin.jpg',
            }
        ];
    }

    getBlogLink() {
        return 'http://jaygogo-aigc.top/home';
    }
}