export function create( x, y, z, w ) {

	return new Float32Array( [ x || 0, y || 0, z || 0, w || 1 ] )
}

export function rotateX( q, radian ) {

	return new Float32Array( [
		q[ 0 ] * Math.cos( radian * 0.5 ) + q[ 3 ] * Math.sin( radian * 0.5 ),
		q[ 1 ] * Math.cos( radian * 0.5 ) + q[ 2 ] * Math.sin( radian * 0.5 ),
		q[ 2 ] * Math.cos( radian * 0.5 ) - q[ 1 ] * Math.sin( radian * 0.5 ),
		q[ 3 ] * Math.cos( radian * 0.5 ) - q[ 0 ] * Math.sin( radian * 0.5 )
	] )
}

export function rotateY( q, radian ) {

	return new Float32Array( [
		q[ 0 ] * Math.cos( radian * 0.5 ) - q[ 2 ] * Math.sin( radian * 0.5),
		q[ 1 ] * Math.cos( radian * 0.5 ) + q[ 3 ] * Math.sin( radian * 0.5),
		q[ 2 ] * Math.cos( radian * 0.5 ) + q[ 0 ] * Math.sin( radian * 0.5),
		q[ 3 ] * Math.cos( radian * 0.5 ) - q[ 1 ] * Math.sin( radian * 0.5)
	] )
}

export function rotateZ( q, radian ) {

	return new Float32Array( [
		q[ 0 ] * Math.cos( radian * 0.5 ) + q[ 1 ] * Math.sin( radian * 0.5 ),
		q[ 1 ] * Math.cos( radian * 0.5 ) - q[ 0 ] * Math.sin( radian * 0.5 ),
		q[ 2 ] * Math.cos( radian * 0.5 ) + q[ 3 ] * Math.sin( radian * 0.5 ),
		q[ 3 ] * Math.cos( radian * 0.5 ) - q[ 2 ] * Math.sin( radian * 0.5 )
	] )
}

export function conjugate( q ) {

	return new Float32Array( [
		- q[ 0 ],
		- q[ 1 ],
		- q[ 2 ],
		+ q[ 3 ]
	] )
}

export function dot( a, b ) {

	return a[ 0 ] * b[ 0 ] + a[ 1 ] * b[ 1 ] + a[ 2 ] * b[ 2 ] + a[ 3 ] * b[ 3 ]
}

export function invert( q ) {

	const dot = q[ 0 ] * q[ 0 ] + q[ 1 ] * q[ 1 ] + q[ 2 ] * q[ 2 ] + q[ 3 ] * q[ 3 ]

	return new Float32Array( [
		- q[ 0 ] * ( dot ? 1 / dot : 0 ),
		- q[ 1 ] * ( dot ? 1 / dot : 0 ),
		- q[ 2 ] * ( dot ? 1 / dot : 0 ),
		+ q[ 3 ] * ( dot ? 1 / dot : 0 )
	] )
}

// adapted from gl-quat

export function slerp( a, b, t ) {

	const c = a[ 0 ] * b[ 0 ] + a[ 1 ] * b[ 1 ] + a[ 2 ] * b[ 2 ] + a[ 3 ] * b[ 3 ]

	return new Float32Array( [
		( ( 1 - ( c < 0 ? - c : c ) ) > 0.000001 ? Math.sin( ( 1 - t ) * Math.acos( ( c < 0 ? - c : c ) ) ) / Math.sin( Math.acos( ( c < 0 ? - c : c ) ) ) : 1 - t ) * a[ 0 ] + ( ( 1 - ( c < 0 ? - c : c ) ) > 0.000001 ? Math.sin( t * Math.acos( ( c < 0 ? - c : c ) ) ) / Math.sin( Math.acos( ( c < 0 ? - c : c ) ) ) : t ) * ( c < 0 ? - b[ 0 ] : b[ 0 ] ),
		( ( 1 - ( c < 0 ? - c : c ) ) > 0.000001 ? Math.sin( ( 1 - t ) * Math.acos( ( c < 0 ? - c : c ) ) ) / Math.sin( Math.acos( ( c < 0 ? - c : c ) ) ) : 1 - t ) * a[ 1 ] + ( ( 1 - ( c < 0 ? - c : c ) ) > 0.000001 ? Math.sin( t * Math.acos( ( c < 0 ? - c : c ) ) ) / Math.sin( Math.acos( ( c < 0 ? - c : c ) ) ) : t ) * ( c < 0 ? - b[ 1 ] : b[ 1 ] ),
		( ( 1 - ( c < 0 ? - c : c ) ) > 0.000001 ? Math.sin( ( 1 - t ) * Math.acos( ( c < 0 ? - c : c ) ) ) / Math.sin( Math.acos( ( c < 0 ? - c : c ) ) ) : 1 - t ) * a[ 2 ] + ( ( 1 - ( c < 0 ? - c : c ) ) > 0.000001 ? Math.sin( t * Math.acos( ( c < 0 ? - c : c ) ) ) / Math.sin( Math.acos( ( c < 0 ? - c : c ) ) ) : t ) * ( c < 0 ? - b[ 2 ] : b[ 2 ] ),
		( ( 1 - ( c < 0 ? - c : c ) ) > 0.000001 ? Math.sin( ( 1 - t ) * Math.acos( ( c < 0 ? - c : c ) ) ) / Math.sin( Math.acos( ( c < 0 ? - c : c ) ) ) : 1 - t ) * a[ 3 ] + ( ( 1 - ( c < 0 ? - c : c ) ) > 0.000001 ? Math.sin( t * Math.acos( ( c < 0 ? - c : c ) ) ) / Math.sin( Math.acos( ( c < 0 ? - c : c ) ) ) : t ) * ( c < 0 ? - b[ 3 ] : b[ 3 ] )
	] )
}

// adapted from threejs

export function applyToVector3( q, vec3 ) {

	return new Float32Array( [
		( q[ 3 ] * vec3[ 0 ] + q[ 1 ] * vec3[ 2 ] - q[ 2 ] * vec3[ 1 ] ) * q[ 3 ] + ( - q[ 0 ] * vec3[ 0 ] - q[ 1 ] * vec3[ 1 ] - q[ 2 ] * vec3[ 2 ] ) * - q[ 0 ] + ( q[ 3 ] * vec3[ 1 ] + q[ 2 ] * vec3[ 0 ] - q[ 0 ] * vec3[ 2 ] ) * - q[ 2 ] - ( q[ 3 ] * vec3[ 2 ] + q[ 0 ] * vec3[ 1 ] - q[ 1 ] * vec3[ 0 ] ) * - q[ 1 ],
		( q[ 3 ] * vec3[ 1 ] + q[ 2 ] * vec3[ 0 ] - q[ 0 ] * vec3[ 2 ] ) * q[ 3 ] + ( - q[ 0 ] * vec3[ 0 ] - q[ 1 ] * vec3[ 1 ] - q[ 2 ] * vec3[ 2 ] ) * - q[ 1 ] + ( q[ 3 ] * vec3[ 2 ] + q[ 0 ] * vec3[ 1 ] - q[ 1 ] * vec3[ 0 ] ) * - q[ 0 ] - ( q[ 3 ] * vec3[ 0 ] + q[ 1 ] * vec3[ 2 ] - q[ 2 ] * vec3[ 1 ] ) * - q[ 2 ],
		( q[ 3 ] * vec3[ 2 ] + q[ 0 ] * vec3[ 1 ] - q[ 1 ] * vec3[ 0 ] ) * q[ 3 ] + ( - q[ 0 ] * vec3[ 0 ] - q[ 1 ] * vec3[ 1 ] - q[ 2 ] * vec3[ 2 ] ) * - q[ 2 ] + ( q[ 3 ] * vec3[ 0 ] + q[ 1 ] * vec3[ 2 ] - q[ 2 ] * vec3[ 1 ] ) * - q[ 1 ] - ( q[ 3 ] * vec3[ 1 ] + q[ 2 ] * vec3[ 0 ] - q[ 0 ] * vec3[ 2 ] ) * - q[ 0 ]
	] )
}
