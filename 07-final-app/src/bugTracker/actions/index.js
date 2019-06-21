import { addNew } from './addNew';
import { toggle } from './toggle';
import { removeClosed } from './removeClosed';
import { toggleFilter } from './toggleFilter';

let bugActionCreators = {
	addNew,
	toggle,
	removeClosed,
	toggleFilter
};

export default bugActionCreators;