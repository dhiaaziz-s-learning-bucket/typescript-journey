enum TicketSupportStatus {
    Closed = -1, //default 0
    Open,
    InProgress,
}

console.log(TicketSupportStatus.Closed)
console.log(TicketSupportStatus.Open)
console.log(TicketSupportStatus.InProgress)

interface TicketSupport {
    title: string,
    status: TicketSupportStatus,
}

const ticket: TicketSupport = {
    title: 'test',
    status: TicketSupportStatus.Open,
}