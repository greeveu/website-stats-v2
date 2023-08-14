declare module '*.png';
declare module '*.jpg';

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
