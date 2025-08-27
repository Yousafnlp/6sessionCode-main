declare module 'react-typical' {
  interface TypicalProps {
    steps: (string | number)[];
    loop?: number;
    wrapper?: string;
  }
  
  const Typical: React.FC<TypicalProps>;
  export default Typical;
} 