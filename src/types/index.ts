export interface Method {
    title: string;
    syntax?: string;
    description: string;
    example?: string;
    returns?: {
        title: string;
        content: string;
    };
    compatibility?: {
        title: string;
        content: string;
        items: string[];
    };
}

export interface Methods {
    [key: string]: Method;
}