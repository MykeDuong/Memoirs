/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react"

function styles() {
  return {
    media: css`
      height: 0;
      padding-top: 56.25%;
      background-color: rgba(0, 0, 0, 0.5);
      background-blend-mode: darken;
    `,

    border: css`
      border: solid;
    `,

    fullHeightCard: css`
      height: 100%;
    `,

    card: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 15px;
      height: 100%;
      position: relative;
    `,

    grid: css`
      display: flex;
    `,

    details: css`
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    `,

    title: css`
      padding: 0 16px;
    `,

    message: css`
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    `,

    cardAction: css`
      display: block;
      text-align: initial
    `,
    
    cardActions: css`
      padding: 0 16px 8px 16px;
      display: flex;
      justify-content: space-between;
    `
  }
};

export default styles;