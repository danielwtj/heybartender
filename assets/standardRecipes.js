export const Units = {
    BARSPOON: 'Barspoon',
    OUNCE: 'Ounce',
    ML: 'mL',
    DASH: 'Dash',
}

const recipes = [
    {
        key: '0',
        title: 'Old Fashioned',
        icon: 'rocks',
        ingredients: [
            {
                quantity: 2,
                unit: Units.OUNCE,
                name: 'Bourbon',
            },
            {
                quantity: 1,
                unit: Units.BARSPOON,
                name: 'Rich (2:1) Demerara Simple',
            },
            {
                quantity: 2,
                unit: Units.DASH,
                name: 'Angostura Bitters',
            },
            {
                quantity: 1,
                unit: Units.DASH,
                name: 'Orange Bitters',
            },
        ],
        instructions: 'Prepare double rocks glass with large (2x2) cube of ice.  Add all ingredients to mixing glass, top with ice, and stir 15 seconds.  Strain over large cube and garnish with orange twist.',
    },
    {
        key: '1',
        title: 'Manhattan',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: 2,
                unit: Units.OUNCE,
                name: 'Rye Whiskey',
            },
            {
                quantity: 1,
                unit: Units.OUNCE,
                name: 'Sweet Vermouth',
            },
            {
                quantity: 2,
                unit: Units.DASH,
                name: 'Angostura Bitters',
            },
        ],
        instructions: 'Prepare chilled cocktail glass.  Add all ingredients to mixing glass, top with ice, and stir 20 seconds.  Strain into prepared glass and garnish with skewered cherry.',

    },
    {
        key: '2',
        title: 'Whiskey Sour',
        icon: 'rocks',
        ingredients: [
            {
                quantity: 2,
                unit: Units.OUNCE,
                name: 'Bourbon',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Lemon Juice',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Rich (2:1) Demerara Simple',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Egg White'
            }
        ],
        instructions: 'Prepare chilled double rocks glass.  Add all ingredients to shaker tin and dry shake vigorously.  Add ice to tin and shake again for 15 seconds.  Double strain over fresh ice and garnish with skewered lemon twist and cherry.',
    },
    {
        key: '3',
        title: 'Negroni',
        icon: 'rocks',
        ingredients: [
            {
                quantity: 1,
                unit: Units.OUNCE,
                name: 'Dry Gin',
            },
            {
                quantity: 1,
                unit: Units.OUNCE,
                name: 'Campari',
            },
            {
                quantity: 1,
                unit: Units.OUNCE,
                name: 'Sweet Vermouth',
            },
        ],
        instructions: 'Prepare double rocks glass with large (2x2) cube of ice.  Add all ingredients to mixing glass, top with ice, and stir for 15 seconds. Strain over large cube and garnish with orange twist.',
    },
    {
        key: '4',
        title: 'Boulevardier',
        icon: 'rocks',
        ingredients: [
            {
                quantity: 1.5,
                unit: Units.OUNCE,
                name: 'Bourbon',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Campari',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Sweet Vermouth',
            },
        ],
        instructions: 'Prepare double rocks glass with large (2x2) cube of ice.  Add all ingredients to mixing glass, top with ice, and stir for 15 seconds. Strain over large cube and garnish with orange twist.',
    },
    {
        key: '5',
        title: 'Pisco Sour',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: 2,
                unit: Units.OUNCE,
                name: 'Pisco',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Lemon Juice',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Lime Juice',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Rich (2:1) Simple',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Egg White',
            },
        ],
        instructions: 'Prepare chilled coupe. Combine all ingredients in shaker tin and dry shake vigorously. Add ice to tin and shake again for 15 seconds. Double strain into coupe and garnish with angostura bitters on egg foam.',
    },
    {
        key: '6',
        title: 'Margarita',
        icon: 'rocks',
        ingredients: [
            {
                quantity: 2,
                unit: Units.OUNCE,
                name: 'Blanco Tequila',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Lime Juice',
            },
            {
                quantity: .25,
                unit: Units.OUNCE,
                name: 'Agave Syrup (2:1)',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Combier Orange',
            },
        ],
        instructions: 'Prepare double rocks glass with half salted rim. Combine all ingredients in shaker tin and top with ice. Shake vigorously for 10 seconds and strain over fresh ice. Garnish with lime wheel.',
    },
    {
        key: '7',
        title: 'Tom Collins',
        icon: 'collins',
        ingredients: [
            {
                quantity: 1.5,
                unit: Units.OUNCE,
                name: 'Old Tom Gin',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Lemon Juice',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Rich (2:1) Simple',
            },
            {
                quantity: 3,
                unit: Units.OUNCE,
                name: 'Soda Water',
            }
        ],
        instructions: 'Prepare collins glass.  Combine gin, lemon, and simple in shaker tin and top with ice. Shake vigorously for 10 seconds and strain over fresh ice.  Top with soda and garnish with lemon wedge.',
    },
    {
        key: '8',
        title: 'Aviation',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: 2,
                unit: Units.OUNCE,
                name: 'London Dry Gin',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Lemon Juice',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Maraschino Liqueur',
            },
            {
                quantity: .25,
                unit: Units.OUNCE,
                name: 'Creme de Violette',
            },
            {
                quantity: 1,
                unit: Units.BARSPOON,
                name: 'Rich (2:1) Simple',
            }
        ],
        instructions: 'Prepare chilled cocktail glass.  Combine all ingredients in shaker tin and top with ice. Shake vigorously for 10 seconds and double strain into cocktail glass.  Garnish with lemon twist.',
    },
    {
        key: '9',
        title: 'Bee\'s Knees',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: 2,
                unit: Units.OUNCE,
                name: 'Dry Gin',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Lemon Juice',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Honey Syrup (2:1)',
            }
        ],
        instructions: 'Prepare chilled cocktail glass.  Combine all ingredients in shaker tin and top with ice. Shake vigorously for 10 seconds and double strain into cocktail glass.',
    },
    {
        id: '10',
        title: 'Paper Plane',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Bourbon',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Amaro Nonino',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Aperol',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Lemon Juice',
            },
        ],
        instructions: 'Prepare chilled cocktail glass.  Combine all ingredients in shaker tin and top with ice. Shake vigorously for 10 seconds and double strain into cocktail glass.',
    },
    {
        key: '11',
        title: 'Naked and Famous',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Mezcal',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Yellow Chartreuse',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Aperol',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Lime Juice',
            },
        ],
        instructions: 'Prepare chilled cocktail glass.  Combine all ingredients in shaker tin and top with ice. Shake vigorously for 10 seconds and double strain into cocktail glass.',
    },
    {
        key: '12',
        title: 'Cosmopolitan',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: 2,
                unit: Units.OUNCE,
                name: 'Vodka',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Lime Juice',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Triple Sec',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Cranberry Juice Cocktail',
            }
        ],
        instructions: 'Prepare chilled cocktail glass.  Combine all ingredients in shaker tin and top with ice. Shake vigorously for 10 seconds and double strain into cocktail glass. Garnish with orange twist.',
    },
    {
        id: '13',
        title: 'Vesper',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: 1.5,
                unit: Units.OUNCE,
                name: 'Gin',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Vodka',
            },
            {
                quantity: .25,
                unit: Units.OUNCE,
                name: 'Lillet Blanc',
            },
        ],
        instructions: 'Prepare chilled cocktail glass.  Combine all ingredients in shaker tin and top with ice. Shake vigorously for 10 seconds and strain into cocktail glass. Garnish with lemon twist.',
    },
    {
        id: '14',
        title: 'Last Word',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Navy Strength Gin',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Green Chartreuse',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Maraschino Liqueur',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Lime Juice',
            },
        ],
        instructions: 'Prepare chilled cocktail glass. Combine all ingredients in shaker tin and top with ice. Shake vigorously for 10 seconds and double strain into cocktail glass.',
    },
    {
        id: '15',
        title: '20th Century',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: 1.5,
                unit: Units.OUNCE,
                name: 'Dry Gin',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'White Creme de Cacao',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Lillet Blanc',
            },
            {
                quantity: .75,
                unit: Units.OUNCE,
                name: 'Lemon Juice',
            },
        ],
        instructions: 'Prepare chilled cocktail glass. Combine all ingredients in shaker tin and top with ice. Shake vigorously for 10 seconds and double strain into cocktail glass.',
    },
    {
        id: '16',
        title: 'French 75',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: 1,
                unit: Units.OUNCE,
                name: 'Gin',
            },
            {
                quantity: 1,
                unit: Units.OUNCE,
                name: 'Champagne',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Lemon Juice',
            },
            {
                quantity: .25,
                unit: Units.OUNCE,
                name: 'Rich (2:1) Simple Syrup',
            },
        ],
        instructions: 'Prepare chilled coupe.  Combine gin, lemon juice, and simple syrup in shaker tin and top with ice.  Shake vigorously for 10 seconds, strain, and top with champagne.',
    },
    {
        id: '17',
        title: 'Gimlet',
        icon: 'cocktail',
        ingredients: [
            {
                quantity: 2,
                unit: Units.OUNCE,
                name: 'Gin',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Lime Juice',
            },
            {
                quantity: .5,
                unit: Units.OUNCE,
                name: 'Rich (2:1) Simple Syrup',
            },
        ],
        instructions: 'Prepare chilled couple. Combine all ingredients in shaker tin and top with ice. Shake vigorously for 10 seconds and double strain into coupe. Garnish with lime wheel.',
    }
]

export default recipes