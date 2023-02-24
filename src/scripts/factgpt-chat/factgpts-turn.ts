import { v4 as uuidv4 } from "uuid";
import getReply from "./get-reply";

export default async function factGptsTurn(
    message: string,
    convoState: any,
    history: any,
) {
    const replies = await getReply(message, convoState, "rate-reply");
    history.setValue((h: any) => [...h, ...replies]);
}
