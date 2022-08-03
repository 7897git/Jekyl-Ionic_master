declare type RefresherAnimationType = 'scale' | 'translate';
export declare const getRefresherAnimationType: (contentEl: HTMLElement) => RefresherAnimationType;
export declare const createPullingAnimation: (type: RefresherAnimationType, pullingSpinner: HTMLElement, refresherEl: HTMLElement) => import("../../interface").Animation;
export declare const createSnapBackAnimation: (pullingRefresherIcon: HTMLElement) => import("../../interface").Animation;
export declare const setSpinnerOpacity: (spinner: HTMLElement, opacity: number) => void;
export declare const handleScrollWhilePulling: (ticks: NodeListOf<SVGElement>, numTicks: number, pullAmount: number) => void;
export declare const handleScrollWhileRefreshing: (spinner: HTMLElement, lastVelocityY: number) => void;
export declare const translateElement: (el?: HTMLElement | undefined, value?: string | undefined, duration?: number) => Promise<unknown>;
export declare const shouldUseNativeRefresher: (referenceEl: HTMLIonRefresherElement, mode: string) => Promise<boolean>;
export {};
