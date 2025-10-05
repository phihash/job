"use client";

import { useState } from "react";

export default function LinkArea() {
    const [isShow, setIsShow] = useState<string>("retire");
    return (
        <div className="max-w-screen-sm w-11/12 mx-auto">
            <div className="flex gap-4">
            <button className={`text-xl font-bold ${isShow === "retire" ? "underline underline-offset-4" : "text-gray-400"}`} onClick={() => setIsShow("retire")}>退職</button>
            <button className={`text-xl font-bold ${isShow === "move" ? " underline underline-offset-4" :  "text-gray-400"}`} onClick={() => setIsShow("move")}>引越し</button>
            </div>
            {
                isShow === "retire" && <RetireLink />
            }
            {
                isShow === "move" && <MoveLink />
            }          
        </div>
    );
}


export function RetireLink() {

    return (
        <div className="max-w-screen-sm  mx-auto mt-8 ">
            <div>
            <h2 className="text-xl font-extrabold pt-8x"> 退職前参考リンク</h2>
            </div>
        </div>
    );
}

export function MoveLink() {
    return (
        <div className="max-w-screen-sm  mx-auto mt-8">
            <div>
            <h2 className="text-xl font-extrabold pt-8x"> 引越し前参考リンク</h2>
            </div>
        </div>
    );
}