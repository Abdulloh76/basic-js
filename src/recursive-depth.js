const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let previous, current;
		
		// calculate depth of elements from last to first
		current =
			arr[arr.length - 1].length === undefined || typeof arr[arr.length - 1] === 'string'
				? 0
				: arr[arr.length - 1].length === 0 ? 1 : this.calculateDepth(arr[arr.length - 1]);

		for (let i = arr.length - 1; i > 0; i--) {
			previous =
				arr[i - 1].length === undefined || typeof arr[i - 1] === 'string'
					? 0
					: arr[i - 1].length === 0 ? 1 : this.calculateDepth(arr[i - 1]);

			current = previous > current ? previous : current;
		}

		return current + 1;
	}
};
