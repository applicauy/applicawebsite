import '../../../styles/effects.scss';

export const MobileCardHowWork = (
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
      <div className="bordered-gradient-box-mobile rounded-3xl">
        <div className="inner-content flex flex-col gap-2 px-4 py-6 text-white items-center shadow-lg rounded-3xl bg-indigo-600">
            <div className={`text-xl flex flex-row font-bold gap-2 items-center text-center`}>
                { order }. { title }
            </div>
            <div className={`text-md text-center`}>{ concept }</div>
        </div>
      </div>
    )
}
