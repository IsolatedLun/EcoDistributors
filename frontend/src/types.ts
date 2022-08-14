export interface Props_DB_Model {
	id: number;
	date_created: string;
}

export type EventFunction<EventT> = (e: EventT) => void;
