export function useAsyncEffect<T>(
	run: (signal: AbortSignal) => Promise<T>,
	setLoading: (isLoading: boolean) => boolean,
	setError: (error: Error | null) => Error | null,
	trackDependencies?: () => unknown,
): void {
	$effect((): (() => void) => {
		trackDependencies?.();

		const ac = new AbortController();

		(async (): Promise<void> => {
			try {
				setLoading(true);
				await run(ac.signal);
			} catch (e) {
				if (!ac.signal.aborted) {
					setError(e as Error);
				}
			} finally {
				if (!ac.signal.aborted) {
					setLoading(false);
				}
			}
		})().catch(
			(e: unknown): Error | false | null =>
				!ac.signal.aborted && setError(e as Error),
		);

		return (): void => ac.abort();
	});
}
