/* eslint-disable no-unused-vars */
const data = {
    feedback: {
        'full-name': {
            title: 'Представьтесь:',
            content: {
                name: {
                    label: 'Имя',
                    placeholder: 'Петр',
                    isRequired: true
                },
                surname: {
                    label: 'Фамилия',
                    placeholder: 'Иванов',
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
            title: 'Контактная информация:',
            content: {
                'phone-number': {
                    label: 'Контактный телефон:',
                    placeholder: 'Введите телефон',
                    isRequired: true,
                    icon: 'tel'
                },
                'e-mail': {
                    label: 'Электронная почта:',
                    placeholder: 'Введите e-mail',
                    isRequired: true,
                    icon: 'email'
                }
            }
        },
        impression: {
            title: 'Ваше общее впечатление:',
            content: [
                {
                    label: 'Скорее положительное',
                    checked: true
                },
                {
                    label: 'Скорее отрицательное',
                    checked: false
                },
                {
                    label: 'Затрудняюсь ответить',
                    checked: false
                }
            ]
        },
        landmarks: {
            title: 'Посещенные достопримечательности:',
            content: [
                {
                    label: 'Мост дьявола',
                    checked: true
                },
                {
                    label: 'Слайд-парк',
                    checked: true
                },
                {
                    label: 'Гора-Колокол',
                    checked: false
                },
                {
                    label: 'Красные скалы',
                    checked: true
                }
            ]
        },
        feeling: {
            title: 'Опишите свои эмоции:',
            content: [
                {
                    placeholder: 'Опишите подробно все свои восторги'
                }
            ]
        }
    }
};
