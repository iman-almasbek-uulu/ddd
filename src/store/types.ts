export interface Worker {
    id: string,
    avatar: string,
    name: {
        en: string,
        ru: string
    },
    specialization: {
        en: string,
        ru: string
    }
}

export interface WorkerState {
    workers: Worker[];
    status: string | null;
    error: unknown;
  }