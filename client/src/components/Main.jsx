import { MoreHorizontal, UserPlus } from "react-feather"

export default function Main() {
    return (
        <div className="flex flex-col bg-slate-900 w-full">
            <div className="p-3 bg-black bg-opacity-50 flex justify-between w-full">
                <h2 className="text-lg ">My Trello Board</h2>
                <div className="flex items-center justify-center">
                    <button className="bg-gray-200 text-gray-500 px-2 py-1 mr-2 rounded flex justify-center items-center">
                        <UserPlus size={16} className="mr-2 "></UserPlus>
                        Share
                    </button>
                    <button><MoreHorizontal size={16}></MoreHorizontal></button>
                </div>
            </div>
        </div>
    )
}
