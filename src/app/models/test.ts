export interface Test<T> {
    id: string;
    date: Date;
    request: T;
    response: any;
    status: TestStatus;
}

export type TestStatus = "success" | "error";
