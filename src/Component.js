import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard/src";

function Component(props) {

    return (
        <div class="w-full">
            <p class="text-1xl font-bold">{props.mode}</p>
            <div className="bg-white w-full rounded-3xl mt-1 mb-2 ps-6 py-2 shadow-xl transition duration-150 ease-in-out hover:scale-105 hover:bg-sky-200">
                <CopyToClipboard className="text-sm font-bold" text={props.text} onCopy={() => alert(`"${props.text}"가 복사되었습니다.`)}>
                    <div class="text-sm font-bold">
                        {props.text}
                    </div>
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default Component;
