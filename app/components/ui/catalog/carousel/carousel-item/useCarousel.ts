import { useTypedSelector } from '@/components/hooks/useTypedSelector'

export const useCarousel = () => useTypedSelector(state => state.carousel)
