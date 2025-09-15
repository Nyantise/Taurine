import { createFileRoute } from '@tanstack/react-router'
import {BaseLayout, Showcase} from "./index.tsx";
import {Translate} from "@config/i18n";
import { themeController } from '@stores/theme.store.ts';

export const Route = createFileRoute('/app/home')({
  component: HomePage,
})

function HomePage() {
    return <BaseLayout>
        <h1>{Translate("App.Home.message")}</h1>
        <Showcase/>
        <a onClick={() => themeController.changeDark()}>{Translate("App.Home.returnBtn")}</a>
    </BaseLayout>
}
