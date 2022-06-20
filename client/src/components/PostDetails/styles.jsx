/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react"

const styles = ({
  media: css`
    border-radius: 20px;
    object-fit: cover;
    width: 100%;
    max-height: 600px
  `,

  card: theme => css`
    display: flex;
    width: 100%;
    @media (max-width:900px) {
      flex-wrap: wrap;
      flex-direction: column
    }
  `,

  section: css`
    border-radius: 20px;
    margin: 10px;
    flex: 1;
  `,

  imageSection: theme => css`
    margin-left: 20px;
    @media (max-width:900px) {margin-left: 0}
  `,

  recommendedPosts: theme => css`
    display: flex;
    @media (max-width:900px) {flex-direction: column}
  `,

  loadingPaper: css`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 20px; 
    border-radius: 15px; 
    height: 39vh;
  `,

  commentSection:css`
    width: 100%

  `
});

export default styles;