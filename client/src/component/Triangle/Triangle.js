import React from 'react';
import { TriangleContainer, TriangleUp, TriangleDown } from './styled';

/**
 * - DropdownMenu에서 사용됩니다.
 */
const Triangle = () => {
    return (
        <TriangleContainer>
            <TriangleUp />
            <TriangleDown />
        </TriangleContainer>
    );
};

export default Triangle;