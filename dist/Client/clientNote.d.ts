/**
 * @type RequestType Custom type to represent a Request from the Client
 */
export declare type RequestType = {
    command: 'add' | 'modify' | 'delete' | 'list' | 'read' | undefined;
    user: string;
    title?: string;
    content?: string;
    color?: string;
};
