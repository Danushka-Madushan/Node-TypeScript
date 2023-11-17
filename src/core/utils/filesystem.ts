import { fileURLToPath } from 'url';
import { dirname } from 'path';

/* ES6 __dirname alternative */
export const FileDirName = (meta: ImportMeta) => {
    const __filename = fileURLToPath(meta.url)
    const __dirname = dirname(__filename)
    const __exactname = (meta.url.split('/').pop() as string).split('.')[0]
    return { __dirname, __filename, __exactname }
}
