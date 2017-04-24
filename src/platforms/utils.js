import { subtotalsObjectToArray } from "../totals";
import { subtotalFromTiers } from "../tiers";

export default function subtotalFromPlatforms(platforms) {
	return subtotalsObjectToArray(platforms.reduce((total, platform) => subtotalFromTiers(platform.tiers, total), {}));
}