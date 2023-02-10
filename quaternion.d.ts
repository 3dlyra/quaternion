export function create( x?: number, y?: number, z?: number, w?: number ): Float32Array;
export function rotateX( q: Float32Array, radian: number ): Float32Array;
export function rotateY( q: Float32Array, radian: number ): Float32Array;
export function rotateZ( q: Float32Array, radian: number ): Float32Array;
export function conjugate( q: Float32Array ): Float32Array;
export function dot( a: Float32Array, b: Float32Array ): number;
export function invert( q: Float32Array ): Float32Array;
export function slerp( a: Float32Array, b: Float32Array, t: number ): Float32Array;
export function applyToVector3( q: Float32Array, vec3: Float32Array ): Float32Array;
