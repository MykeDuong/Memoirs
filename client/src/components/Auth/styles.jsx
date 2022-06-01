import { css, jsx } from '@emotion/react';

const styles = () => ({
  paper: theme => css`
    margin-top: ${theme.spacing(8)};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacing(2)};
  `,

  root: css`
    & .MuiTextField-root: {
      margin: theme.spacing(1);
    };
  `,

  avatar: theme => css`
    margin: ${theme.spacing(1)};
    background-color: ${theme.palette.secondary.main};
  `,
  
  form: theme => css`
    width: 100%;
    margin-top: ${theme.spacing(10)};
  `,

  submit: theme => css`
    margin: ${theme.spacing(3, 0, 2)};
  `,

  googleButton: theme => css`
    margin-bottom: ${theme.spacing(2)};
  `
});

export default styles;