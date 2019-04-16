interface Attribute {
    name: string;
    value: string;
}

export interface SignUpPayload {
    username: string;
    password: string;
    attributes: Attribute[];
}

export interface ConfirmSignUpPayload {
    username: string;
    code: string;
}
