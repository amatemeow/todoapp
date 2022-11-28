export interface Task {
    id?: string;
    time: string;
    title: string;
    description: string;
    done: boolean;
    muted: boolean;
}