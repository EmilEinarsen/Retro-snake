export class Vec {
	constructor(x, y) {
		this.x = x
		this.y = y??x
	}
	add(v) {
		this.x += v.x
		this.y += v.y
		return this
	}
	mult(v) {
		this.x *= v
		this.y *= v
		return this
	}
	equal(v) {
		return this.x === v.x && this.y === v.y
	}
	static clone(v) {
		if (v instanceof Vec) 
			return new Vec(v.x, v.y)
		throw Error('Invalid argument')
	}
	clone() {
		return Vec.clone(this)
	}
}
