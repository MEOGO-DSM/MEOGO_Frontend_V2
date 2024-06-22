import React, { useState } from "react";
import styled from "styled-components/native";
import { Star } from "../../assets";

export default function StarRating() {

    const [stars, setStars] = useState([false, false, false, false, false]);

    const handleStarPress = (index : number) => {
        const updatedStars = stars.map((star, idx) => idx <= index ? true : false);
        setStars(updatedStars);
    };

    return (
        <Container>
            {stars.map((filled, index) => (
                <Star
                    key={index}
                    size={42}
                    full={filled}
                    onPress={() => handleStarPress(index)}
                />
            ))}
        </Container>
    )
}

const Container = styled.View`
flex-direction: row;
gap: 6px;
`