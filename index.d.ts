export = notenv;

declare namespace notenv {
    /**
     *
     * @param path Either undefined to be `.env` at the root of your project, or defined to a separately located file
     *
     * ```js
     * import notenv from '@atlc/notenv';
     * notenv.config();
     * // OR
     * notenv.config(path.join(__dirname, '../path/to/file.env'))
     *
     * const DB_URL = process.env.DATABASE_URL;
     *
     * ```
     */
    export function config(path?: string): void;
}
