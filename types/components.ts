export interface TextField {
    type: string;
    label: string;
    prependInnerIcon?: string;
    model: string;
    validations?: any[];
}

export interface Breadcrumb {
    title: string;
    disabled: boolean;
    link?: string;
}