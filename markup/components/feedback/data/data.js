/* eslint-disable no-unused-vars, no-useless-escape */
const data = {
    feedback: {
        'full-name': {
            title: 'Представьтесь:',
            content: {
                name: {
                    label: 'Имя',
                    placeholder: 'Петр',
                    isRequired: true,
                    pattern: `[А-Яа-яЁё]`
                },
                surname: {
                    label: 'Фамилия',
                    placeholder: 'Иванов',
                    isRequired: true,
                    pattern: `[А-Яа-яЁё]`
                },
                patronymic: {
                    label: 'Отчество',
                    placeholder: 'Александрович',
                    isRequired: false,
                    pattern: ''
                }
            }
        },
        'contact-info': {
            title: 'Контактная информация:',
            content: {
                'phone-number': {
                    label: 'Контактный телефон',
                    placeholder: 'Введите телефон',
                    isRequired: true,
                    pattern: `(\+?\d[- .]*){7,13}`,
                    icon: 'phone'
                },
                'e-mail': {
                    label: 'Электронная почта',
                    placeholder: 'Введите e-mail',
                    isRequired: true,
                    pattern: `[^@]+@[^@]+\.[a-zA-Z]{2,6}`,
                    icon: 'email'
                }
            }
        },
        impression: {
            title: 'Ваше общее впечатление:',
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
            title: 'Посещенные <span>достопримечательности:</span>',
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
            title: 'Опишите свои эмоции:',
            content: {
                placeholder: 'Опишите подробно все свои восторги'
            }
        }
    }
};
