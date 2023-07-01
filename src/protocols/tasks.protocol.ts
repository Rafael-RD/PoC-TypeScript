export type Task={
    name: string;
    description: string;
    date: string | Date;
    resposible: string;
}

export type TaskQuery=Task & {
    id: number;
    completed: boolean;
    created: Date;
    updated: Date;
}

export type CustomError= {
    type: string;
    message: string;
};