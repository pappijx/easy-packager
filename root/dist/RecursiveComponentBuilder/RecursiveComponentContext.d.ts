import { Dispatch, PropsWithChildren } from 'react';
interface IRecursiveComponentContext extends PropsWithChildren {
    data: any;
}
export type IDeleteItem = (keyString: string) => void;
export type IAddItem = (newChild: any, keyString: string) => void;
export type IUpdateNodeByPath = (updatedProperties: any, keyString: string) => void;
interface IRecursiveContext {
    deleteItem: IDeleteItem;
    recursiveData: any;
    setRecursiveData: Dispatch<any>;
    addItem: IAddItem;
    updateNodeByPath: IUpdateNodeByPath;
}
export declare const RecursiveContext: import("react").Context<IRecursiveContext>;
export declare const RecursiveComponentContext: ({ children, data }: IRecursiveComponentContext) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
//# sourceMappingURL=RecursiveComponentContext.d.ts.map