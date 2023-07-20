
const Card3 = () => {
  return (
    <div className="flex items-center justify-between w-full gap-10 mt-7 text-xl">
        <div className="flex flex-col items-center gap-2 w-1/2 bg-white rounded-2xl p-4 py-8 sd cursor-pointer hover:bg-slate-50">
            <p className="rounded-full bgg p-2 font-semibold text-white w-14 h-14 flex items-center justify-center ">$</p>
            <p className="font-medium text-text-gray">Buy BTC</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-1/2 bg-white rounded-2xl px-4 py-8 sd cursor-pointer hover:bg-slate-50">
            <p className="rounded-full pnk p-2 font-semibold text-white w-14 h-14 flex items-center justify-center ">$</p>
            <p className="font-medium text-text-gray">Sell BTC</p>
        </div>
    </div>
  )
}

export default Card3