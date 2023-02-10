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
