import { css } from "@emotion/react"

function styles() {
  return {
    mainContainer: css`
      display: flex;
    `,
    smMargin: (theme) => css`
      margin: ${theme.spacing(1)}
    `,
    actionDiv: css`
      text-align: center
    `,
  }
};

export default styles;