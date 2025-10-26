import { createFileRoute, Link } from '@tanstack/react-router'
import { changeTranslation, Translate } from "@config/i18n";

export const Route = createFileRoute('/app/')({
    component: IndexPage,
})
function IndexPage() {
    return <div className='
    flex flex-col w-full h-full justify-center items-center gap-[32px]
    '>
        <h1>{Translate("App.WelcomeMessage")}</h1>
        <Showcase />
        <Link to="/app/home">Home</Link>
    </div>
}

export function Showcase() {
    return <>
        <h2>{window.location.pathname}</h2>
        <div className="flex gap-[8px] 
        *:cursor-pointer *:border *:border-[1px solid black] *:pb-[2px] *:pt-[4px] *:pl-[6px} *:pr-[6px] *:bg-transparent *:rounded-lg *:text-inherit
        [&_a]:cursor-pointer
        ">
            <button onClick={() => changeTranslation("pt")}>{Translate("App.PortugueseBtn")}</button>
            <button onClick={() => changeTranslation("en")}>{Translate("App.EnglishBtn")}</button>
        </div>
    </>
}