export function Button({label,onClick}){
  return <div>
    <button className="cursor-pointer m-3 font-sans p-3 w-60 text-center bg-black rounded-3xl text-white hover:opacity-85" onClick={onClick}>{label}</button>
  </div>
}