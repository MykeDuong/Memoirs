import { css, jsx } from '@emotion/react';
import { deepPurple } from '@mui/material/colors';

const styles = () => ({
  appBar: css`
    border-radius: 15px;
    margin: 30px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px
  `,

  heading: css`
    text-decoration: none
  `,

  image: css`
    margin-left: 15px;
  `,

  toolbar: css`
    display: flex;
    justify-content: flex-end;
    width: 400px;
  `,

  profile: css`
    display: flex;
    justify-content: space-between;
    width: 400px
  `,

  userName: css`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 900px) {
      display: none
    }
  `,

  brandContainer: css`
    display: flex;
    align-items: center;
  `,

  avatar: (theme) => css`
    color: ${theme.palette.getContrastText(deepPurple[500])};
    background-color: ${deepPurple[500]};
    
    @media screen and (max-width: 650px) {
      display: none
    }
  `,

  logout: css`
    @media screen and (max-width: 400px) {
      width: 20px;
      font-size: 10px
    }
  `,

  login: css`
    @media screen and (max-width: 510px) {
      width: 30px;
      font-size: 10px;
      padding: 5px;
    }
  `
});

export default styles;