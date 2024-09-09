import Svg, { Path } from "react-native-svg"

interface PropsType {
    size?: number;
    color?: string;
    onPress?: () => void;
}

export const Setting = ({ color = '#000', size = 24, onPress }: PropsType) => {
    return (
        <Svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <Path fill="#71717A" d="M10 5.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm0 5a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm0 5a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z" />
            <Path stroke="#71717A" stroke-linecap="round" stroke-linejoin="round" d="M10 5.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm0 5a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm0 5a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z" />
        </Svg>

    )
}