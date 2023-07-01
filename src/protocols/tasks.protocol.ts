export type Task={
    name: string;
    description: string;
    date: string | Date;
    resposible: string;
    completed: boolean;
}

export type TaskQuery=Task & {
    id: number;
    created: Date;
    updated: Date;
}