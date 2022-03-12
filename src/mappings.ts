
export type Mapping = {
    from: string, to: string, revert: string[],
}

export const mappings = [
    [{ from: 'ch', to: 'х', revert: [] }],
    [{ from: 'ja', to: 'я', revert: [] }],
    [{ from: 'ją', to: 'яь', revert: [] }],
    [
        { from: 'ju', to: 'ю', revert: [] },
        { from: 'jó', to: 'ю', revert: [] },
    ],
    [
        { from: 'je', to: 'є', revert: [] },
        { from: 'ie', to: 'є', revert: [] },
    ], [
        { from: 'ję', to: 'єь', revert: [] },
        { from: 'ię', to: 'єь', revert: [] },
    ],
    [{ from: 'ji', to: 'ї', revert: [] }],
    [{ from: 'szcz', to: 'щ', revert: [] }],
    [{ from: 'sz', to: 'ш', revert: ['шcz'] }],
    [{ from: 'cz', to: 'ч', revert: ['szч'] }],
    [
        { from: 'ż', to: 'ж', revert: [] },
        { from: 'rz', to: 'ж', revert: [] }
    ],
    [{ from: 'ń', to: 'нь', revert: [] }],
    [{ from: 'ź', to: 'зь', revert: [] }],
    [{ from: 'ś', to: 'сь', revert: [] }],
    [{ from: 'ć', to: 'ць', revert: [] }],
    [{ from: 'ą', to: 'аь', revert: ['jаь'] }],
    [{ from: 'ę', to: 'еь', revert: ['jеь', 'iеь'] }],
    [
        { from: 'a', to: 'а', revert: ['jа'] },
        { from: 'm', to: 'м', revert: [] },
        { from: 'o', to: 'о', revert: [] },
        { from: 't', to: 'т', revert: [] },
        { from: 'e', to: 'е', revert: ['iе', 'jе'] },
        { from: 'k', to: 'к', revert: [] },
        { from: 'i', to: 'і', revert: ['іe', 'jі'] }
    ],
    [
        { from: 'u', to: 'у', revert: ['jу'] },
        { from: 'ó', to: 'у', revert: ['jу'] },
        { from: 'y', to: 'и', revert: [] }
    ],
    [
        { from: 'r', to: 'р', revert: ['рz'] },
        { from: 'p', to: 'п', revert: [] }
    ],
    [{ from: 'w', to: 'в', revert: [] }],
    [{ from: 'z', to: 'з', revert: ['sз', 'cз', 'rз'] }],
    [{ from: 'n', to: 'н', revert: [] }],
    [{ from: 'd', to: 'д', revert: [] }],
    [{ from: 'j', to: 'й', revert: ['йa', 'йą', 'йu', 'йe', 'йę', 'йi'] }],
    [{ from: 'b', to: 'б', revert: [] }],
    [{ from: 'h', to: 'г', revert: ['cг'] }],
    [{ from: 'g', to: 'ґ', revert: [] }],
    [
        { from: 'l', to: 'Ль', revert: [] },
        { from: 'ł', to: 'л', revert: [] },
    ],
    [
        { from: 'c', to: 'ц', revert: ['цh', 'цz'] },
        { from: 's', to: 'с', revert: ['сz'] },
    ],
    [{ from: 'f', to: 'ф', revert: [] }],
]