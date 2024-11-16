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
                percent: 75,
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
                type: 'react',
                popover: 'React',
                percent: 80,
                contexts: ['熟悉React等主流Web前端框架，能够独立开发SPA应用；'],
            },
            {
                type: 'vue',
                popover: 'Vue',
                percent: 75,
                contexts: ['熟悉Vue等主流Web前端框架，能够独立开发SPA应用；'],
            },
            {
                type: 'nodejs',
                popover: 'Node',
                percent: 60,
                contexts: ['了解nodejs，能够使用其搭建简单的服务器;'],
            },
            {
                type: 'golang',
                popover: 'Go',
                percent: 55,
                contexts: ['了解golang，能够阅读代码并且进行简单功能的开发。'],
            },
            {
                type: 'python',
                popover: 'Python',
                percent: 50,
                contexts: ['了解python，能够阅读代码并且进行简单功能的开发。'],
            },
        ]
    }
}