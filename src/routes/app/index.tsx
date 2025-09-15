import {createFileRoute, Link} from '@tanstack/react-router'
import {changeTranslation, Translate} from "@config/i18n";
import styled from "@emotion/styled";

export const Route = createFileRoute('/app/')({
    component: IndexPage,
})
function IndexPage() {
    return <BaseLayout>
        <h1>{Translate("App.WelcomeMessage")}</h1>
        <Showcase/>
        <Link to="/app/home">Home</Link>
    </BaseLayout>
}

export function Showcase() {
    return <>
        <h2>{window.location.pathname}</h2>
        <div className="translation-list">
            <button onClick={() => changeTranslation("pt")}>{Translate("App.PortugueseBtn")}</button>
            <button onClick={() => changeTranslation("en")}>{Translate("App.EnglishBtn")}</button>
        </div>
    </>
}

export const BaseLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 32px;

    .translation-list {
        display: flex;
        gap: 8px;

        button {
            cursor: pointer;
            border: 1px solid black;
            padding-bottom: 2px;
            padding-top: 4px;
            padding-inline: 6px;
            background-color: transparent;
            border-radius: 4px;
            color: inherit;
        }
    }

    a {
        cursor: pointer;
        text-decoration: none;
    }
`