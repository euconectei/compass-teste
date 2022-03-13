import { createContext, ReactNode, useContext, useState } from 'react';

type LoadingContextType = {
  isLoading: boolean;
  message: string;
  setLoading: (loading: boolean, message?: string) => void;
};

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  message: '',
  setLoading: () => {
    throw new Error('setLoading must be implemented');
  },
});

const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const setLoading = (loading: boolean, message?: string) => {
    setIsLoading(loading);
    setMessage(message || '');
  };

  return (
    <LoadingContext.Provider value={{ isLoading, message, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => {
  const { isLoading, message, setLoading } = useContext(LoadingContext);

  return { isLoading, message, setLoading };
};

export default LoadingProvider;
export { useLoading };
