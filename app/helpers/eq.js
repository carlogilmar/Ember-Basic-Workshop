import { helper } from '@ember/component/helper';

let eq = (params) => params[0] === params[1];

export default helper(eq);
