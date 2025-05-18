'use client'

import { useEffect, useState } from "react";

import Button from "./Button";
import Headline from "./Headline";
import Paragraph from "./Paragraph";

export default function Message() {
    const [visible, setVisible] = useState(false);

    const message = null

    useEffect(() => {
        if (message) {
            setVisible(true);
        }
    }, [message]);

    const handleClick = () => {
        setVisible(false);
    };

    const buttons = [
        { name: 'close', onClick: handleClick }
    ];

    return (
        visible && (
            <div className="flex justify-center items-center h-screen fixed w-screen z-10">
                <div className="w-[80vw] max-w-100 border border-node grid grid-rows-3">
                    <div className="bg-roseWater row-span-1 p-5">
                        <Headline text="message" />
                    </div>
                    <div className="bg-sageGreen row-span-2 text-white flex flex-col justify-between p-5 text-center">
                        <Paragraph text={message} />
                        <Button button={buttons[0]} />
                    </div>
                </div>
            </div>
        )
    );
}
 