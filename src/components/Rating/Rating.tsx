import React, { useState } from "react";


export function Rating() {
    let mass = [1, 2, 3, 4, 5];

    const [value, setValue] = useState(0)

    const onSelectValueHandler = (index: number) => {
        setValue(index);
    }

    return (
        <div>
            {mass.map((el, index) => {
                if (value > index) {
                    return <Star selected={true} onSelect={() => onSelectValueHandler(index + 1)} />
                } else {
                    return <Star selected={false} onSelect={() => onSelectValueHandler(index + 1)} />
                }
            })}
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
    onSelect: () => void
}
function Star(props: StarPropsType) {
    if (props.selected) {
        return <span onClick={() => props.onSelect()}><b>star </b></span>
    } else {
        return <span onClick={() => props.onSelect()}>star </span>
    }
}