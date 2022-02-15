import { SequelizeModuleOptions } from '@nestjs/sequelize';
import 'dotenv/config';
declare class ConfigService {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    private getValue;
    ensureValues(keys: string[]): this;
    getPort(): string;
    isProduction(): boolean;
    getSequelizeConfig(): SequelizeModuleOptions;
}
declare const configService: ConfigService;
export { configService };
