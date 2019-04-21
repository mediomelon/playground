import * as uuid from 'uuid/v4';

import { Test, TestStatus } from '../models/test';

export const createTest = <T>(
    request: T,
    response: any,
    status: TestStatus
): Test<T> => {
    return {
        id: uuid(),
        date: new Date(),
        status,
        request,
        response
    };
};
