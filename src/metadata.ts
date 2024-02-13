/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./events/dto/create-event.dto"), { "CreateEventDto": { eventName: { required: true, type: () => String }, eventDescription: { required: true, type: () => String }, eventLocation: { required: true, type: () => String }, eventDatetime: { required: true, type: () => String }, eventTypeId: { required: true, type: () => String }, userId: { required: true, type: () => String } } }]], "controllers": [[import("./events/events.controller"), { "EventsController": { "createEvent": {}, "getEvents": {} } }]] } };
};