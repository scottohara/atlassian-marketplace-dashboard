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
				--surface: oklch(96.115% 0.00011 271.152);
				--surface-container: var(--white);

				--text-primary: var(--black);
				--text-secondary: oklch(59.987% 0.00007 271.152);

				--border-primary: oklch(90.67% 0.0001 271.152);
				--border-secondary: var(--border-primary);

				--grey: oklch(99% 0 0);
			}
		}

		@media (prefers-color-scheme: dark) {
			:root {
				--surface: var(--black);
				--surface-container: oklch(20.463% 0.00002 271.152);

				--text-primary: var(--white);
				--text-secondary: oklch(71.547% 0.00008 271.152);

				--border-primary: var(--green);
				--border-secondary: var(--text-secondary);

				--grey: oklch(10% 0 0);
			}
		}

		:root {
			color-scheme: light dark;

			--text-error: var(--red);
			--border-radius: 12px;

			--white: oklch(100% 0.00011 271.152);
			--black: oklch(0% 0 0);
			--green: oklch(67.122% 0.18384 149.285);
			--blue: oklch(66% 0.15 245);
			--yellow: oklch(90% 0.12 95);
			--purple: oklch(60% 0.14 320);
			--red: oklch(62% 0.17 25);
		}

		body {
			margin: 1rem;
			background-color: var(--surface);
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
		}
	}
</style>