export interface FetchParams {
    token?: string;
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

export class Client {
    @loggedMethod
    public async fetch(params: FetchParams): Promise<string> {
        const response = await fetch('https://bind.com');
        console.log(response);
        return 'result';
    }
}