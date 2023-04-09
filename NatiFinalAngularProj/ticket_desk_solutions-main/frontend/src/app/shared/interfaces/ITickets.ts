export interface Ticket {
    _id?: string | null;
    ticketId?: string | null;
    status?: string | null;
    priority?: string | null;
    subject?: string | null;
    message?: string | null;
    agent?: string | null;
    createdAt?: Date | null;
    completedAt?: Date | null;
}
