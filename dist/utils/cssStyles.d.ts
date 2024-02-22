type BgBlurProps = {
    blur?: number;
    opacity?: number;
    color?: string;
    imgUrl?: string;
};
export declare function bgBlur(props?: BgBlurProps): {
    readonly position: "relative";
    readonly backgroundImage: `url(${string})`;
    readonly '&:before': {
        readonly position: "absolute";
        readonly top: 0;
        readonly left: 0;
        readonly zIndex: 9;
        readonly content: "\"\"";
        readonly width: "100%";
        readonly height: "100%";
        readonly backdropFilter: `blur(${number}px)`;
        readonly WebkitBackdropFilter: `blur(${number}px)`;
        readonly backgroundColor: string;
    };
    backdropFilter?: undefined;
    WebkitBackdropFilter?: undefined;
    backgroundColor?: undefined;
} | {
    backdropFilter: string;
    WebkitBackdropFilter: string;
    backgroundColor: string;
    readonly position?: undefined;
    readonly backgroundImage?: undefined;
    readonly '&:before'?: undefined;
};
type BgGradientProps = {
    direction?: string;
    color?: string;
    startColor?: string;
    endColor?: string;
    imgUrl?: string;
};
export declare function bgGradient(props?: BgGradientProps): {
    background: string;
    backgroundSize: string;
    backgroundRepeat: string;
    backgroundPosition: string;
} | {
    background: string;
    backgroundSize?: undefined;
    backgroundRepeat?: undefined;
    backgroundPosition?: undefined;
};
export declare function textGradient(value: string): {
    background: string;
    WebkitBackgroundClip: string;
    WebkitTextFillColor: string;
};
export declare function filterStyles(value: string): {
    filter: string;
    WebkitFilter: string;
    MozFilter: string;
};
export declare const hideScrollbarY: {
    readonly msOverflowStyle: "none";
    readonly scrollbarWidth: "none";
    readonly overflowY: "scroll";
    readonly '&::-webkit-scrollbar': {
        readonly display: "none";
    };
};
export declare const hideScrollbarX: {
    readonly msOverflowStyle: "none";
    readonly scrollbarWidth: "none";
    readonly overflowX: "scroll";
    readonly '&::-webkit-scrollbar': {
        readonly display: "none";
    };
};
export {};
