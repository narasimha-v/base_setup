/**
 * @description Test working route
 * @route GET
 * @access Public
 */
export const testController = async (req, res, next) => {
	return res.status(200).json({
		message: 'response from route'
	});
};
