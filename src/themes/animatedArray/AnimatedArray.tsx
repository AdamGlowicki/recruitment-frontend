import React, {useState, useLayoutEffect, useEffect, ReactNode} from "react";
import usePrevious from "./usePrevious";
import calculateBoundingBoxes from "./calculateBoundingBoxes";

type IProps = {
    children: ReactNode
}

const AnimateBubbles = ({ children }: IProps) => {
    const [boundingBox, setBoundingBox] = useState({});
    const [prevBoundingBox, setPrevBoundingBox] = useState({});
    const prevChildren = usePrevious(children);

    useLayoutEffect(() => {
        const newBoundingBox = calculateBoundingBoxes(children);
        setBoundingBox(newBoundingBox);
    }, [children]);

    useLayoutEffect(() => {
        const prevBoundingBox = calculateBoundingBoxes(prevChildren);
        setPrevBoundingBox(prevBoundingBox);
    }, [prevChildren]);

    useEffect(() => {
        const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;

        if (hasPrevBoundingBox) {
            React.Children.forEach(children, child => {
                console.log(child, 'dane')
                // @ts-ignore
                const domNode = child.ref.current;
                // @ts-ignore
                const firstBox = prevBoundingBox[child.key];
                // @ts-ignore
                const lastBox = boundingBox[child.key];

                const changeInY = firstBox?.top - lastBox?.top;
                console.log(domNode)
                if (changeInY) {
                    requestAnimationFrame(() => {
                        domNode.style.transform = `translateY(${changeInY}px)`;
                        domNode.style.transition = "transform 0s";

                        requestAnimationFrame(() => {
                            domNode.style.transform = "";
                            domNode.style.transition = "transform 500ms";
                        });
                    });
                }
            });
        }
    }, [boundingBox, prevBoundingBox, children]);

    return <>{children}</>;
};

export default AnimateBubbles;
