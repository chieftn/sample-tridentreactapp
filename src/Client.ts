export interface FetchParams {
    token?: string;
}

export interface EventLogParameters {
    description: string;
}
export function withLoggingAsync(params: EventLogParameters) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function loggedMethodAsync<This, Args extends any[], Return>(
        target: (this: This, ...args: Args) => Promise<Return>,
        context?: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Promise<Return>>
    ) {

        const methodName = String(context?.name);
        async function replacementMethod(this: This, ...args: Args): Promise<Return> {
            try {
                 // eslint-disable-next-line no-console
                console.log(`LOG: Entering method '${methodName}'. ${params.description}`);
                const result = await target.call(this, ...args);
                console.log(`LOG: Exiting method '${methodName}'.`);

                return result;

            } catch (e) {
                console.log(`LOG: Exiting method on error '${methodName}'.`);
                throw e;
            }
        }

        return replacementMethod;
    }

    return loggedMethodAsync;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function loggedMethod<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
    context?: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {

    const methodName = String(context?.name);

    function replacementMethod(this: This, ...args: Args): Return {

        // eslint-disable-next-line no-console
        console.log(`LOG: Entering method '${methodName}'.`);
        const result = target.call(this, ...args);
        // eslint-disable-next-line no-console
        console.log(`LOG: Exiting method '${methodName}'.`);
        // eslint-disable-next-line no-console
        console.log('LOG' + result);
        return result;
    }

    return replacementMethod;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function loggedMethodAsync<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Promise<Return>,
    context?: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Promise<Return>>
) {

    const methodName = String(context?.name);

    async function replacementMethod(this: This, ...args: Args): Promise<Return> {
        try {
            console.log(`LOG: Entering method '${methodName}'.`);
            const result = await target.call(this, ...args);
            console.log(`LOG: Exiting method '${methodName}'.`);

            return result;

        } catch (e) {
            console.log(`LOG: Exiting method on error '${methodName}'.`);
            throw e;
        }
    }

    return replacementMethod;
}

export class Client {
    public fetchSync(): string {
        return 'hi';
    }

    public async fetchMe(params: FetchParams): Promise<string> {
        return withLoggingAsync({ description: 'hi' })(async () => {
            const response = await fetch('https://bing.com');
            console.log(response);
            return 'hi';
        })();
    }

    @withLoggingAsync({ description: 'certifiedeventname'})
    public async fetch(params: FetchParams): Promise<string> {
        const response = await fetch('https://bing.com');
        console.log(response);
        return 'result';
    }
}

