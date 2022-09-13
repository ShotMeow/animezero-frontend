export function ageCompileHelper(age?: number) {
	switch (age) {
		case 6:
			return 'PG - (Рекомендуется присутствие родителей)';
		case 12:
			return 'PG-13 - (Детям до 13 лет просмотр не желателен)';
		case 16:
			return 'R-17 - (Лицам до 17 лет обязательно присутствие взрослого)';
		case 18:
			return 'R+ - (Лицам до 17 лет просмотр запрещен)';
		default:
			return 'G - (Возрастные ограничения отсутствуют)';
	}
}
