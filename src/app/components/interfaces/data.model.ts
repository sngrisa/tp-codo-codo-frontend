export interface DataCard {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    webUrl: string;
    languages: Languages[];
}

export interface Languages{
    name: string;
    spanColor: string;
}