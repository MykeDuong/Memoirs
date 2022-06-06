/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";

const styles = {
    root: (theme) => css`
      &.MuiTextField-root {
        margin: ${theme.spacing(1)}
      }
    `,
    
    field: (theme) => css`
      margin: ${theme.spacing(1)}
    `,

    paper: (theme) => css`
      padding: ${theme.spacing(2)}
    `,

    form: css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center
    `,

    fileInput: css` 
      width: 97%;
      margin: 10px 0
    `,

    buttonSubmit: css`
      margin-bottom: 10px
    `,
};

export default styles;