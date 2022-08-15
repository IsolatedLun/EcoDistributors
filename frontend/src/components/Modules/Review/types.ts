import type { Props_DB_Model, Props_User } from '../../../types';
import type { Props_StarRater } from '../StarRater/types';

export interface Props_Review extends Props_DB_Model {
	user: Props_User;
	rating: Props_StarRater;

	title: string;
	comment: string;
}
