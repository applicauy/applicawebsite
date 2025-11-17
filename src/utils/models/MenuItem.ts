export interface MenuItem {
    name: string;
    icon: JSX.Element;
    url: string;
    target?: string;
    dropdown?: boolean;
}