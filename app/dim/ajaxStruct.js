/*
 * Ajax 返回的状态码管理。
 * 包括 Ajax 标准结构键名。
 *
 * @since 2018-05-17
 * @version 1.0
 * @author Luowen
 */


/** 接口状态码键名。 */
const CODE_KEY = 'c';
/** 接口描述消息键名。 */
const MESSAGE_KEY = 'd';
/** 接口返回结果键名。 */
const RESULT_KEY = 'r';


/** 成功状态码。 */
const SUCCESS_CODE = 1;
/** 失败状态码。 */
const FAILD_CODE = 0;



module.exports = {
	CODE_KEY,
	MESSAGE_KEY,
	RESULT_KEY,

	SUCCESS_CODE,
	FAILD_CODE
};
