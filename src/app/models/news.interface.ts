export interface Article {

    source?: {
        id?: any,
        name?: any
    };
    author?: any;
    title?: any;
    description?: any;
    url?: any;
    urlToImage?: any;
    publishedAt?: any;
    content?: any;
}

export interface SocialMediaButtons{
    class?: string;
    bgColor? :string;
}