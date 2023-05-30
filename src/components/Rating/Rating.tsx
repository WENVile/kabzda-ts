import React, { useState } from "react";

type RaitingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}
export function Rating(props: RaitingPropsType) {
    let mass = [1, 2, 3, 4, 5];

    return (
        <div>
            {mass.map((el, index) => {
                if (props.value > index) {
                    return <Star selected={true} />
                } else {
                    return <Star selected={false} />
                }
            })}
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
}
function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}