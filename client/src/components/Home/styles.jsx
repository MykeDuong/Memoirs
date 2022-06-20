/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";

const styles = ({
    appBarSearch: css`
        border-radius: 4px;
        margin-bottom: 1rem;
        display: flex;
        padding: 16px;
    `,

    pagination: css`
        border-radius: 4px;
        margin-top: 0rem;
        padding: 16px
    `,

    gridContainer: (theme) => css`
        justify-content: space-between;
        @media (max-width: 600px) {flex-direction: column-reverse}
    `,

    searchBox: css`
        margin-bottom: 0.5rem;
    `
});

export default styles;