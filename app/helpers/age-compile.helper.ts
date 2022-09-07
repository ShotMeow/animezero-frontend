export function ageCompileHelper(age?: number) {
	if (!age) return 'G - (Возрастные ограничения отсутствуют)'
	else if (age === 6) return 'PG - (Рекомендуется присутствие родителей)'
	else if (age === 12)
		return 'PG-13 - (Детям до 13 лет просмотр не желателен)'
	else if (age === 16)
		return 'R-17 - (Лицам до 17 лет обязательно присутствие взрослого)'
	else if (age === 18) return 'R+ - (Лицам до 17 лет просмотр запрещен)'
}
