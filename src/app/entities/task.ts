import { TimeUnit } from "./timeUnit";

export interface Task {
    id?: string;
    timeUnit: TimeUnit;
    title: string;
    description: string;
    done: boolean;
    muted: boolean;
    notifyHoursBefore: number;
}