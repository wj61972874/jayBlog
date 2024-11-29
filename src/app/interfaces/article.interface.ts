export interface IArticle {
    id: number;
    title: string;
    description: string;
    markdownSrc: string;
    createdAt: string;
    updatedAt: string;
    tags: string[];
}

export interface ITagCount {
    tagId: number;
    tagName: string;
    articleCount: number;
}