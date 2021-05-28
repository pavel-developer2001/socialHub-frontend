import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../login/Login.module.css";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import MailOutline from "@material-ui/icons/MailOutline";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const Register = () => {
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className={styles.auth}>
      <Head>
        <title>{"SocialHub - социальная сеть"}</title>
        <meta
          name='description'
          content={`Социальная сеть. Заводи новых друзей по всему миру.`}
        />
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content={"Музыка, треки, артисты"} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Typography
        variant='h5'
        gutterBottom
        component='div'
        className={styles.auth__title}
      >
        Зарегистрироваться в SocialHub
      </Typography>
      <FormControl variant='standard' sx={{ m: 1, width: "40ch" }}>
        <InputLabel htmlFor='input-with-icon-adornment'>Введите имя</InputLabel>
        <Input
          id='input-with-icon-adornment'
          endAdornment={
            <InputAdornment position='start'>
              <MailOutline />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant='standard' sx={{ m: 1, width: "40ch" }}>
        <InputLabel htmlFor='input-with-icon-adornment'>
          Введите еmail
        </InputLabel>
        <Input
          id='input-with-icon-adornment'
          endAdornment={
            <InputAdornment position='start'>
              <MailOutline />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "40ch" }} variant='standard'>
        <InputLabel htmlFor='standard-adornment-password'>
          Введите пароль
        </InputLabel>
        <Input
          id='standard-adornment-password'
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "40ch" }} variant='standard'>
        <InputLabel htmlFor='standard-adornment-password'>
          Введите пароль ещё раз
        </InputLabel>
        <Input
          id='standard-adornment-password'
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        variant='outlined'
        className={styles.auth__btn}
        href='#outlined-buttons'
      >
        Зарегистрироваться
      </Button>
    </div>
  );
};

export default Register;
