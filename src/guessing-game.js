class GuessingGame {
	constructor() {
		this.index = 2
		this.little = 0
		this.higher = 0
		this.middle = 0
	}
	setRange(min, max) {
		this.little = min
		this.higher = max
		this.middle = Math.round((this.higher - this.middle) / this.index)
	}
	guess() {
		return this.middle
	}
	lower() {
		this.higher = this.middle
		this.middle =
			this.little + Math.round((this.higher - this.little) / this.index)
	}
	greater() {
		this.little = this.middle
		this.middle =
			this.middle + Math.round((this.higher - this.middle) / this.index)
	}
}

module.exports = GuessingGame
