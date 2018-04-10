import { createSelector } from 'fe-redux-core/lib/utils/selectors';
import preview from 'pdf-render-component/lib/store/reducers';
import previewPagination from 'pdf-render-component/lib/store/reducers/paginationR';
import ersd, * as ERSD from './ersd';

const previewStoreBranch = 'preview_pagination';
export default { ersd, preview, [previewStoreBranch]: previewPagination };

const pathSelector = createSelector(state => state);
ERSD.pathSelector.attachTo(pathSelector);

export { ERSD };
