# Quaternion
This library is a quaternion part of the 3DLyra's math library.
### Installation
```
npm i @3dlyra/quaternion
```
### Example
```JavaScript
import * as Vector3 from "@3dlyra/quaternion"

const a = Quaternion.create() // (a.k.a identity) Float32Array[ 0, 0, 0, 1 ]
const b = Quaternion.rotateX( Quaternion.create(), Math.PI )

console.log( Quaternion.angleBetween( a, b ) ) // 3.141592653589793 (=== Math.PI)

console.log( Quaternion.applyToVector3( b, [ 1, 2, 3 ] ) // [ 1, -2, -3 ]
```

### API
```TypeScript
// type quaternion = Float32Array( 4 )
// type vector3 = Float32Array( 3 ) [or use @3dlyra/vector3]

create( x?: number, y?: number, z?: number, w?: number ): quaternion;
rotateX( q: quaternion, radian: number ): quaternion;
rotateY( q: quaternion, radian: number ): quaternion;
rotateZ( q: quaternion, radian: number ): quaternion;
conjugate( q: quaternion ): quaternion;
dot( a: quaternion, b: quaternion ): number;
invert( q: quaternion ): quaternion;
slerp( a: quaternion, b: quaternion, t: number ): quaternion;
applyToVector3( q: quaternion, vec3: vector3 ): vector3;
angleBetween( a: quaternion, b: quaternion ): number;
```
