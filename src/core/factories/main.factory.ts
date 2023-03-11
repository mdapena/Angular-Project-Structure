import { ConfigService } from "@config/services/config.service";

/** The provided function is injected at application startup and executed during app initialization
 *  @param config Dependency service */
export function mainFactory(config: ConfigService) {
    return () => config.load().then(() => {
        // Callbacks
    });
}