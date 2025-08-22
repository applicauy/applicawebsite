export const CardHowWork = (
    {
        order,
        title,
        concept
    } :
    {
        order: number,
        title: string,
        concept: string
    }
) => {

    return (
      <div className={`bordered-gradient-box rounded-2xl lg:rounded-3xl`}>
        <div className={`rounded-2xl lg:rounded-3xl py-6 lg:py-8 inner-content-start flex flex-col gap-4 px-8 lg:px-12 text-white items-start justify-start shadow-lg bg-indigo-600`}>
            <div className={`text-xl lg:text-2xl xl:text-3xl flex flex-row font-bold gap-4 items-start`}>
                <div>
                  { order }.
                </div>
                <div>{ title }</div>
            </div>
            <div className={`text-md lg:text-xl text-start`}>{ concept }</div>
        </div>
      </div>
    )
}
