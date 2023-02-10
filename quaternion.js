export function create( x, y, z, w ) {

	return new Float32Array( [ x || 0, y || 0, z || 0, w || 1 ] )
}
