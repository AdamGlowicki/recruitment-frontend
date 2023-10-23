import React, {ReactNode} from "react";

const calculateBoundingBoxes = (children: ReactNode) => {
    const boundingBoxes = {};

    React.Children.forEach(children, child => {
        // @ts-ignore
        const domNode = child?.ref.current;
        // @ts-ignore
        boundingBoxes[child.key] = domNode.getBoundingClientRect();
    });

    return boundingBoxes;
};

export default calculateBoundingBoxes;
