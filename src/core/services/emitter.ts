import { EventEmitter } from 'tseep';

/* TypeSafe Node EventEmitter */
export const AppEvents = new EventEmitter<{
    Ready: () => void
}>()
