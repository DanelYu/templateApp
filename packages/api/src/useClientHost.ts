const ClientConfig = {
    Host: '',
}

export function useClientHost(config: string | typeof ClientConfig): void {
    if (typeof config === 'string') {
        ClientConfig.Host = config
    } else {
        Object.assign(ClientConfig, config)
    }
}