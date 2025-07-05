import { ComponentType, PropsWithChildren } from "react";
import { Route, RouteComponentProps, Switch } from "wouter";

type HookProps = {
    index?: ComponentType<RouteComponentProps<{ [param: number]: string | undefined; }>> | undefined
}

export function BaseRouter({ index, children }: PropsWithChildren<HookProps>) {
    return <Switch>
        {index && <Route path="/" component={index} />}
        {children}
        <Route>404</Route>
    </Switch>
}