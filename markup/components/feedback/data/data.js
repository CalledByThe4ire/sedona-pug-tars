/* eslint-disable no-unused-vars, no-useless-escape */
const data = {
    feedback: {
        'full-name': {
            heading: 'Представьтесь:',
            content: {
                name: {
                    label: 'Имя',
                    placeholder: 'Петр',
                    pattern: '([А-Яа-яЁё]+)',
                    isRequired: true
                },
                surname: {
                    label: 'Фамилия',
                    placeholder: 'Иванов',
                    pattern: '([А-Яа-яЁё]+)',
                    isRequired: true
                },
                patronymic: {
                    label: 'Отчество',
                    placeholder: 'Александрович',
                    isRequired: false
                }
            }
        },
        'contact-info': {
            heading: 'Контактная информация:',
            content: {
                'phone-number': {
                    label: '<span>Контактный</span> телефон',
                    placeholder: 'Введите телефон',
                    pattern: '(\\+?\\d[- .]*){7,13}',
                    isRequired: true,
                    icon: 'phone'
                },
                'e-mail': {
                    label: 'Электронная&nbsp;почта',
                    placeholder: 'Введите e-mail',
                    pattern: '[^@]+@[^@]+\\.[a-zA-Z]{2,6}',
                    isRequired: true,
                    icon: 'email'
                }
            }
        },
        impression: {
            heading: 'Ваше общее впечатление:',
            content: [
                {
                    label: 'Скорее положительное',
                    name: 'impression',
                    value: 'positive',
                    isChecked: true
                },
                {
                    label: 'Скорее отрицательное',
                    name: 'impression',
                    value: 'negative',
                    isChecked: false
                },
                {
                    label: 'Затрудняюсь ответить',
                    name: 'impression',
                    value: 'neutral',
                    isChecked: false
                }
            ]
        },
        landmarks: {
            heading: 'Посещенные <span>достопримечательности:</span>',
            content: [
                {
                    label: 'Мост дьявола',
                    isChecked: true
                },
                {
                    label: 'Слайд-парк',
                    isChecked: true
                },
                {
                    label: 'Гора-Колокол',
                    isChecked: false
                },
                {
                    label: 'Красные скалы',
                    isChecked: true
                }
            ]
        },
        feeling: {
            heading: 'Опишите свои эмоции:',
            content: {
                placeholder: 'Опишите подробно все свои восторги'
            }
        }
    }
};
