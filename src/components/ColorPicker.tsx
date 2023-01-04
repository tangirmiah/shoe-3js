import React, { useContext, useState } from 'react'
import { HexColorPicker } from 'react-colorful';
import { ColorContext, ColorProvider } from '../appContext';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
interface ColorPickerItem {
    item: string,
}

const ColorPicker = (props: ColorPickerItem) => {
    const [showPicker, setShowPicker] = useState(false)
    const colorsFromContext = useContext(ColorContext)

    return (
        <ColorProvider>
            <div className='relative flex flex-wrap'>
                <button id={`${props.item}Id`} className='h-10 w-10 rounded-full ' style={{ backgroundColor: colorsFromContext[props.item] }}
                    onClick={() =>
                        setShowPicker(!showPicker)
                    }
                />
                <Tooltip anchorId={`${props.item}Id`} content={props.item.toUpperCase()} place="bottom" />
                {showPicker && <div className='absolute inset-0 z-30 mt-12' >
                    <HexColorPicker
                        onMouseLeave={() =>
                            setShowPicker(!showPicker)}
                        color={colorsFromContext[props.item]}
                        onChange={(newColor) => { colorsFromContext.updateColors(props.item, newColor) }} />
                </div>}
            </div>
        </ColorProvider>
    )
}

export default ColorPicker