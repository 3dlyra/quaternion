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
