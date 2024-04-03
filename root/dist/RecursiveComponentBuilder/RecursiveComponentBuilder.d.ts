import { PropsWithChildren } from 'react';
import { IAddItem, IDeleteItem, IUpdateNodeByPath } from './RecursiveComponentContext';
export interface IRecursiveComponent<T> extends PropsWithChildren {
    data: T;
    accessKey: string;
    deleteItem: IDeleteItem;
    addItem: IAddItem;
    updateItem: IUpdateNodeByPath;
}
export declare const RecursiveComponentBuilder: ({ data, component: Component, accessKey, result }: any) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
//# sourceMappingURL=RecursiveComponentBuilder.d.ts.map