// import React, { useState, useMemo, useCallback } from "react";
// import styled from "styled-components/native";
// import { TransparentStarGroup } from "../../assets/TransparentStarGroup";
// import Animated, { useSharedValue, useAnimatedStyle, useDerivedValue, interpolate, Extrapolate, withTiming } from "react-native-reanimated";
// import { PanResponder } from "react-native";

// function StarRating() {
//     const [rootViewPosX, setRootViewPosX] = useState(0);
//     const [starRating, setStarRating] = useState(0)
//     const [starRatingImageWidth, setStarRatingImageWidth] = useState(0);
//     const step = useMemo(() => starRatingImageWidth * 0.1, [starRatingImageWidth])
//     const panX = useSharedValue(0)

//     const starRatingWidth = useDerivedValue(() => {
//         return interpolate(panX.value, [0, starRatingImageWidth], [0, starRatingImageWidth], Extrapolate.CLAMP);
//     }, [starRatingImageWidth]);

//     const animatedStyle = useAnimatedStyle(() => {
//         return {
//             width: starRatingWidth.value
//         };
//     }, []);

//     const panResponder = useMemo(() => PanResponder.create({
//         onStartShouldSetPanResponder: () => true,
//         onMoveShouldSetPanResponder: () => false,
//         onPanResponderTerminationRequest: () => false,
//         onPanResponderGrant: (event, gestureState) => {
//             panX.value = gestureState.x0 + gestureState.dx - rootViewPosX;
//         },
//         onPanResponderMove: (event, gestureState) => {
//             panX.value = gestureState.x0 + gestureState.dx - rootViewPosX;
//         },
//         onPanResponderRelease: (event, gestureState) => {
//             const childValue = Math.ceil(starRatingWidth.value / step)
//             panX.value= withTiming(childValue* step, {
//                 duration: 100
//             })
//             setStarRating(childValue/2)
//         },
//         onPanResponderTerminate: (event, gestureState) => {
//             const childValue = Math.ceil(starRatingWidth.value / step)
//             panX.value= withTiming(childValue* step, {
//                 duration: 100
//             })
//             setStarRating(childValue/2)
//         },
//         onShouldBlockNativeResponder: (evt, gestureState) => {return false}
//     }), [rootViewPosX, starRatingImageWidth]);

//     const rootContainerOnLayout = useCallback((e) => {
//         const { x } = e.nativeEvent.layout;
//         setRootViewPosX(x);
//     }, []);

//     const starRatingImageOnLayout = useCallback((e) => {
//         const { width } = e.nativeEvent.layout;
//         setStarRatingImageWidth(width);
//     }, []);

//     return (
//         <Container onLayout={rootContainerOnLayout}>
//             <StarRatingText>
//                 <StarBackground
//                     style={animatedStyle}
//                     pointerEvents="none"
//                 >
//                     <Content onLayout={starRatingImageOnLayout} {...panResponder.panHandlers}>
//                         <TransparentStarGroup />
//                     </Content>
//                 </StarBackground>
//             </StarRatingText>
//         </Container>
//     );
// }

// export default StarRating;

// const Container = styled.View`
// align-items: center;
// `;

// const StarRatingText = styled.View`
// flex-direction: row;
// position: relative;
// `;

// const StarBackground = styled(Animated.View)`
// position: absolute;
// height: 100%;
// `;

// const Content = styled.View`
// flex-direction: row;
// `
