import { useState } from "react";
import { ChevronRight, ChevronLeft, Plus } from "react-feather";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [newBoardName, setNewBoardName] = useState("");

    const handleCreateBoard = async () => {
        try {
            // Enviar solicitud al backend para crear un nuevo tablero
            await fetch("http://localhost:3000/api/boards", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: newBoardName }),
            });

            // Limpiar el input después de crear el tablero
            setNewBoardName("");
        } catch (error) {
            console.error("Error creating board:", error);
        }
    };

    const handleEditBoardName = async (boardId, newName) => {
        try {
            // Enviar solicitud al backend para actualizar el nombre del tablero
            await fetch(`http://localhost:3000/api/boards/${boardId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: newName }),
            });
        } catch (error) {
            console.error("Error updating board name:", error);
        }
    };

    return (
        <div className={`bg-[#121417] h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] transition-all linear duration-500 flex-shrink-0 ${collapsed ? "w-[42px]" : "w-[280px]"}`} >
            {collapsed && <div className="p-2">
                <button onClick={() => setCollapsed(!collapsed)} className="hover:bg-slate-600 rounded-sm">
                    <ChevronRight size={18} />
                </button>
            </div>}
            {!collapsed && <div>
                <div className="workspace p-3 flex justify-between border-b border-b-[#9fadbc29]">
                    <h4>Remote Dev's Workspace</h4>
                    <button onClick={() => setCollapsed(!collapsed)} className="hover:bg-slate-600 rounded-sm p-1">
                        <ChevronLeft size={18} />
                    </button>
                </div>
                <div className="boardlist">
                    <div className="flex justify-between px-3 py-2">
                        <h6> Your Boards </h6>
                        <button onClick={handleCreateBoard} className="hover:bg-slate-600 p-1 rounded-sm">
                            <Plus size={16} />
                        </button>
                    </div>
                    {/* Aquí puedes mapear los tableros existentes y mostrarlos */}
                    <ul>
                        <li>
                            <input
                                type="text"
                                value={newBoardName}
                                onChange={(e) => setNewBoardName(e.target.value)}
                                placeholder="Enter board name"
                            />
                            <button onClick={handleCreateBoard}>Create Board</button>
                        </li>
                        <li>
                            <button className="px-2 py-2 w-full text-sm flex justify-start align-baseline hover:bg-gray-500">
                                <span className="w-6 h-max rounded-sm mr-2 bg-red-600">&nbsp;</span>
                                <span contentEditable onBlur={(e) => handleEditBoardName(boardId, e.target.textContent)}>My Trello Board</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>}
        </div>
    );
}
