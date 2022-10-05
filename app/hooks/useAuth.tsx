import { useTypedSelector } from '@/app/hooks/useTypedSelector';

export const useAuth = () => useTypedSelector(state => state.auth);
