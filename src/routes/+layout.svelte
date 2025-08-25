<script lang="ts">
	import type { Snippet } from "svelte";
	import favicon from "$lib/assets/favicon.ico";

	const { children }: { children?: Snippet } = $props();

</script>

<svelte:head>
	<link href={favicon} rel="icon"/>
</svelte:head>

{@render children?.()}

<style>
	:global {
		@media (prefers-color-scheme: light) {
			:root {
				--bg-color: rgb(242, 242, 242);

				--primary-text-color: rgb(0, 0, 0);
				--secondary-text-color: rgb(128, 128, 128);
				--error-text-color: rgb(255, 0, 0);

				--primary-border-color: rgb(224, 224, 224);
				--secondary-border-color: var(--primary-border-color);

				--card-bg-color: rgb(255, 255, 255);

				--grey: oklch(0.99 0 0);
			}
		}

		@media (prefers-color-scheme: dark) {
			:root {
				--bg-color: rgb(0, 0, 0);

				--primary-text-color: rgb(255, 255, 25	5);
				--secondary-text-color: rgb(163, 163, 163);
				--error-text-color: rgb(255, 0, 0);

				--primary-border-color: var(--green);
				--secondary-border-color: rgb(163, 163, 163);

				--card-bg-color: rgb(23, 23, 23);

				--grey: oklch(0.1 0 0);
			}
		}

		:root {
			color-scheme: light dark;

			--border-radius: 12px;

			--logo-size: 56px;
			--logo-bg-color: rgb(255, 255, 255);

			--loading-bg-color: rbga(0, 0, 0, 0.08);
			--loading-bar-color: color-mix(in oklch, var(--green) 45%, transparent);

			--green: oklch(67.122% 0.18384 149.285);
			--blue: oklch(0.66 0.15 245);
			--yellow: oklch(0.9 0.12 95);
			--purple: oklch(0.6 0.14 320);
			--red: oklch(0.62 0.17 25);
		}

		body {
			margin: 1rem;
			background-color: var(--bg-color);
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
		}
	}
</style>