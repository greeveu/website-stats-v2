declare module '*.png';

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
