import { createFileRoute } from '@tanstack/react-router'
import {BaseLayout, Showcase} from "./index.tsx";
import {Translate} from "@config/i18n";

export const Route = createFileRoute('/app/home')({
  component: HomePage,
})

function HomePage() {
    return <BaseLayout>
        <h1>{Translate("App.Home.message")}</h1>
        <Showcase/>
        <a onClick={() => history.back()}>{Translate("App.Home.returnBtn")}</a>
    </BaseLayout>
}
