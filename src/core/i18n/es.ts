export default {
    people: {
        name: {
            label: 'Nombre'
        },
        age: {
            label: 'Edad'
        },
        sex: {
            label: 'Género',
            enum: {
                male: 'Male',
                female: 'Female',
            }
        },
        hair: {
            label: 'Pelo',
            enum: {
                brunette: 'Castaño',
                blonde: 'Rubio',
                red: 'Rojo',
                black: 'Negro',
                white: 'Blanco',
                orange: 'Naranja',
                yellow: 'Amarillo',
                green: 'Verde',
                blue: 'Azul',
                indigo: 'Azul oscuro',
                violet: 'Violeta',
                pink: 'Rosa',
                brown: 'Marrón',
            }
        },
        eyes: {
            label: 'Ojos',
            enum: {
                hazel: 'Castaño',
                blue: 'Azul',
                green: 'Verde',
                gray: 'Gris',
                amber: 'Miel',
                red: 'Rojo',
                orange: 'Naranja',
                yellow: 'Anarillo',
                indigo: 'Azul oscuro',
                violet: 'Violeta',
                pink: 'Rosa',
            }
        },
        weight: {
            label: 'Peso'
        },
        height: {
            label: 'Altura'
        },
        race: {
            label: 'Raza',
            enum: {
                caucasian: 'Caucasiano',
                negroid: 'Negroide',
                mediterranean: 'Mediterraneo',
                gypsy: 'Gitano',
                maghreb: 'Magrebí',
                middleEastern: 'Oriente medio',
                asian: 'Asiático',
                hispanic: 'Hispano',
                indian: 'Indio',
                mongoloid: 'Mongoloide',
                australoid: 'Australoide'
            }
        },
        civil: {
            label: 'Estado Civil',
            enum: {
                single: 'Soltero',
                married: 'Casado',
                separated: 'Separado',
                widowed: 'Viudo',
            }
        },
        children: {
            label: 'Hijos'
        },
        activity: {
            label: 'Actividad física',
            enum: {
                none: 'Nada',
                low: 'Baja',
                moderate: 'Moderada',
                high: 'Alta',
            }
        },
        illnessAlergieList: {
            label: 'Enfermedades y alergias'
        },
    }
}